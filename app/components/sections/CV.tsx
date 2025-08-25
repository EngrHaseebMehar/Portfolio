"use client";

import { motion } from "framer-motion";

export default function CV() {
  return (
    <motion.section
      id="cv"
      className="min-h-[55vh] flex flex-col items-center justify-center px-6 mx-4 my-6 glass-light dark:glass rounded-3xl shadow-xl text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        My CV
      </motion.h2>

      <motion.p
        className="opacity-90 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Download my latest resume in PDF.
      </motion.p>

      <motion.a
        href="Muhammad Haseeb CV.pdf"
        download
        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:shadow-purple-600/40 transition"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.08, boxShadow: "0px 0px 20px rgba(168,85,247,0.6)" }}
        whileTap={{ scale: 0.95 }}
      >
        <i className="fa-solid fa-download" /> Download CV
      </motion.a>
    </motion.section>
  );
}
