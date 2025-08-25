"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const items = [
  { id: "home", icon: "fa-house", title: "Home" },
  { id: "about", icon: "fa-user", title: "About" },
  { id: "skills", icon: "fa-code", title: "Skills" },
  { id: "projects", icon: "fa-briefcase", title: "Projects" },
  { id: "cv", icon: "fa-file-lines", title: "CV" },
  { id: "contact", icon: "fa-envelope", title: "Contact" },
];

export default function BottomNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) setActive(id);
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.6 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      id="bottom-nav"
      className="
        fixed 
        bottom-7 md:bottom-8   /* 📱 thoda upar */
        left-1/2 -translate-x-1/2 
        z-50 flex items-center justify-center 
        gap-5 md:gap-6
        px-7 md:px-10 
        py-4 md:py-5 
        rounded-full glass text-white shadow-2xl
        scale-95 md:scale-100   /* 📱 ab thoda hi chhota */
      "
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {items.map((it, i) => (
        <motion.a
          key={it.id}
          href={`#${it.id}`}
          title={it.title}
          className={`nav-item text-[1.35rem] md:text-2xl relative ${
            active === it.id ? "text-yellow-400" : "text-white"
          }`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          whileHover={{
            scale: 1.2,
            color: "#facc15",
          }}
          whileTap={{ scale: 0.9 }}
        >
          <i className={`fa-solid ${it.icon}`} />
          {active === it.id && (
            <motion.span
              layoutId="active-indicator"
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-yellow-400 shadow-md"
              initial={false}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          )}
        </motion.a>
      ))}
    </motion.nav>
  );
}
