import { motion } from 'framer-motion'
import SectionWrapper, { SectionHeading } from './SectionWrapper'
import { about, personal } from '../data/data'
import { pick } from '../i18n/content'
import { useLanguage } from '../context/LanguageContext'
import {
  fadeUp,
  slideLeft,
  slideRight,
  scaleUp,
  staggerContainer,
  useReveal,
} from '../hooks/useScrollAnimations'
import { FiAward, FiHeart } from 'react-icons/fi'
import portrait from '../assets/formal-portrait.jpg'

export default function About() {
  const { lang, t } = useLanguage()
  const { ref: statsRef } = useReveal({ margin: '-40px' })

  const passions = lang === 'bn' ? about.passionsBn : about.passions
  const infoRows = [
    { label: t('about.info.location'), value: pick(personal, 'location', lang) },
    { label: t('about.info.email'), value: personal.email },
    { label: t('about.info.phone'), value: personal.phoneDisplay },
    { label: t('about.info.status'), value: t('about.statusValue'), accent: true },
  ]

  return (
    <SectionWrapper id="about" className="relative section-pad">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <motion.div variants={slideLeft}>
            <SectionHeading
              label={t('about.label')}
              title={
                <>
                  {t('about.titleStart')}{' '}
                  <span className="text-accent-gold">{t('about.titleAccent')}</span>
                </>
              }
            />

            <motion.p variants={fadeUp} className="prose-muted mb-5">
              {pick(about, 'intro', lang)}
            </motion.p>

            <motion.p variants={fadeUp} className="prose-muted mb-5">
              {pick(about, 'extended', lang)}
            </motion.p>

            <motion.p variants={fadeUp} className="prose-muted mb-8">
              <FiHeart className="-mt-0.5 mr-1 inline text-accent-gold" size={13} />
              {pick(about, 'hobbies', lang)}
            </motion.p>

            <motion.div variants={staggerContainer(0.05)} className="mb-8 flex flex-wrap gap-2">
              {passions.map((passion) => (
                <motion.span
                  key={passion}
                  variants={scaleUp}
                  whileHover={{ scale: 1.05, borderColor: 'rgb(var(--accent-gold) / 0.5)' }}
                  className="tag cursor-default"
                >
                  {passion}
                </motion.span>
              ))}
            </motion.div>

            <motion.div variants={staggerContainer(0.07)} className="space-y-3">
              {infoRows.map(({ label, value, accent }) => (
                <motion.div key={label} variants={fadeUp} className="flex items-center gap-3 text-sm">
                  <span className="w-20 shrink-0 font-epilogue text-text-muted">{label}</span>
                  <span className="h-4 w-px bg-bg-border" />
                  <span
                    className={`font-epilogue ${
                      accent ? 'font-medium text-emerald-500' : 'text-text-secondary'
                    }`}
                  >
                    {value}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={slideRight} ref={statsRef}>
            <motion.div
              variants={scaleUp}
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-7 overflow-hidden rounded-3xl border border-bg-border bg-bg-card p-2 shadow-soft"
            >
              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.25rem]">
                <img
                  src={portrait}
                  alt={`${personal.name} — Professional Portrait`}
                  width="1000"
                  height="934"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#05050b]/90 via-[#05050b]/35 to-transparent p-4 pt-16">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-epilogue font-medium text-white backdrop-blur-md">
                    <FiAward size={11} className="text-accent-gold" />
                    {t('about.photoBadge')}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer(0.08, 0.05)}
              className="mb-7 grid grid-cols-2 gap-3"
            >
              {about.highlights.map((item) => (
                <motion.div
                  key={item.label}
                  variants={scaleUp}
                  whileHover={{
                    scale: 1.03,
                    borderColor: 'rgb(var(--accent-gold) / 0.35)',
                    transition: { duration: 0.2 },
                  }}
                  className="card cursor-default p-5"
                >
                  <p className="glow-gold mb-1 font-syne text-2xl font-extrabold text-accent-gold">
                    {item.value}
                  </p>
                  <p className="text-xs font-epilogue leading-snug text-text-muted">
                    {pick(item, 'label', lang)}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="card p-6 md:p-7">
              <h3 className="mb-5 font-syne text-xs font-bold uppercase tracking-[0.18em] text-text-muted">
                {t('about.journeyTitle')}
              </h3>

              <motion.div variants={staggerContainer(0.08, 0.15)}>
                {about.journey.map((item) => (
                  <motion.div
                    key={item.year}
                    variants={slideLeft}
                    className="flex items-center gap-3 border-b border-bg-border/50 py-2.5 last:border-0"
                  >
                    <span className="w-11 shrink-0 font-syne text-xs font-bold text-accent-gold">
                      {item.year === 'Now' && lang === 'bn' ? 'এখন' : item.year}
                    </span>
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-gold/40" />
                    <div className="min-w-0">
                      <span className="font-epilogue text-sm font-medium text-text-primary">
                        {pick(item, 'label', lang)}
                      </span>
                      <span className="ml-2 font-epilogue text-[11px] text-text-muted">
                        — {pick(item, 'detail', lang)}
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
