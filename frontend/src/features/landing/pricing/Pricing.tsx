import { motion } from "framer-motion";
import PricingCard from "./PricingCard";

const plans = [
  {
    title: "Starter",
    price: "₹999",
    description:
      "Perfect for individual teachers and small classrooms.",
    features: [
      "Up to 200 answer sheets/month",
      "AI Evaluation",
      "Basic Analytics",
      "Email Support",
    ],
  },
  {
    title: "Professional",
    price: "₹2,999",
    description:
      "Ideal for schools and coaching institutes.",
    highlighted: true,
    features: [
      "Unlimited AI Evaluations",
      "Advanced Analytics",
      "Rubric Management",
      "Priority Support",
      "Teacher Dashboard",
      "Student Reports",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom",
    description:
      "Built for universities and large educational organizations.",
    features: [
      "Unlimited Everything",
      "Dedicated AI Models",
      "Custom Integrations",
      "API Access",
      "Dedicated Account Manager",
      "24×7 Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-slate-50 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            PRICING
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Simple &
            <span className="text-blue-600"> Transparent Pricing</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Flexible plans for teachers, schools and universities.
            Upgrade anytime as your institution grows.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}