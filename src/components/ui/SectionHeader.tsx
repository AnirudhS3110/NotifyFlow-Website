type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-12 max-w-2xl md:mb-16">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-sky-400/90">
        {label}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
