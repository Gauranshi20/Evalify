import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  initials: string;
  review: string;
}

export default function TestimonialCard({
  name,
  role,
  initials,
  review,
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        transition: { duration: 0.25 },
      }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl"
    >
      <Quote className="h-10 w-10 text-blue-600" />

      <div className="mt-6 flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className="h-5 w-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="mt-6 leading-8 text-slate-600">
        {review}
      </p>

      <div className="mt-8 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
          {initials}
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">
            {name}
          </h4>

          <p className="text-sm text-slate-500">
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}