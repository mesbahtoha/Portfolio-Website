import { motion } from 'framer-motion'
import SectionWrapper, { SectionHeading } from './SectionWrapper'
import { education } from '../data/data'
import { scaleUp, staggerContainer, slideLeft, useReveal } from '../hooks/useScrollAnimations'
import { FiAward, FiCalendar, FiMapPin, FiStar } from 'react-icons/fi'

function EducationCard({ edu, index }) {
  const { ref, inView } = useReveal({ margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
      whileHover={{ y: -4, borderColor: 'rgba(240,165,0,0.25)', transition: { duration: 0.25 } }}
      className="card group relative overflow-hidden"
    >
      {/* Corner accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: index * 0.12 + 0.3 }}
        className="absolute top-0 right-0 w-16 h-16 bg-accent-gold/5 rounded-bl-3xl"
      />

      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={inView ? { scale: 1, rotate: 0 } : {}}
          transition={{ type: 'spring', stiffness: 260, damping: 18, delay: index * 0.12 + 0.15 }}
          className="w-12 h-12 rounded-2xl bg-accent-gold/10 border border-accent-gold/20
                     flex items-center justify-center shrink-0"
        >
          <FiAward className="text-accent-gold" size={20} />
        </motion.div>

        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div>
              <h3 className="font-syne font-700 text-text-primary text-lg">{edu.degree}</h3>
              <p className="text-accent-gold font-epilogue text-sm font-500 mt-0.5">
                {edu.institution}
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
              <div className="flex items-center gap-1 text-text-muted text-xs font-epilogue">
                <FiCalendar size={11} /> {edu.period}
              </div>
              <div className="flex items-center gap-1 text-text-muted text-xs font-epilogue">
                <FiMapPin size={11} /> {edu.location}
              </div>
              {edu.gpa && (
                <div className="flex items-center gap-1 px-2.5 py-0.5 bg-accent-gold/10
                                text-accent-gold text-xs rounded-full border border-accent-gold/20">
                  <FiStar size={10} />
                  GPA {edu.gpa}
                </div>
              )}
            </div>
          </div>

          <p className="text-text-secondary text-sm font-epilogue leading-relaxed mb-4">
            {edu.description}
          </p>

          {/* Highlights */}
          <motion.div
            variants={staggerContainer(0.07)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-wrap gap-3"
          >
            {edu.highlights.map((h, i) => (
              <motion.span
                key={i}
                variants={scaleUp}
                className="flex items-center gap-1.5 text-xs text-text-secondary font-epilogue"
              >
                <span className="text-accent-gold">✦</span>
                {h}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Education() {
  return (
    <SectionWrapper id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Education"
          title={<>Academic <span className="text-accent-gold">Background</span></>}
          subtitle="Building a strong engineering foundation alongside hands-on development skills."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <EducationCard key={edu.institution} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
