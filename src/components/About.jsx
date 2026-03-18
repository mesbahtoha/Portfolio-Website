import { motion } from 'framer-motion'
import SectionWrapper, { SectionHeading } from './SectionWrapper'
import { about, personal } from '../data/data'
import {
  fadeUp, slideLeft, slideRight, scaleUp,
  staggerContainer, useReveal,
} from '../hooks/useScrollAnimations'

export default function About() {
  const { ref: statsRef, inView: statsInView } = useReveal({ margin: '-40px' })

  return (
    <SectionWrapper id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left Column ── */}
          <motion.div variants={slideLeft}>
            <SectionHeading
              label="About Me"
              title={<>Who I <span className="text-accent-gold">Am</span></>}
            />

            <motion.p variants={fadeUp}
              className="text-text-secondary font-epilogue text-base leading-relaxed mb-5">
              {about.intro}
            </motion.p>

            <motion.p variants={fadeUp}
              className="text-text-secondary font-epilogue text-base leading-relaxed mb-8">
              {about.extended}
            </motion.p>

            {/* Passion tags */}
            <motion.div variants={staggerContainer(0.06)} className="flex flex-wrap gap-2 mb-8">
              {about.passions.map((p) => (
                <motion.span
                  key={p}
                  variants={scaleUp}
                  whileHover={{ scale: 1.08, borderColor: 'rgba(240,165,0,0.5)' }}
                  className="tag cursor-default"
                >
                  {p}
                </motion.span>
              ))}
            </motion.div>

            {/* Info rows */}
            <motion.div variants={staggerContainer(0.08)} className="space-y-3">
              {[
                { label: 'Location', value: personal.location },
                { label: 'Email',    value: personal.email },
                // { label: 'Degree',   value: 'B.Sc. ICE — Daffodil International University' },
                { label: 'Status',   value: 'Open to opportunities' },
              ].map(({ label, value }) => (
                <motion.div key={label} variants={fadeUp} className="flex items-center gap-3 text-sm">
                  <span className="w-20 text-text-muted font-epilogue shrink-0">{label}</span>
                  <span className="w-px h-4 bg-bg-border" />
                  <span className={`text-text-secondary font-epilogue ${label === 'Status' ? 'text-emerald-400' : ''}`}>
                    {value}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right Column ── */}
          <motion.div variants={slideRight} ref={statsRef}>

            {/* Stats grid */}
            <motion.div
              variants={staggerContainer(0.1, 0.1)}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {about.highlights.map((item) => (
                <motion.div
                  key={item.label}
                  variants={scaleUp}
                  whileHover={{ scale: 1.04, borderColor: 'rgba(240,165,0,0.35)', transition: { duration: 0.2 } }}
                  className="card group cursor-default"
                >
                  <p className="font-syne font-800 text-3xl text-accent-gold glow-gold mb-1">
                    {item.value}
                  </p>
                  <p className="text-text-muted text-sm font-epilogue">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Learning journey card */}
            <motion.div variants={fadeUp} className="card p-8">
              <h3 className="font-syne font-700 text-text-primary mb-6 text-sm uppercase tracking-widest text-text-muted">
                Learning Journey
              </h3>

              <motion.div variants={staggerContainer(0.1, 0.2)}>
                {[
                  { year: '2021', label: 'Started HSC',       detail: 'Science — Perfect GPA' },
                  { year: '2024', label: 'Started B.Sc.',     detail: 'DIU — ICE Department' },
                  { year: '2025', label: 'Completed Course',  detail: 'MERN Stack — Programming Hero' },
                  { year: 'Now',  label: 'Seeking',           detail: 'First Developer Role' },
                ].map((item) => (
                  <motion.div
                    key={item.year}
                    variants={slideLeft}
                    className="flex items-center gap-4 py-3 border-b border-bg-border/50 last:border-0"
                  >
                    <span className="font-syne font-700 text-accent-gold text-sm w-10 shrink-0">
                      {item.year}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-gold/40 shrink-0" />
                    <div>
                      <span className="text-text-primary text-sm font-epilogue font-500">
                        {item.label}
                      </span>
                      <span className="text-text-muted text-xs ml-2 font-epilogue">
                        — {item.detail}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
