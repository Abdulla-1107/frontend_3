import type { Lang } from "./i18n/translations";

import calligraphy from "@/assets/product-calligraphy.jpg";
import nameArt from "@/assets/product-name.jpg";
import quran from "@/assets/product-quran.jpg";
import hadith from "@/assets/product-hadith.jpg";
import ebru from "@/assets/product-ebru.jpg";
import decorative from "@/assets/product-decorative.jpg";

export type CategoryKey =
  | "calligraphy"
  | "names"
  | "quran"
  | "hadith"
  | "ebru"
  | "decorative";

export const CATEGORIES: CategoryKey[] = [
  "calligraphy",
  "names",
  "quran",
  "hadith",
  "ebru",
  "decorative",
];

type Localized = Record<Lang, string>;

export interface Product {
  id: string;
  category: CategoryKey;
  image: string;
  title: Localized;
  description: Localized;
  materials: Localized;
}

const L = (uz: string, en: string, ru: string): Localized => ({ uz, en, ru });

export const PRODUCTS: Product[] = [
  {
    id: "sabr-calligraphy",
    category: "calligraphy",
    image: calligraphy,
    title: L("«Sabr» xattotlik asari", "“Sabr” Calligraphy", "Каллиграфия «Сабр»"),
    description: L(
      "Klassik suls uslubida qo‘lda yozilgan nafis xattotlik asari, kapalak qog‘ozda.",
      "An elegant hand-written piece in the classical Thuluth style on fine paper.",
      "Изящная ручная работа в классическом стиле сульс на тонкой бумаге.",
    ),
    materials: L(
      "Tabiiy siyoh, kapalak qog‘oz, oltin ramka",
      "Natural ink, fine paper, gold frame",
      "Натуральные чернила, тонкая бумага, золотая рама",
    ),
  },
  {
    id: "personal-name",
    category: "names",
    image: nameArt,
    title: L("Shaxsiy ism asari", "Personalized Name Artwork", "Именная работа"),
    description: L(
      "Sizning ismingiz oltin xattotlikda, to‘q yashil zaminda — noyob sovg‘a.",
      "Your name in gold calligraphy on a deep green canvas — a unique gift.",
      "Ваше имя золотой каллиграфией на тёмно-зелёном фоне — уникальный подарок.",
    ),
    materials: L(
      "Akril, oltin bo‘yoq, kanvas",
      "Acrylic, gold paint, canvas",
      "Акрил, золотая краска, холст",
    ),
  },
  {
    id: "ayat-al-kursi",
    category: "quran",
    image: quran,
    title: L("Qur'on oyati asari", "Quran Verse Artwork", "Аят Корана"),
    description: L(
      "Muqaddas oyat oltin bezak va Islomiy geometrik hoshiya bilan.",
      "A sacred verse adorned with gold and an Islamic geometric border.",
      "Священный аят, украшенный золотом и исламским геометрическим орнаментом.",
    ),
    materials: L(
      "Oltin varaq, tabiiy siyoh, yog‘och ramka",
      "Gold leaf, natural ink, wooden frame",
      "Сусальное золото, натуральные чернила, деревянная рама",
    ),
  },
  {
    id: "hadith-wisdom",
    category: "hadith",
    image: hadith,
    title: L("Hadis xattotligi", "Hadith Calligraphy", "Каллиграфия хадиса"),
    description: L(
      "Hikmatli hadis an'anaviy nasx uslubida, ivory qog‘ozda.",
      "A wise Hadith in the traditional Naskh style on ivory paper.",
      "Мудрый хадис в традиционном стиле насх на бумаге цвета слоновой кости.",
    ),
    materials: L(
      "Tabiiy siyoh, ivory qog‘oz, yog‘och ramka",
      "Natural ink, ivory paper, wooden frame",
      "Натуральные чернила, бумага слоновой кости, деревянная рама",
    ),
  },
  {
    id: "ebru-emerald",
    category: "ebru",
    image: ebru,
    title: L("Ebru «Zumrad» asari", "Ebru “Emerald” Artwork", "Эбру «Изумруд»"),
    description: L(
      "Suv ustida yaratilgan noyob marmar naqsh — yashil va oltin uyg‘unligi.",
      "A unique marbled pattern created on water — a harmony of green and gold.",
      "Уникальный мраморный узор, созданный на воде — гармония зелёного и золота.",
    ),
    materials: L(
      "Ebru bo‘yoqlari, maxsus qog‘oz",
      "Ebru paints, special paper",
      "Краски эбру, специальная бумага",
    ),
  },
  {
    id: "geometric-panel",
    category: "decorative",
    image: decorative,
    title: L("Islomiy geometrik panel", "Islamic Geometric Panel", "Исламская геометрическая панель"),
    description: L(
      "Oltin va zumrad ranglardagi murakkab yulduz naqshli dekorativ panel.",
      "A decorative panel with intricate star patterns in gold and emerald.",
      "Декоративная панель со сложными звёздными узорами в золоте и изумруде.",
    ),
    materials: L(
      "Yog‘och o‘ymakorlik, oltin qoplama",
      "Wood carving, gold finish",
      "Резьба по дереву, золотое покрытие",
    ),
  },
  {
    id: "bismillah-calligraphy",
    category: "calligraphy",
    image: calligraphy,
    title: L("«Bismillah» asari", "“Bismillah” Calligraphy", "Каллиграфия «Бисмиллях»"),
    description: L(
      "Diquriy uslubdagi nafis xattotlik — har bir uy uchun barakali bezak.",
      "Refined calligraphy in the Diwani style — a blessed décor for any home.",
      "Изысканная каллиграфия в стиле дивани — благословенное украшение для дома.",
    ),
    materials: L(
      "Tabiiy siyoh, kapalak qog‘oz, oltin ramka",
      "Natural ink, fine paper, gold frame",
      "Натуральные чернила, тонкая бумага, золотая рама",
    ),
  },
  {
    id: "ebru-flow",
    category: "ebru",
    image: ebru,
    title: L("Ebru «Oqim» asari", "Ebru “Flow” Artwork", "Эбру «Поток»"),
    description: L(
      "Tabiiy oqimlardan ilhomlangan, takrorlanmas marmar tekstura.",
      "Inspired by natural currents, an unrepeatable marbled texture.",
      "Вдохновлённая природными течениями, неповторимая мраморная текстура.",
    ),
    materials: L(
      "Ebru bo‘yoqlari, maxsus qog‘oz",
      "Ebru paints, special paper",
      "Краски эбру, специальная бумага",
    ),
  },
  {
    id: "name-duo",
    category: "names",
    image: nameArt,
    title: L("Juftlik ismlari asari", "Couple Names Artwork", "Парные имена"),
    description: L(
      "Ikki ism uyg‘unligi — to‘y va yubileylar uchun mukammal sovg‘a.",
      "A harmony of two names — the perfect gift for weddings and anniversaries.",
      "Гармония двух имён — идеальный подарок на свадьбу и юбилей.",
    ),
    materials: L(
      "Akril, oltin bo‘yoq, kanvas",
      "Acrylic, gold paint, canvas",
      "Акрил, золотая краска, холст",
    ),
  },
];

export function getProduct(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getRelated(product: Product, count = 3) {
  return PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id,
  )
    .concat(PRODUCTS.filter((p) => p.category !== product.category && p.id !== product.id))
    .slice(0, count);
}

export interface ServiceItem {
  key: string;
  icon: string;
}

export const SERVICES: ServiceItem[] = [
  { key: "calligraphy", icon: "PenTool" },
  { key: "names", icon: "Type" },
  { key: "quran", icon: "BookOpen" },
  { key: "hadith", icon: "ScrollText" },
  { key: "ebru", icon: "Waves" },
  { key: "demo", icon: "Sparkles" },
];

export const CONTACT = {
  phone: "+998 99 603 62 04",
  phoneHref: "+998996036204",
  whatsapp: "998996036204",
  address: { uz: "Toshkent, O‘zbekiston", en: "Tashkent, Uzbekistan", ru: "Ташкент, Узбекистан" },
};
