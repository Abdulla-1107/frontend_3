import { OrnamentDivider } from "@/components/OrnamentDivider";
import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  invert = false,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  invert?: boolean;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"}>
      {eyebrow && (
        <span
          className={`text-xs font-semibold uppercase tracking-[0.28em] ${
            invert ? "text-accent" : "text-accent"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 text-balance font-serif text-3xl font-semibold sm:text-4xl lg:text-[2.75rem] ${
          invert ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {centered && <OrnamentDivider className="mt-6" />}
      {subtitle && (
        <p
          className={`mt-5 text-pretty text-base leading-relaxed ${
            invert ? "text-primary-foreground/70" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
