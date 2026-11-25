import { motion } from 'framer-motion'
import SectionWrapper, { SectionHeading } from './SectionWrapper'
import { about, additional, experiences, skills } from '../data/data'
import { pick } from '../i18n/content'
import { useLanguage } from '../context/LanguageContext'
import { fadeUp, scaleUp, staggerContainer, useReveal } from '../hooks/useScrollAnimations'
import {
  FiBriefcase,
  FiCalendar,
  FiCode,
  FiExternalLink,
  FiGlobe,
  FiMapPin,
  FiTarget,
} from 'react-icons/fi'

const companyInitials = {
  'shahi-mokam': 'SM',
  'fahim-pharmaceutical': 'FP',
  bytespace: 'BS',
}

export default function Experience() {
  const { lang, t } = useLanguage()
  const { ref: cardsRef, inView: cardsInView } = useReveal({ margin: '-50px' })
  const exploringItems =
    skills.find((category) => category.category === 'Currently Exploring')?.items || []

  return (
    <SectionWrapper id="experience" className="section-pad section-soft">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label={t('experience.label')}
          title={
            <>
              {t('experience.titleStart')}{' '}
              <span className="text-accent-gold">{t('experience.titleAccent')}</span>
            </>
          }
          subtitle={t('experience.subtitle')}
        />

        <motion.div variants={fadeUp} className="card relative mb-12 overflow-hidden p-6 md:p-8">
          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-accent-gold/5 blur-3xl" />
          <div className="relative z-10 flex flex-col items-start gap-5 md:flex-row md:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent-gold/20 bg-accent-gold/10">
              <FiTarget className="text-accent-gold" size={24} />
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span className="text-xs font-epilogue font-medium uppercase tracking-wider text-emerald-500">
                  {t('experience.openTo')}
                </span>
              </div>
              <h3 className="mb-2 font-syne text-xl font-bold text-text-primary">
                {t('experience.openRole')}
              </h3>
              <p className="max-w-2xl font-epilogue text-sm leading-relaxed text-text-secondary">
                {pick(about, 'lookingFor', lang)}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mb-5 flex items-center gap-3">
          <span className="eyebrow">{t('experience.workLabel')}</span>
          <span className="h-px flex-1 bg-bg-border" />
        </div>

        <div className="relative mb-14">
          <div className="absolute bottom-2 left-[19px] top-2 w-px bg-gradient-to-b from-accent-gold/70 via-accent-gold/20 to-transparent" />

          {experiences.map((experience, index) => (
            <motion.article
              key={experience.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative pb-5 pl-12 md:pl-16"
            >
              <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-xl border border-accent-gold/25 bg-bg-card shadow-md">
                <span className="font-syne text-[11px] font-extrabold text-accent-gold">
                  {companyInitials[experience.id] || '•'}
                </span>
              </div>

              <div className="card group p-5 transition-colors md:p-6">
                <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <h3 className="font-syne text-base font-bold text-text-primary md:text-lg">
                        {pick(experience, 'role', lang)}
                      </h3>
                      <span className="rounded-full border border-accent-gold/25 bg-accent-gold/10 px-2 py-0.5 text-[10px] font-epilogue font-semibold uppercase tracking-wide text-accent-gold">
                        {pick(experience, 'type', lang)}
                      </span>
                    </div>
                    <p className="font-epilogue text-sm font-medium text-accent-gold">
                      {experience.company}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1.5 text-[11px] font-epilogue text-text-muted sm:items-end">
                    <span className="inline-flex items-center gap-1.5">
                      <FiCalendar size={11} />
                      {pick(experience, 'period', lang)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <FiMapPin size={11} />
                      {pick(experience, 'location', lang)}
                    </span>
                  </div>
                </div>

                <p className="mb-4 font-epilogue text-sm leading-relaxed text-text-secondary">
                  {pick(experience, 'summary', lang)}
                </p>

                <ul className="mb-4 space-y-2">
                  {pick(experience, 'bullets', lang).map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 font-epilogue text-xs leading-relaxed text-text-secondary md:text-[13px]"
                    >
                      <span className="mt-1.5 shrink-0 text-[9px] text-accent-gold">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-1.5">
                  {experience.tech.map((tech) => (
                    <span key={tech} className="tag px-2.5 py-0.5 text-[10px]">
                      {tech}
                    </span>
                  ))}
                  {experience.website && (
                    <a
                      href={experience.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center gap-1.5 text-[11px] font-epilogue text-text-muted transition-colors hover:text-accent-gold"
                    >
                      {t('projects.liveDemo')}
                      <FiExternalLink size={11} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mb-5 flex items-center gap-3">
          <span className="eyebrow">{t('experience.snapshotLabel')}</span>
          <span className="h-px flex-1 bg-bg-border" />
        </div>

        <motion.div
          ref={cardsRef}
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={cardsInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          <motion.div
            variants={scaleUp}
            whileHover={{
              y: -4,
              borderColor: 'rgb(var(--accent-gold) / 0.3)',
              transition: { duration: 0.2 },
            }}
            className="card flex flex-col gap-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent-gold/20 bg-accent-gold/10">
              <FiGlobe className="text-accent-gold" size={18} />
            </div>
            <div>
              <p className="mb-2 text-xs font-epilogue uppercase tracking-wider text-text-muted">
                {t('experience.languages')}
              </p>
              <div className="flex flex-col gap-2">
                {additional.languages.map((language) => (
                  <div key={language.name} className="flex items-baseline gap-2">
                    <span className="tag">{pick(language, 'name', lang)}</span>
                    <span className="text-[11px] font-epilogue text-text-muted">
                      {pick(language, 'level', lang)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {additional.extracurricular.map((item) => (
            <motion.div
              key={item.organization}
              variants={scaleUp}
              whileHover={{
                y: -4,
                borderColor: 'rgb(var(--accent-gold) / 0.3)',
                transition: { duration: 0.2 },
              }}
              className="card flex flex-col gap-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent-gold/20 bg-accent-gold/10">
                <FiBriefcase className="text-accent-gold" size={18} />
              </div>
              <div>
                <p className="mb-1 text-xs font-epilogue uppercase tracking-wider text-text-muted">
                  {t('experience.leadership')}
                </p>
                <h4 className="mb-0.5 font-syne text-sm font-bold leading-tight text-text-primary">
                  {pick(item, 'role', lang)}
                </h4>
                <p className="mb-3 font-epilogue text-xs font-medium text-accent-gold">
                  {pick(item, 'organization', lang)}
                </p>
                <ul className="space-y-1.5">
                  {pick(item, 'activities', lang).map((activity) => (
                    <li
                      key={activity}
                      className="flex items-start gap-2 font-epilogue text-xs text-text-secondary"
                    >
                      <span className="mt-1 shrink-0 text-[10px] text-accent-gold">▸</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          <motion.div
            variants={scaleUp}
            whileHover={{
              y: -4,
              borderColor: 'rgb(var(--accent-gold) / 0.3)',
              transition: { duration: 0.2 },
            }}
            className="card flex flex-col gap-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent-gold/20 bg-accent-gold/10">
              <FiCode className="text-accent-gold" size={18} />
            </div>
            <div>
              <p className="mb-2 text-xs font-epilogue uppercase tracking-wider text-text-muted">
                {t('experience.exploring')}
              </p>
              <div className="flex flex-wrap gap-2">
                {exploringItems.map((item) => (
                  <span key={item.name} className="tag">
                    {pick(item, 'name', lang)}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-auto font-epilogue text-xs leading-relaxed text-text-secondary">
              {t('experience.exploringText')}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-9 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-bg-border bg-bg-card p-5"
        >
          <div className="flex flex-wrap gap-2.5">
            {t('experience.tags').map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.05 }}
                className="tag cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
          <p className="font-epilogue text-xs italic text-text-muted">
            {t('experience.quote')}
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
