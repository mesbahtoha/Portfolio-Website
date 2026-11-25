import { motion } from 'framer-motion'
import SectionWrapper, { SectionHeading } from './SectionWrapper'
import { education, personal } from '../data/data'
import { pick } from '../i18n/content'
import { useLanguage } from '../context/LanguageContext'
import { scaleUp, staggerContainer, slideLeft, useReveal } from '../hooks/useScrollAnimations'
import {
  FiArrowUpRight,
  FiAward,
  FiCalendar,
  FiMapPin,
  FiStar,
} from 'react-icons/fi'

function EducationCard({ edu, index }) {
  const { ref, inView } = useReveal({ margin: '-50px' })
  const { lang, t } = useLanguage()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      whileHover={{
        y: -4,
        borderColor: 'rgb(var(--accent-gold) / 0.25)',
        transition: { duration: 0.25 },
      }}
      className="card group relative overflow-hidden"
    >
      <div className="absolute right-0 top-0 h-16 w-16 rounded-bl-3xl bg-accent-gold/5" />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={inView ? { scale: 1, rotate: 0 } : {}}
          transition={{ type: 'spring', stiffness: 260, damping: 18, delay: index * 0.1 + 0.12 }}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent-gold/20 bg-accent-gold/10"
        >
          <FiAward className="text-accent-gold" size={20} />
        </motion.div>

        <div className="flex-1">
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-syne text-lg font-bold text-text-primary">
                {pick(edu, 'degree', lang)}
              </h3>
              <p className="mt-0.5 font-epilogue text-sm font-medium text-accent-gold">
                {pick(edu, 'institution', lang)}
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-start gap-1.5 sm:items-end">
              <div className="flex items-center gap-1 font-epilogue text-xs text-text-muted">
                <FiCalendar size={11} /> {pick(edu, 'period', lang)}
              </div>
              <div className="flex items-center gap-1 font-epilogue text-xs text-text-muted">
                <FiMapPin size={11} /> {pick(edu, 'location', lang)}
              </div>
              {edu.gpa && (
                <div className="flex items-center gap-1 rounded-full border border-accent-gold/20 bg-accent-gold/10 px-2.5 py-0.5 text-xs text-accent-gold">
                  <FiStar size={10} />
                  {t('education.gpa')} {edu.gpa}
                </div>
              )}
            </div>
          </div>

          <p className="mb-4 font-epilogue text-sm leading-relaxed text-text-secondary">
            {pick(edu, 'description', lang)}
          </p>

          <motion.div
            variants={staggerContainer(0.06)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-wrap gap-x-4 gap-y-2"
          >
            {pick(edu, 'highlights', lang).map((highlight) => (
              <motion.span
                key={highlight}
                variants={scaleUp}
                className="flex items-center gap-1.5 font-epilogue text-xs text-text-secondary"
              >
                <span className="text-accent-gold">✦</span>
                {highlight}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Education() {
  const { t } = useLanguage()

  return (
    <SectionWrapper id="education" className="section-pad">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label={t('education.label')}
          title={
            <>
              {t('education.titleStart')}{' '}
              <span className="text-accent-gold">{t('education.titleAccent')}</span>
            </>
          }
          subtitle={t('education.subtitle')}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {education.map((edu, index) => (
            <EducationCard key={edu.id} edu={edu} index={index} />
          ))}
        </div>

        <motion.a
          href={personal.certificatesUrl}
          target="_blank"
          rel="noopener noreferrer"
          variants={slideLeft}
          whileHover={{ x: 4 }}
          className="mt-6 inline-flex items-center gap-2 rounded-xl border border-bg-border bg-bg-card/70 px-4 py-3 text-xs font-epilogue text-text-secondary transition-colors hover:border-accent-gold/40 hover:text-accent-gold"
        >
          <FiAward size={14} className="text-accent-gold" />
          {t('education.certificates')}
          <FiArrowUpRight size={13} />
        </motion.a>
      </div>
    </SectionWrapper>
  )
}
