// Experience.jsx
// Mesbahul has no work experience yet — this section shows a
// "Seeking First Role" banner with a career goal statement,
// plus a Certification highlight card.
import { motion } from 'framer-motion'
import SectionWrapper, { SectionHeading } from './SectionWrapper'
import { additional, about } from '../data/data'
import {
  fadeUp, slideLeft, slideRight, scaleUp,
  staggerContainer, useReveal,
} from '../hooks/useScrollAnimations'
import { FiAward, FiTarget, FiGlobe, FiExternalLink, FiBriefcase } from 'react-icons/fi'

export default function Experience() {
  const { ref: cardsRef, inView: cardsInView } = useReveal({ margin: '-50px' })

  return (
    <SectionWrapper id="experience" className="py-24 bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Career"
          title={<>Seeking My <span className="text-accent-gold">First Role</span></>}
          subtitle="Freshly trained, highly motivated, and ready to contribute from day one."
        />

        {/* ── Main goal banner ── */}
        <motion.div
          variants={fadeUp}
          className="relative card p-8 mb-10 overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-accent-gold/10 border border-accent-gold/20
                            flex items-center justify-center shrink-0">
              <FiTarget className="text-accent-gold" size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-xs font-epilogue font-500 uppercase tracking-wider">
                  Open to Opportunities
                </span>
              </div>
              <h3 className="font-syne font-700 text-text-primary text-xl mb-3">
                Junior / Entry-Level Full-Stack Developer
              </h3>
              <p className="text-text-secondary font-epilogue text-sm leading-relaxed max-w-2xl">
                {about.lookingFor}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Three highlight cards ── */}
        <motion.div
          ref={cardsRef}
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate={cardsInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10"
        >
          {/* Certification */}
          {additional.certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={scaleUp}
              whileHover={{ y: -4, borderColor: 'rgba(240,165,0,0.3)', transition: { duration: 0.2 } }}
              className="card flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-accent-gold/10 border border-accent-gold/20
                              flex items-center justify-center">
                <FiAward className="text-accent-gold" size={18} />
              </div>
              <div>
                <p className="text-text-muted text-xs font-epilogue uppercase tracking-wider mb-1">
                  Certification · {cert.year}
                </p>
                <h4 className="font-syne font-700 text-text-primary text-sm leading-tight mb-1">
                  {cert.title}
                </h4>
                <p className="text-accent-gold font-epilogue text-xs font-500">{cert.issuer}</p>
              </div>
              <a
                href="https://drive.google.com/file/d/1gbZgu3bYmCQKXeWiM8AqK5mLh3plzDJC/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent-gold
                           font-epilogue transition-colors mt-auto"
              >
                <FiExternalLink size={11} />
                View Credential
              </a>
            </motion.div>
          ))}

          {/* Languages */}
          <motion.div
            variants={scaleUp}
            whileHover={{ y: -4, borderColor: 'rgba(240,165,0,0.3)', transition: { duration: 0.2 } }}
            className="card flex flex-col gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-accent-gold/10 border border-accent-gold/20
                            flex items-center justify-center">
              <FiGlobe className="text-accent-gold" size={18} />
            </div>
            <div>
              <p className="text-text-muted text-xs font-epilogue uppercase tracking-wider mb-2">
                Languages
              </p>
              <div className="flex flex-wrap gap-2">
                {additional.languages.map((lang) => (
                  <span key={lang} className="tag">{lang}</span>
                ))}
              </div>
            </div>
            <p className="text-text-secondary text-xs font-epilogue mt-auto">
              Fluent in both written and spoken communication.
            </p>
          </motion.div>

          {/* Extracurricular */}
          {additional.extracurricular.map((item) => (
            <motion.div
              key={item.role}
              variants={scaleUp}
              whileHover={{ y: -4, borderColor: 'rgba(240,165,0,0.3)', transition: { duration: 0.2 } }}
              className="card flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-accent-gold/10 border border-accent-gold/20
                              flex items-center justify-center">
                <FiBriefcase className="text-accent-gold" size={18} />
              </div>
              <div>
                <p className="text-text-muted text-xs font-epilogue uppercase tracking-wider mb-1">
                  Extracurricular
                </p>
                <h4 className="font-syne font-700 text-text-primary text-sm leading-tight mb-0.5">
                  {item.role}
                </h4>
                <p className="text-accent-gold font-epilogue text-xs font-500 mb-3">
                  {item.organization}
                </p>
                <ul className="space-y-1.5">
                  {item.activities.map((act, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-text-secondary font-epilogue">
                      <span className="text-accent-gold mt-1 shrink-0 text-[10px]">▸</span>
                      {act}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom motivational strip ── */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-between gap-4 p-5
                     bg-bg-card border border-bg-border rounded-2xl"
        >
          <div className="flex flex-wrap gap-3">
            {['Collaborative', 'Fast Learner', 'Detail-Oriented', 'Self-Motivated', 'Team Player'].map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.08 }}
                className="tag cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
          <p className="text-text-muted text-xs font-epilogue italic">
            Ready to learn, contribute, and grow from day one.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
