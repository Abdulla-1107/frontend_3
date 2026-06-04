import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { OrnamentDivider } from "@/components/OrnamentDivider";
import aboutImg from "@/assets/about-studio.jpg";
import calligraphy from "@/assets/product-calligraphy.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Preserving Eastern Art | YATT Studio" },
      {
        name: "description",
        content:
          "YATT was established in 2022 in Tashkent, specializing in Arabic calligraphy, Quran verses, Hadith artwork, decorative art and traditional Ebru marbling.",
      },
      { property: "og:title", content: "About — YATT Studio" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const ADVANTAGES = ["original", "authentic", "personal", "memorable"];
const STATS = ["year", "visitors", "custom", "craft"];

function AboutPage() {
  const { t } = useI18n();

  return (
    <>
      <section className="bg-primary pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow={t("brand.tagline")}
            title={t("about.heading")}
            invert
          />
        </div>
      </section>

      {/* Story */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={aboutImg}
                alt={t("about.title")}
                loading="lazy"
                width={900}
                height={1000}
                className="mt-8 aspect-[4/5] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
              />
              <img
                src={calligraphy}
                alt={t("about.title")}
                loading="lazy"
                width={900}
                height={1100}
                className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow={t("about.title")} title={t("about.preview.lead")} align="left" />
            <Reveal delay={1}>
              <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground">
                {t("about.story")}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative overflow-hidden bg-primary py-28 text-center">
        <div className="relative mx-auto max-w-3xl px-5">
          <Reveal>
            <span className="font-arabic text-5xl text-accent">۞</span>
            <h2 className="mt-6 text-balance font-serif text-2xl font-medium italic leading-relaxed text-primary-foreground sm:text-3xl lg:text-4xl">
              “{t("about.mission")}”
            </h2>
            <OrnamentDivider className="mt-8" />
            <p className="mt-6 text-pretty text-base leading-relaxed text-primary-foreground/75">
              {t("about.missionText")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading title={t("about.advantagesTitle")} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ADVANTAGES.map((a, i) => (
              <Reveal key={a} delay={i}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 text-center shadow-[var(--shadow-card)]">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent/15 text-accent">
                    <Check className="h-7 w-7" />
                  </span>
                  <p className="mt-5 font-serif text-lg font-semibold leading-snug text-foreground">
                    {t(`adv.${a}`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {STATS.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-serif text-4xl font-semibold text-primary lg:text-5xl">
                {t(`stats.${s}`)}
              </p>
              <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                {t(`stats.${s}Label`)}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
