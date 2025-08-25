"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-[80vh] flex flex-col items-center justify-center px-6 mx-4 my-6 glass-light dark:glass rounded-3xl shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-3xl text-lg text-center opacity-90 mb-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        I’m Muhammad Haseeb, a passionate Next.js Frontend Developer with a strong focus on
        creating modern, responsive, and user-friendly web applications. I specialize in
        building interactive UIs with clean code and smooth animations using Tailwind CSS and
        React.js.
      </motion.p>

      <motion.p
        className="max-w-3xl text-lg text-center opacity-90"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
      >
        I enjoy turning complex problems into simple, elegant solutions. When I'm not coding, I
        love exploring new web technologies, contributing to open-source projects, and
        improving my skills in UI/UX design.
      </motion.p>
    </motion.section>
  );
}
