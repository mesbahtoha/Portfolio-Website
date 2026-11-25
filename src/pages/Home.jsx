import { motion, AnimatePresence } from 'framer-motion'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Research from '../components/Research'
import Videos from '../components/Videos'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollProgressBar from '../components/ScrollProgressBar'
import SectionDivider from '../components/SectionDivider'

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="home"
        className="min-h-screen bg-bg-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <ScrollProgressBar />
        <Navbar />

        <Hero />
        <SectionDivider />

        <About />
        <SectionDivider flip />

        <Experience />
        <SectionDivider />

        <Education />
        <SectionDivider flip />

        <Skills />
        <SectionDivider />

        <Projects />
        <SectionDivider flip />

        <Research />
        <SectionDivider />

        <Videos />
        <SectionDivider flip />

        <Contact />
        <Footer />
      </motion.main>
    </AnimatePresence>
  )
}
