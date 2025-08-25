import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import CV from './components/sections/CV';
import Contact from './components/sections/Contact';
import BottomNav from './components/BottomNav';

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CV />
      <Contact />
      <BottomNav />
    </>
  );
}