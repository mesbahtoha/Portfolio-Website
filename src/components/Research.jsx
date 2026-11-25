import { motion } from 'framer-motion'
import SectionWrapper, { SectionHeading } from './SectionWrapper'
import { research } from '../data/data'
import { pick } from '../i18n/content'
import { useLanguage } from '../context/LanguageContext'
import { fadeUp, scaleUp, staggerContainer, useReveal } from '../hooks/useScrollAnimations'
import {
  FiActivity,
  FiArrowUpRight,
  FiCheckCircle,
  FiCpu,
  FiDatabase,
  FiGithub,
  FiInfo,
  FiTarget,
} from 'react-icons/fi'

const fadeInView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Research() {
  const { lang, t, messages } = useLanguage()
  const { ref: resultsRef, inView: resultsInView } = useReveal({ margin: '-50px' })

  return (
    <SectionWrapper id="research" className="relative section-pad section-soft overflow-hidden">
      <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-accent-blue/5 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          label={t('research.label')}
          title={
            <>
              {t('research.titleStart')}{' '}
              <span className="text-accent-gold">{t('research.titleAccent')}</span>
            </>
          }
          subtitle={t('research.subtitle')}
        />

        <div className="mb-6 flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1.5 text-[11px] font-epilogue font-medium text-emerald-500">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            {pick(research, 'status', lang)}
          </span>
          <span className="rounded-full border border-bg-border bg-bg-card px-3 py-1.5 text-[11px] font-epilogue text-text-muted">
            BodyM · {research.year}
          </span>
          <a
            href={research.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 text-[11px] font-epilogue text-text-secondary transition-colors hover:text-accent-gold"
          >
            <FiGithub size={13} />
            {t('research.repo')}
            <FiArrowUpRight size={12} />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div {...fadeInView(0.05)} className="card p-6 md:p-8">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-accent-gold/20 bg-accent-gold/10">
              <FiActivity className="text-accent-gold" size={20} />
            </div>
            <h3 className="mb-3 font-syne text-lg font-bold text-text-primary">
              DorjiBari · BodyM
            </h3>
            <p className="mb-6 font-epilogue text-sm leading-relaxed text-text-secondary">
              {pick(research, 'overview', lang)}
            </p>

            <div className="space-y-5">
              <div>
                <h4 className="mb-2 flex items-center gap-2 font-syne text-xs font-bold uppercase tracking-[0.16em] text-text-muted">
                  <FiTarget size={13} className="text-accent-coral" />
                  {t('research.problem')}
                </h4>
                <p className="font-epilogue text-sm leading-relaxed text-text-secondary">
                  {pick(research, 'problem', lang)}
                </p>
              </div>
              <div>
                <h4 className="mb-2 flex items-center gap-2 font-syne text-xs font-bold uppercase tracking-[0.16em] text-text-muted">
                  <FiCpu size={13} className="text-accent-blue" />
                  {t('research.approach')}
                </h4>
                <p className="font-epilogue text-sm leading-relaxed text-text-secondary">
                  {pick(research, 'approach', lang)}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-bg-border bg-bg-secondary/60 p-4">
              <div className="mb-1.5 flex items-center gap-2 text-[10px] font-epilogue uppercase tracking-[0.16em] text-text-muted">
                <FiDatabase size={12} className="text-accent-gold" />
                {t('research.dataset')}
              </div>
              <p className="font-epilogue text-xs leading-relaxed text-text-secondary">
                {pick(research, 'dataset', lang)}
              </p>
            </div>

            <div className="mt-5">
              <p className="mb-2 text-[10px] font-epilogue uppercase tracking-[0.16em] text-text-muted">
                {t('research.targets')}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {research.targets.map((target) => (
                  <span key={target.name} className="tag px-2.5 py-0.5 text-[10px]">
                    {pick(target, 'name', lang)}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={resultsRef}
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate={resultsInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-5"
          >
            <motion.div variants={fadeUp} className="card p-6 md:p-7">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="font-syne text-sm font-bold uppercase tracking-[0.16em] text-text-muted">
                  {t('research.results')}
                </h3>
                <span className="rounded-full border border-accent-gold/20 bg-accent-gold/10 px-2.5 py-0.5 text-[10px] font-epilogue text-accent-gold">
                  BodyM
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {research.results.map((result) => (
                  <motion.div
                    key={result.value}
                    variants={scaleUp}
                    whileHover={{ scale: 1.02, borderColor: 'rgb(var(--accent-gold) / 0.3)' }}
                    className="rounded-2xl border border-bg-border bg-bg-secondary/70 p-4"
                  >
                    <p className="whitespace-nowrap font-syne text-base font-extrabold tracking-tight text-accent-gold">
                      {result.value}
                    </p>
                    <p className="mt-1 font-epilogue text-[11px] font-medium leading-snug text-text-primary">
                      {pick(result, 'label', lang)}
                    </p>
                    <p className="mt-0.5 font-epilogue text-[10px] leading-snug text-text-muted">
                      {pick(result, 'detail', lang)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="card p-6 md:p-7">
              <h3 className="mb-3 flex items-center gap-2 font-syne text-sm font-bold uppercase tracking-[0.16em] text-text-muted">
                <FiCheckCircle size={14} className="text-emerald-500" />
                {t('research.findings')}
              </h3>
              <ul className="space-y-2.5">
                {pick(research, 'findings', lang).map((finding) => (
                  <li
                    key={finding}
                    className="flex items-start gap-2.5 font-epilogue text-xs leading-relaxed text-text-secondary md:text-[13px]"
                  >
                    <span className="mt-1 shrink-0 text-[10px] text-emerald-500">▸</span>
                    {finding}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="card p-6 md:p-7">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-syne text-sm font-bold uppercase tracking-[0.16em] text-text-muted">
                  {t('research.methods')}
                </h3>
                <span className="text-[10px] font-epilogue text-text-muted">
                  {t('research.experiment')}
                </span>
              </div>
              <div className="mb-4 flex flex-wrap gap-1.5">
                {messages.research.experiments.map((experiment) => (
                  <span key={experiment} className="tag px-2.5 py-0.5 text-[10px]">
                    {experiment}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {research.methods.map((method) => (
                  <span
                    key={method.name}
                    className="rounded-lg border border-bg-border bg-bg-secondary px-2.5 py-1.5 font-epilogue text-[10px] text-text-secondary"
                  >
                    {pick(method, 'name', lang)}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          {...fadeInView(0.15)}
          className="mt-6 flex flex-col gap-4 rounded-2xl border border-accent-gold/20 bg-accent-gold/5 p-5 md:flex-row md:items-start"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-accent-gold/25 bg-accent-gold/10">
            <FiInfo className="text-accent-gold" size={16} />
          </div>
          <div>
            <p className="mb-1 text-[10px] font-epilogue font-semibold uppercase tracking-[0.18em] text-accent-gold">
              {t('research.note')}
            </p>
            <p className="font-epilogue text-xs leading-relaxed text-text-secondary">
              {pick(research, 'note', lang)}
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
