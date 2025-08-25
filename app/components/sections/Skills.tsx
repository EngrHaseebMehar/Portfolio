"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
  ];

  return (
    <motion.section
      id="skills"
      className="min-h-[80vh] flex flex-col items-center justify-center px-6"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 w-full max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15, delayChildren: 0.3 },
          },
        }}
      >
        {skills.map((s) => (
          <motion.div
            key={s}
            className="px-6 py-5 rounded-2xl glass-light dark:glass text-center text-lg font-semibold text-white cursor-pointer"
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 40 },
              visible: { opacity: 1, scale: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 8px 25px rgba(255,255,255,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {s}
          </motion.div>
        ))}

        {/* Git & GitHub */}
        <motion.div
          className="col-span-2 sm:col-span-3 lg:col-span-4 flex justify-center"
          variants={{
            hidden: { opacity: 0, scale: 0.9, y: 40 },
            visible: { opacity: 1, scale: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div
            className="px-6 py-5 rounded-2xl glass-light dark:glass text-center text-lg font-semibold text-white cursor-pointer"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 8px 25px rgba(255,255,255,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Git & GitHub
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
