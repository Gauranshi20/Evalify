import { Loader2 } from "lucide-react";

export default function LoadingOverlay() {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center rounded-3xl bg-white/70 backdrop-blur">
      <div className="flex flex-col items-center gap-4">
        <Loader2
          className="animate-spin text-blue-600"
          size={42}
        />

        <p className="font-semibold text-slate-700">
          AI is evaluating answer sheet...
        </p>
      </div>
    </div>
  );
}