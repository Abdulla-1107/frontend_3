import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Instagram,
  Send,
} from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { CONTACT } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — YATT Studio | Tashkent, Uzbekistan" },
      {
        name: "description",
        content:
          "Contact YATT Studio in Tashkent for custom Arabic calligraphy and traditional art. Phone +998 99 603 62 04. Open daily 09:00–18:00.",
      },
      { property: "og:title", content: "Contact — YATT Studio" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t, lang } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success(t("contact.formSuccess"));
    setForm({ name: "", email: "", message: "" });
  };

  const info = [
    { Icon: MapPin, label: t("contact.address"), value: CONTACT.address[lang] },
    {
      Icon: Phone,
      label: t("contact.phone"),
      value: CONTACT.phone,
      href: `tel:${CONTACT.phoneHref}`,
    },
    {
      Icon: Clock,
      label: t("contact.hours"),
      value: `${t("contact.hoursValue")} · ${t("contact.hoursTime")}`,
    },
  ];

  return (
    <>
      <section className="bg-primary pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow={t("brand.name")}
            title={t("contact.title")}
            subtitle={t("contact.subtitle")}
            invert
          />
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          {/* Info + actions */}
          <Reveal>
            <div className="space-y-5">
              {info.map(({ Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/5 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="mt-1 block font-serif text-xl text-foreground hover:text-accent">
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 font-serif text-xl text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("cta.whatsapp")}
                </a>
                <a
                  href={`tel:${CONTACT.phoneHref}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  <Phone className="h-4 w-4" />
                  {t("cta.call")}
                </a>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <span className="text-sm font-medium text-muted-foreground">
                  {t("contact.social")}
                </span>
                {[
                  { Icon: Instagram, href: "https://instagram.com" },
                  { Icon: Send, href: "https://t.me" },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-full border border-border text-primary transition-colors hover:border-accent hover:text-accent"
                    aria-label="Social link"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={1}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)]"
            >
              <div className="space-y-5">
                <Field
                  label={t("contact.formName")}
                  value={form.name}
                  onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                  placeholder={t("contact.namePlaceholder")}
                />
                <Field
                  label={t("contact.formEmail")}
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                  placeholder={t("contact.emailPlaceholder")}
                />
                <div>
                  <label className="mb-2 block text-sm font-semibold text-foreground">
                    {t("contact.formMessage")}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder={t("contact.messagePlaceholder")}
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.02]"
                >
                  <Send className="h-4 w-4" />
                  {t("cta.send")}
                </button>
              </div>
            </form>
          </Reveal>
        </div>

        {/* Map */}
        <div className="mx-auto mt-12 max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
              <iframe
                title="Map — Tashkent"
                src="https://www.google.com/maps?q=Tashkent,Uzbekistan&output=embed"
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-foreground">{label}</label>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}
