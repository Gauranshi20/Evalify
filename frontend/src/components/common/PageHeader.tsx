type Props = {
  badge: string;
  title: string;
  description: string;
};

export default function PageHeader({
  badge,
  title,
  description,
}: Props) {
  return (
    <section className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          {badge}
        </p>

        <h1 className="mt-2 text-4xl font-bold text-slate-900">
          {title}
        </h1>

        <p className="mt-3 max-w-3xl text-slate-600">
          {description}
        </p>
      </div>
    </section>
  );
}