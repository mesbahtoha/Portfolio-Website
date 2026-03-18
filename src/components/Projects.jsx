import { motion } from 'framer-motion'
import SectionWrapper, { SectionHeading } from './SectionWrapper'
import { projects } from '../data/data'
import { staggerContainer, scaleUp, useReveal } from '../hooks/useScrollAnimations'
import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi'

function ProjectCard({ project, index }) {
  const { ref, inView } = useReveal({ margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: (index % 2) * 0.12, // alternate delay for grid pair
      }}
      whileHover={{
        y: -6,
        borderColor: 'rgba(240,165,0,0.3)',
        transition: { duration: 0.25 },
      }}
      className="group relative bg-bg-card border border-bg-border rounded-2xl overflow-hidden
                 hover:shadow-xl hover:shadow-black/40"
    >
      {/* Project gradient hero */}
      <div className={`h-44 relative bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        {/* Animated geometric decoration */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="w-32 h-32 border-2 border-accent-gold rounded-3xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute w-20 h-20 border border-accent-gold/60 rounded-2xl"
          />
        </div>

        <div className="absolute inset-0 flex items-end p-5">
          <h3 className="font-syne font-700 text-text-primary text-xl leading-tight drop-shadow-lg">
            {project.title}
          </h3>
        </div>

        {project.stats && (
          <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1
                          bg-bg-primary/60 backdrop-blur-sm rounded-full text-xs text-text-secondary
                          font-epilogue border border-bg-border/50">
            <FiStar size={10} className="text-accent-gold" />
            {project.stats}
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-6">
        <p className="text-text-secondary text-sm font-epilogue leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech tags — stagger on hover of the card */}
        <motion.div
          variants={staggerContainer(0.05)}
          initial="visible" // already visible, just for the whileInView stagger
          className="flex flex-wrap gap-1.5 mb-5"
        >
          {project.tech.map((t) => (
            <motion.span
              key={t}
              variants={scaleUp}
              whileHover={{ scale: 1.1 }}
              className="tag text-[11px] px-2.5 py-0.5"
            >
              {t}
            </motion.span>
          ))}
        </motion.div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-bg-border/50">
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 3 }}
            className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent-gold font-epilogue transition-colors"
          >
            <FiExternalLink size={13} />
            Live Demo
          </motion.a>
          <div className="w-px h-4 bg-bg-border" />
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 3 }}
            className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent-gold font-epilogue transition-colors"
          >
            <FiGithub size={13} />
            View Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <SectionHeading
            label="Portfolio"
            title={<>Selected <span className="text-accent-gold">Projects</span></>}
            subtitle="Things I've built that I'm proud of."
          />
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-secondary text-xs py-2 shrink-0 self-start sm:self-auto"
          >
            <FiGithub size={13} />
            All on GitHub
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
