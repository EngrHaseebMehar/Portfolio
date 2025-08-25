"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-20 text-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="z-10 flex flex-col-reverse md:flex-row items-center justify-center gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {/* Left Content */}
        <div className="flex-1">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-amber-100"
            variants={{
              hidden: { opacity: 0, x: -60 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Muhammad Haseeb
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl opacity-90 mb-6 text-gray-800 dark:text-gray-300"
            variants={{
              hidden: { opacity: 0, x: 60 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Next.js Frontend Developer
          </motion.p>

          <motion.a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-indigo-600 text-white shadow-lg hover:shadow-indigo-600/40 hover:scale-105 active:scale-95 transition"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 20px rgba(79,70,229,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work <i className="fa-solid fa-arrow-right-long" />
          </motion.a>
        </div>

        {/* Right Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-center"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/image.jpg"
            alt="Muhammad Haseeb"
            className="w-64 md:w-80 rounded-full shadow-2xl object-cover"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
