import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import type { Product } from "@/lib/data";

export function ProductCard({ product }: { product: Product }) {
  const { t, lang } = useI18n();

  return (
    <Link
      to="/products/$id"
      params={{ id: product.id }}
      className="group relative block overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-elegant)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.title[lang]}
          loading="lazy"
          width={900}
          height={1100}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground backdrop-blur">
          {t(`cat.${product.category}`)}
        </span>
        <span className="absolute bottom-4 right-4 grid h-10 w-10 translate-y-3 place-items-center rounded-full bg-accent text-accent-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
          {product.title[lang]}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {product.description[lang]}
        </p>
      </div>
    </Link>
  );
}
