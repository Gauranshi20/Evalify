import { Inbox } from "lucide-react";

type Props = {
  title: string;
  description: string;
};

export default function EmptyState({
  title,
  description,
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white p-16 text-center">
      <Inbox
        size={60}
        className="text-slate-400"
      />

      <h2 className="mt-6 text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-3 max-w-md text-slate-500">
        {description}
      </p>
    </div>
  );
}