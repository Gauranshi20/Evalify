import { motion } from "framer-motion";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "How does AI evaluate answer sheets?",
    answer:
      "Evalify uses OCR to extract handwritten or typed text and Gemini AI to compare answers against teacher-defined rubrics, providing accurate marks and detailed feedback.",
  },
  {
    question: "Can teachers edit AI generated marks?",
    answer:
      "Absolutely. AI provides recommendations, but teachers always have the final authority to review, modify and publish grades.",
  },
  {
    question: "Does Evalify support handwritten answer sheets?",
    answer:
      "Yes. Evalify processes scanned handwritten answer sheets using OCR and AI, making evaluation much faster while maintaining high accuracy.",
  },
  {
    question: "Is student data secure?",
    answer:
      "Yes. Student records, answer sheets and evaluation reports are securely stored with role-based access control and encrypted communication.",
  },
  {
    question: "Can institutions customize evaluation rubrics?",
    answer:
      "Yes. Teachers and administrators can create custom marking schemes, rubrics and subject-specific evaluation criteria.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            FAQ
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Frequently Asked
            <span className="text-blue-600"> Questions</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Everything you need to know about Evalify and AI-powered academic evaluation.
          </p>
        </motion.div>

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}