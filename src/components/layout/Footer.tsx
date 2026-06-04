import { Link } from "@tanstack/react-router";
import { MapPin, Clock, Phone, Instagram, Send, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { CONTACT } from "@/lib/data";

const NAV = [
  { to: "/", key: "nav.home" },
  { to: "/products", key: "nav.products" },
  { to: "/about", key: "nav.about" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function Footer() {
  const { t, lang } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-accent/50">
              <span className="font-arabic text-xl text-accent">خ</span>
            </span>
            <span className="font-serif text-2xl font-semibold">{t("brand.name")}</span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            {t("footer.about")}
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, href: "https://instagram.com" },
              { Icon: Send, href: "https://t.me" },
              { Icon: MessageCircle, href: `https://wa.me/${CONTACT.whatsapp}` },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-accent/30 text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-lg text-accent">{t("footer.quickLinks")}</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg text-accent">{t("footer.contact")}</h3>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {CONTACT.address[lang]}
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`tel:${CONTACT.phoneHref}`} className="hover:text-accent">
                {CONTACT.phone}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg text-accent">{t("footer.hours")}</h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-3">
              <Clock className="h-4 w-4 shrink-0 text-accent" />
              {t("contact.hoursValue")}
            </li>
            <li className="pl-7 font-medium text-primary-foreground">{t("contact.hoursTime")}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-primary-foreground/50 lg:px-8">
          © {year} {t("brand.name")} — {t("brand.tagline")}. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
