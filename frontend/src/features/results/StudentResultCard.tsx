type Props = {
  name: string;
  subject: string;
  marks: string;
  status: string;
  similarity?: number;
  confidence?: number;
};

export default function StudentResultCard({
  name,
  subject,
  marks,
  status,
  similarity,
  confidence,
}: Props) {
  const statusStyle = {
    completed:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    processing:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    pending:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
    failed:
      "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  };

  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <tr className="border-b border-slate-200 transition-colors duration-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800/60">
      <td className="px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
            {initials}
          </div>

          <div>
            <p className="font-semibold text-slate-900 dark:text-white">
              {name}
            </p>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Student
            </p>
          </div>
        </div>
      </td>

      <td className="px-6">
        <span className="font-medium text-slate-700 dark:text-slate-300">
          {subject}
        </span>
      </td>

      <td className="px-6">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
          {marks}
        </span>
      </td>

      <td className="px-6">
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
          {similarity ?? 0}%
        </span>
      </td>

      <td className="px-6">
        <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">
          {confidence ?? 0}%
        </span>
      </td>

      <td className="px-6">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            statusStyle[
              (status as keyof typeof statusStyle) || "pending"
            ] || statusStyle.pending
          }`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </td>
    </tr>
  );
}