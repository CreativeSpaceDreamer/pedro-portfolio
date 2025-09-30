interface StatProps {
  label: string;
  value: string;
  description?: string;
}

export function Stat({ label, value, description }: StatProps) {
  return (
    <div className="rounded-2xl border border-border/70 bg-card/60 p-6 shadow-[0_12px_42px_rgba(0,0,0,0.18)]">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground/70">
        {label}
      </p>
      <p className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">{value}</p>
      {description ? (
        <p className="mt-3 text-sm text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
