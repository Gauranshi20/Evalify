import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className={`rounded-3xl border p-8 ${
        highlighted
          ? "border-blue-600 bg-blue-600 text-white shadow-2xl"
          : "border-slate-200 bg-white shadow-sm"
      }`}
    >
      <h3 className="text-2xl font-bold">{title}</h3>

      <div className="mt-6">
        <span className="text-5xl font-bold">{price}</span>
        <span className="ml-2 text-sm opacity-80">/month</span>
      </div>

      <p className={`mt-6 ${highlighted ? "text-blue-100" : "text-slate-500"}`}>
        {description}
      </p>

      <div className="mt-8 space-y-4">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <Check className="h-5 w-5" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <Button
        className={`mt-10 w-full ${
          highlighted
            ? "bg-white text-blue-600 hover:bg-slate-100"
            : ""
        }`}
      >
        Get Started
      </Button>
    </motion.div>
  );
}