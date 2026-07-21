import { motion } from "framer-motion";

const companies = [
  "GLA University",
  "CBSE Schools",
  "Engineering Colleges",
  "Universities",
  "Coaching Institutes",
  "EdTech Partners",
];

export default function TrustedBy() {
  return (
    <section className="border-y border-slate-200 bg-white py-16 transition-colors dark:border-slate-800 dark:bg-slate-950">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-blue-400">
            Trusted By
          </p>

          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-white">
            Educational Institutions Across India
          </h2>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.06,
              }}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="
                flex
                h-24
                items-center
                justify-center

                rounded-2xl

                border
                border-slate-200

                bg-slate-50

                px-4

                text-center
                font-semibold

                text-slate-600

                shadow-sm

                transition-all
                duration-300

                hover:border-blue-300
                hover:bg-blue-50
                hover:text-blue-600
                hover:shadow-xl

                dark:border-slate-700
                dark:bg-slate-900
                dark:text-slate-300

                dark:hover:border-blue-500
                dark:hover:bg-slate-800
                dark:hover:text-blue-400
              "
            >
              {company}
            </motion.div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}