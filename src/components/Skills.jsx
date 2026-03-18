import { motion } from 'framer-motion'
import SectionWrapper, { SectionHeading } from './SectionWrapper'
import { skills } from '../data/data'
import { fadeUp, scaleUp, staggerContainer, useReveal } from '../hooks/useScrollAnimations'
import { FiCode, FiServer, FiTool } from 'react-icons/fi'

const categoryIcons = {
  Frontend:          FiCode,
  Backend:           FiServer,
  'Tools & Workflow': FiTool,
}

// Each skill row — bar width animates when the card enters view
function SkillBar({ name, level, inView }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
      }}
      className="group"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-text-secondary text-sm font-epilogue group-hover:text-text-primary transition-colors">
          {name}
        </span>
        <span className="text-text-muted text-xs font-syne font-600">{level}%</span>
      </div>
      <div className="h-1.5 bg-bg-border rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-accent-gold to-accent-amber"
        />
      </div>
    </motion.div>
  )
}

function CategoryCard({ category, index }) {
  const { ref, inView } = useReveal({ margin: '-40px' })
  const Icon = categoryIcons[category.category] || FiCode

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden:  { opacity: 0, y: 36 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.13,
            staggerChildren: 0.07,
            delayChildren: 0.25,
          },
        },
      }}
      whileHover={{
        borderColor: 'rgba(240,165,0,0.2)',
        transition: { duration: 0.2 },
      }}
      className="card"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          variants={{
            hidden: { scale: 0, rotate: -15 },
            visible: { scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } },
          }}
          className="w-10 h-10 rounded-xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center"
        >
          <Icon className="text-accent-gold" size={18} />
        </motion.div>
        <motion.h3
          variants={fadeUp}
          className="font-syne font-700 text-text-primary text-base"
        >
          {category.category}
        </motion.h3>
      </div>

      {/* Skill bars — each staggered */}
      <div className="space-y-3.5">
        {category.items.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} inView={inView} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const { ref: extraRef, inView: extraInView } = useReveal({ margin: '-40px' })

  return (
    <SectionWrapper id="skills" className="py-24 bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Skill Set"
          title={<>Technical <span className="text-accent-gold">Skills</span></>}
          subtitle="Technologies I work with daily and the depth of my experience with each."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skills.map((category, i) => (
            <CategoryCard key={category.category} category={category} index={i} />
          ))}
        </div>

        {/* Extra tech pills */}
        <motion.div
          ref={extraRef}
          initial={{ opacity: 0, y: 20 }}
          animate={extraInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 pt-8 border-t border-bg-border/50"
        >
          <p className="text-center text-text-muted text-xs font-epilogue uppercase tracking-widest mb-6">
            Also familiar with
          </p>
          <motion.div
            variants={staggerContainer(0.05)}
            initial="hidden"
            animate={extraInView ? 'visible' : 'hidden'}
            className="flex flex-wrap justify-center gap-3"
          >
            {['Docker', 'AWS', 'Supabase', 'MongoDB', 'Redis', 'Storybook', 'Playwright', 'Turborepo', 'pnpm', 'Zod'].map((tech) => (
              <motion.span
                key={tech}
                variants={scaleUp}
                whileHover={{ scale: 1.1, borderColor: 'rgba(240,165,0,0.5)', color: '#f0a500' }}
                className="tag cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
