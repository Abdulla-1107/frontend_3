import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Lang, LANGS } from "./translations";

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  langs: typeof LANGS;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "yatt-lang";

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "uz";
  const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (stored && translations[stored]) return stored;
  return "uz";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("uz");

  useEffect(() => {
    setLangState(getInitialLang());
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, l);
    }
  }, []);

  const t = useCallback(
    (key: string) => translations[lang][key] ?? translations.en[key] ?? key,
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t, langs: LANGS }), [lang, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
