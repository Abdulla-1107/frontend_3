import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { PRODUCTS, CATEGORIES, type CategoryKey } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Handcrafted Calligraphy & Art | YATT" },
      {
        name: "description",
        content:
          "Browse handcrafted Arabic calligraphy, name artworks, Quran verses, Hadith pieces, Ebru marbling and decorative wall art by YATT Studio in Tashkent.",
      },
      { property: "og:title", content: "Products — YATT Studio" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

const PAGE_SIZE = 6;

function ProductsPage() {
  const { t, lang } = useI18n();
  const [active, setActive] = useState<CategoryKey | "all">("all");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchCat = active === "all" || p.category === active;
      const matchQ =
        !q ||
        p.title[lang].toLowerCase().includes(q) ||
        p.description[lang].toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [active, query, lang]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const visible = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  const reset = (fn: () => void) => {
    fn();
    setPage(1);
  };

  return (
    <>
      <section className="bg-primary pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow={t("brand.name")}
            title={t("products.title")}
            subtitle={t("products.subtitle")}
            invert
          />
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* Controls */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              <FilterChip
                label={t("products.all")}
                active={active === "all"}
                onClick={() => reset(() => setActive("all"))}
              />
              {CATEGORIES.map((c) => (
                <FilterChip
                  key={c}
                  label={t(`cat.${c}`)}
                  active={active === c}
                  onClick={() => reset(() => setActive(c))}
                />
              ))}
            </div>

            <div className="relative w-full lg:w-72">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => reset(() => setQuery(e.target.value))}
                placeholder={t("products.search")}
                className="w-full rounded-full border border-border bg-card py-3 pl-10 pr-4 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
              />
            </div>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            {filtered.length} {t("products.results")}
          </p>

          {visible.length === 0 ? (
            <p className="mt-16 text-center font-serif text-2xl text-muted-foreground">
              {t("products.empty")}
            </p>
          ) : (
            <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((p, i) => (
                <Reveal key={p.id} delay={i % 3}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-14 flex items-center justify-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`h-10 w-10 rounded-full text-sm font-semibold transition-colors ${
                    current === i + 1
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-foreground hover:border-accent hover:text-accent"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
        active
          ? "border-accent bg-accent text-accent-foreground shadow-[var(--shadow-gold)]"
          : "border-border bg-card text-foreground hover:border-accent"
      }`}
    >
      {label}
    </button>
  );
}
