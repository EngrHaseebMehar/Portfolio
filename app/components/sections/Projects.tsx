"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { title: "Portfolio", desc: "Personal portfolio showcasing my work." },
    { title: "Snooker Table", desc: "Snooker table booking & management." },
    { title: "Room Booking", desc: "Hotel/room booking application." },
    { title: "Weather App", desc: "Clean UI for weather forecast." },
    { title: "Todo List", desc: "Minimal task manager with local storage." },
    { title: "Blog Website", desc: "Simple blog with categories & tags." },
  ];

  return (
    <motion.section
      id="projects"
      className="min-h-[70vh] flex flex-col items-center justify-center px-6 pt-32 pb-32"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      {/* Project Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl tilt-wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
          },
        }}
      >
        {projects.map((p) => (
          <motion.div
            key={p.title}
            className="card3d glass-light dark:glass rounded-2xl p-8 text-center cursor-pointer"
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 40 },
              visible: { opacity: 1, scale: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 8px 25px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <h3 className="text-3xl font-semibold mb-3">{p.title}</h3>
            <p className="opacity-90 text-lg">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
