"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="min-h-[60vh] flex flex-col items-center justify-center px-6 pt-32 pb-32 mb-20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>

      <motion.form
        className="w-full max-w-2xl space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.3,
            },
          },
        }}
      >
        <motion.input
          type="text"
          placeholder="Your Name"
          variants={{
            hidden: { opacity: 0, x: -40 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full px-4 py-3 rounded-xl border border-gray-900 dark:!border-white dark:hover:!border-white dark:focus:!border-white bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-600 dark:placeholder-gray-400 caret-gray-900 dark:caret-white focus:outline-none focus:ring-2 focus:ring-yellow-500/40 dark:focus:ring-yellow-400/40"
        />

        <motion.input
          type="email"
          placeholder="Your Email"
          variants={{
            hidden: { opacity: 0, x: 40 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full px-4 py-3 rounded-xl border border-gray-900 dark:!border-white dark:hover:!border-white dark:focus:!border-white bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-600 dark:placeholder-gray-400 caret-gray-900 dark:caret-white focus:outline-none focus:ring-2 focus:ring-yellow-500/40 dark:focus:ring-yellow-400/40"
        />

        <motion.textarea
          placeholder="Your Message"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full px-4 py-3 rounded-xl border border-gray-900 dark:!border-white dark:hover:!border-white dark:focus:!border-white bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-600 dark:placeholder-gray-400 caret-gray-900 dark:caret-white h-40 focus:outline-none focus:ring-2 focus:ring-yellow-500/40 dark:focus:ring-yellow-400/40"
        />

        <motion.button
          type="submit"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="px-8 py-3 rounded-xl bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.section>
  );
}
