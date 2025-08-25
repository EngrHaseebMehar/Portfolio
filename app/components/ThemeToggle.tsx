'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <motion.button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="fixed top-5 right-5 z-[60] rounded-full w-12 h-12 p-3 glass-light dark:glass text-gray-900 dark:text-amber-300
                 shadow-[0_0_15px_5px_rgba(0,0,0,0.3)] dark:shadow-[0_0_15px_5px_rgba(255,215,0,0.5)]
                 ring-2 ring-transparent dark:ring-amber-300/40"
      title="Toggle light/dark"
      initial={{ opacity: 0, scale: 0.5, x: 50, y: -50 }}
      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{
        scale: 1.15,
        boxShadow: isDark
          ? "0 0 30px 10px rgba(255,215,0,0.6)"
          : "0 0 30px 10px rgba(0,0,0,0.4)",
      }}
      whileTap={{ scale: 0.85, rotate: 90 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.i
          key={isDark ? 'sun' : 'moon'}
          className={`fa-solid ${isDark ? 'fa-sun' : 'fa-moon'} text-xl`}
          initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 180, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
    </motion.button>
  );
}
