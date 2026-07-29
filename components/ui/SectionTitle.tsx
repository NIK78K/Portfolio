type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-16">
      <h2 className="text-4xl font-bold">{title}</h2>

      {subtitle && (
        <p className="mt-3 max-w-2xl text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}