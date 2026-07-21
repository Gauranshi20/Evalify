import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Professor, Computer Science",
    initials: "SJ",
    review:
      "Evalify has reduced our answer sheet evaluation time from days to hours. The AI feedback is remarkably accurate and saves our faculty a tremendous amount of effort.",
  },
  {
    name: "Michael Brown",
    role: "School Principal",
    initials: "MB",
    review:
      "The analytics dashboard gives us clear insights into student performance. Teachers now spend more time mentoring students instead of grading papers.",
  },
  {
    name: "Emily Davis",
    role: "Mathematics Teacher",
    initials: "ED",
    review:
      "The rubric based AI evaluation is consistent and transparent. It has transformed how we conduct internal assessments across multiple classes.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            TESTIMONIALS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Trusted by
            <span className="text-blue-600"> Educators</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Schools, colleges and universities rely on Evalify to simplify
            assessment and improve academic outcomes.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}