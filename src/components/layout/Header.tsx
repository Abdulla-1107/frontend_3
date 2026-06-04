import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Globe, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n/I18nProvider";
import type { Lang } from "@/lib/i18n/translations";

const NAV = [
  { to: "/", key: "nav.home" },
  { to: "/products", key: "nav.products" },
  { to: "/about", key: "nav.about" },
  { to: "/contact", key: "nav.contact" },
] as const;

function LangSwitcher({ onPick }: { onPick?: () => void }) {
  const { lang, setLang, langs } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-full border border-current/20 px-3 py-1.5 text-sm font-medium transition-colors hover:text-accent"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe className="h-4 w-4" />
        {langs.find((l) => l.code === lang)?.short}
      </button>
      <AnimatePresence>
        {open && (
          <>
            <button
              className="fixed inset-0 z-40 cursor-default"
              aria-hidden
              onClick={() => setOpen(false)}
            />
            <motion.ul
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-popover py-1 text-popover-foreground shadow-xl"
              role="listbox"
            >
              {langs.map((l) => (
                <li key={l.code}>
                  <button
                    onClick={() => {
                      setLang(l.code as Lang);
                      setOpen(false);
                      onPick?.();
                    }}
                    className="flex w-full items-center justify-between px-4 py-2 text-sm transition-colors hover:bg-secondary"
                    role="option"
                    aria-selected={lang === l.code}
                  >
                    {l.label}
                    {lang === l.code && <Check className="h-4 w-4 text-accent" />}
                  </button>
                </li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const solid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-border/60 bg-background/85 text-foreground backdrop-blur-xl shadow-sm"
          : "border-b border-transparent bg-transparent text-primary-foreground"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label={t("brand.name")}>
          <span className="grid h-10 w-10 place-items-center rounded-full border border-accent/50 bg-gradient-to-br from-accent/20 to-transparent">
            <span className="font-arabic text-xl text-accent">خ</span>
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-xl font-semibold tracking-wide">
              {t("brand.name")}
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.22em] opacity-70 sm:block">
              Calligraphy Studio
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative text-sm font-medium tracking-wide transition-colors hover:text-accent"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {t(item.key)}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <LangSwitcher />
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <LangSwitcher />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-current/20"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border/60 bg-background text-foreground lg:hidden"
          >
            <div className="flex flex-col px-5 py-3">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="border-b border-border/50 py-3 text-base font-medium last:border-0"
                  activeProps={{ className: "text-accent" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
