import { motion } from "framer-motion";

export default function BackgroundGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, -70, 0],
          opacity: [.2, .45, .2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_90%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#020617_90%)]" />

    </div>
  );
}