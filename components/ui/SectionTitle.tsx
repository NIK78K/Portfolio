type SectionTitleProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
};

export default function SectionTitle({
  title,
  subtitle,
  eyebrow,
}: SectionTitleProps) {
  return (
    <div className="mb-14 max-w-3xl border-l-2 border-(--primary) pl-5 md:pl-7">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-(--primary)">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold leading-tight text-(--text) md:text-6xl">{title}</h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-base text-(--text-secondary) md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}