import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Check, MessageCircle, Phone, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { getProduct, getRelated, CONTACT } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/products/$id")({
  component: ProductDetail,
});

function ProductDetail() {
  const { id } = useParams({ from: "/products/$id" });
  const { t, lang } = useI18n();
  const product = getProduct(id);

  if (!product) {
    return (
      <div className="grid min-h-[70vh] place-items-center px-5 text-center">
        <div>
          <p className="font-serif text-3xl text-foreground">{t("detail.notFound")}</p>
          <Link
            to="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("nav.products")}
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelated(product, 3);
  const waText = encodeURIComponent(`${t("cta.customOrder")}: ${product.title[lang]}`);

  return (
    <>
      <section className="bg-background pb-20 pt-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("cta.back")}
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-2">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="group overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
                <img
                  src={product.image}
                  alt={product.title[lang]}
                  width={900}
                  height={1100}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground shadow-[var(--shadow-gold)]">
                <Sparkles className="h-3.5 w-3.5" />
                {t("detail.handmade")}
              </span>
            </motion.div>

            {/* Info */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                {t(`cat.${product.category}`)}
              </span>
              <h1 className="mt-3 text-balance font-serif text-4xl font-semibold leading-tight text-foreground lg:text-5xl">
                {product.title[lang]}
              </h1>

              <div className="mt-8">
                <h2 className="font-serif text-lg font-semibold text-primary">
                  {t("detail.description")}
                </h2>
                <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
                  {product.description[lang]}
                </p>
              </div>

              <dl className="mt-8 space-y-4 rounded-2xl border border-border bg-card p-6">
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <dt className="text-sm font-semibold text-foreground">
                      {t("detail.materials")}
                    </dt>
                    <dd className="text-sm text-muted-foreground">{product.materials[lang]}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <dt className="text-sm font-semibold text-foreground">
                      {t("detail.category")}
                    </dt>
                    <dd className="text-sm text-muted-foreground">
                      {t(`cat.${product.category}`)}
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.02]"
                >
                  <Sparkles className="h-4 w-4" />
                  {t("cta.customOrder")}
                </a>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-primary px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("cta.whatsapp")}
                </a>
              </div>
              <a
                href={`tel:${CONTACT.phoneHref}`}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Phone className="h-4 w-4" />
                {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading title={t("detail.related")} />
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.id} delay={i}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
