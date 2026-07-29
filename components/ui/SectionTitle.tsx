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
    <div className="mb-14 max-w-3xl">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold md:text-5xl">{title}</h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-base text-slate-400 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}