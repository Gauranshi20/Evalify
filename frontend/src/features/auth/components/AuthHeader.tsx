interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

export default function AuthHeader({
  title,
  subtitle,
}: AuthHeaderProps) {
  return (
    <div className="mb-8 text-center">

      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h1>

      <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
        {subtitle}
      </p>

    </div>
  );
}