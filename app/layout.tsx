import './globals.css';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from './providers/ThemeProvider';
import ThemeToggle from './components/ThemeToggle';
import Script from 'next/script';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','500','600','700','800'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Muhammad Haseeb | Portfolio',
  description: 'Next.js Frontend Developer portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} scroll-smooth`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        {/* Optional: pre-hydration theme script to avoid flash */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`try {
            const t = localStorage.getItem('theme');
            const m = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (t === 'dark' || (!t && m)) document.documentElement.classList.add('dark');
          } catch (e) {}`}
        </Script>
      </head>
      <body className="min-h-screen text-gray-900 dark:text-gray-100 transition-[background,color] duration-700">
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}