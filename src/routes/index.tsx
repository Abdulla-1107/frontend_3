import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  PenTool,
  Type,
  BookOpen,
  ScrollText,
  Waves,
  Sparkles,
  ArrowRight,
  Hand,
  Landmark,
  UserCheck,
  Gift,
  Quote,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { PRODUCTS, SERVICES } from "@/lib/data";
import { Hero } from "@/components/sections/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { OrnamentDivider } from "@/components/OrnamentDivider";
import aboutImg from "@/assets/about-studio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YATT — Arabic Calligraphy & Traditional Art Studio | Tashkent" },
      {
        name: "description",
        content:
          "Premium Arabic calligraphy and traditional art studio in Tashkent. Handcrafted name calligraphy, Quran verses, Hadith artwork, Ebru marbling and decorative wall art.",
      },
      { property: "og:title", content: "YATT — Arabic Calligraphy & Traditional Art Studio" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const SERVICE_ICONS: Record<string, LucideIcon> = {
  calligraphy: PenTool,
  names: Type,
  quran: BookOpen,
  hadith: ScrollText,
  ebru: Waves,
  demo: Sparkles,
};

const WHY = [
  { key: "handmade", Icon: Hand },
  { key: "tradition", Icon: Landmark },
  { key: "personal", Icon: UserCheck },
  { key: "gift", Icon: Gift },
];

const TESTIMONIALS = ["t1", "t2", "t3"];

function Index() {
  const { t } = useI18n();
  const featured = PRODUCTS.slice(0, 3);
  const gallery = PRODUCTS.slice(0, 6);

  return (
    <>
      <Hero />

      {/* About preview */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
                <img
                  src={aboutImg}
                  alt={t("about.preview.title")}
                  loading="lazy"
                  width={1400}
                  height={1000}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-primary px-7 py-5 text-primary-foreground shadow-[var(--shadow-gold)] sm:block">
                <span className="font-serif text-4xl font-semibold text-accent">2022</span>
                <span className="mt-1 block text-xs uppercase tracking-widest opacity-80">
                  {t("stats.yearLabel")}
                </span>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow={t("about.preview.title")}
              title={t("about.preview.lead")}
              align="left"
            />
            <Reveal delay={1}>
              <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground">
                {t("about.preview.text")}
              </p>
              <Link
                to="/about"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
              >
                {t("cta.learnMore")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow={t("nav.products")}
            title={t("featured.title")}
            subtitle={t("featured.subtitle")}
          />
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-primary px-8 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {t("cta.viewAll")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-primary py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow={t("brand.tagline")}
            title={t("services.title")}
            subtitle={t("services.subtitle")}
            invert
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = SERVICE_ICONS[s.key];
              return (
                <Reveal key={s.key} delay={i % 3}>
                  <div className="group h-full rounded-2xl border border-accent/15 bg-primary-foreground/[0.03] p-8 transition-all duration-500 hover:border-accent/40 hover:bg-primary-foreground/[0.06]">
                    <span className="grid h-14 w-14 place-items-center rounded-xl bg-accent/15 text-accent transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-6 font-serif text-2xl font-semibold text-primary-foreground">
                      {t(`service.${s.key}.title`)}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                      {t(`service.${s.key}.desc`)}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow={t("brand.name")}
            title={t("gallery.title")}
            subtitle={t("gallery.subtitle")}
          />
          <div className="mt-14 columns-2 gap-4 lg:columns-3 [&>*]:mb-4">
            {gallery.map((p, i) => (
              <Reveal key={p.id} delay={i % 3}>
                <Link
                  to="/products/$id"
                  params={{ id: p.id }}
                  className="group relative block overflow-hidden rounded-2xl"
                >
                  <img
                    src={p.image}
                    alt={p.title.en}
                    loading="lazy"
                    width={900}
                    height={1100}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/80 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="font-serif text-lg text-primary-foreground">
                      {p.title.en}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow={t("brand.tagline")}
            title={t("why.title")}
            subtitle={t("why.subtitle")}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w, i) => (
              <Reveal key={w.key} delay={i}>
                <div className="group h-full rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-elegant)]">
                  <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/5 text-primary transition-colors duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
                    <w.Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                    {t(`why.${w.key}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t(`why.${w.key}.desc`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow={t("testimonials.subtitle")}
            title={t("testimonials.title")}
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((id, i) => (
              <Reveal key={id} delay={i}>
                <figure className="relative h-full rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
                  <Quote className="h-9 w-9 text-accent/40" />
                  <blockquote className="mt-4 text-pretty text-base leading-relaxed text-foreground/90">
                    {t(`${id}.text`)}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                    <span className="h-px w-6 bg-accent" />
                    {t(`${id}.author`)}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative overflow-hidden bg-primary py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-accent blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-arabic text-6xl text-accent"
          >
            ﷽
          </motion.span>
          <h2 className="mt-6 text-balance font-serif text-3xl font-semibold text-primary-foreground sm:text-4xl lg:text-5xl">
            {t("contactCta.title")}
          </h2>
          <OrnamentDivider className="mt-6" />
          <p className="mt-5 text-pretty text-base leading-relaxed text-primary-foreground/75">
            {t("contactCta.subtitle")}
          </p>
          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-9 py-4 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.03]"
          >
            {t("cta.contact")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
