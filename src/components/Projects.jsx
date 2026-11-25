import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper, { SectionHeading } from './SectionWrapper'
import { projects } from '../data/data'
import { pick } from '../i18n/content'
import { useLanguage } from '../context/LanguageContext'
import { scaleUp, staggerContainer, useReveal } from '../hooks/useScrollAnimations'
import {
  FiCalendar,
  FiChevronRight,
  FiExternalLink,
  FiEye,
  FiEyeOff,
  FiGithub,
  FiServer,
  FiStar,
  FiX,
} from 'react-icons/fi'

function ProjectCard({ project, index, onOpen }) {
  const { ref, inView } = useReveal({ margin: '-60px' })
  const { lang, t } = useLanguage()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: (index % 2) * 0.08 }}
      whileHover={{
        y: -6,
        borderColor: 'rgb(var(--accent-gold) / 0.3)',
        transition: { duration: 0.25 },
      }}
      onClick={() => onOpen(project)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onOpen(project)
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${t('projects.viewDetails')}: ${pick(project, 'title', lang)}`}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-bg-border bg-bg-card shadow-soft transition-colors"
    >
      <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        {project.thumb && (
          <img
            src={project.thumb}
            alt={pick(project, 'title', lang)}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        )}

        <div className="absolute inset-0 bg-black/20" />
        <div className="media-overlay absolute inset-0" />

        <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-epilogue text-white/85 backdrop-blur-sm">
          <FiStar size={9} className="text-accent-gold" />
          {project.stats}
        </div>

        {project.year && (
          <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-epilogue text-white/85 backdrop-blur-sm">
            <FiCalendar size={9} />
            {project.year}
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center bg-bg-primary/75 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex items-center gap-2 rounded-full bg-accent-gold px-5 py-2.5 font-syne text-sm font-bold text-bg-primary shadow-lg shadow-accent-gold/30">
            {t('projects.viewDetails')}
            <FiChevronRight size={15} />
          </span>
        </div>
      </div>

      <div className="p-5 md:p-6">
        <h3 className="mb-2 font-syne text-lg font-bold leading-tight text-text-primary">
          {pick(project, 'title', lang)}
        </h3>
        <p className="mb-4 font-epilogue text-sm leading-relaxed text-text-secondary">
          {pick(project, 'short', lang)}
        </p>

        <motion.div
          variants={staggerContainer(0.04)}
          initial="visible"
          className="mb-4 flex flex-wrap gap-1.5"
        >
          {project.tech.slice(0, 5).map((tech) => (
            <motion.span
              key={tech}
              variants={scaleUp}
              whileHover={{ scale: 1.05 }}
              className="tag px-2.5 py-0.5 text-[10px]"
            >
              {tech}
            </motion.span>
          ))}
          {project.tech.length > 5 && (
            <span className="tag px-2.5 py-0.5 text-[10px] text-accent-gold">
              +{project.tech.length - 5}
            </span>
          )}
        </motion.div>

        <div className="flex items-center gap-3 border-t border-bg-border/60 pt-3.5">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-1.5 font-epilogue text-[11px] text-text-secondary transition-colors hover:text-accent-gold"
            >
              <FiExternalLink size={12} />
              {t('projects.liveDemo')}
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 font-epilogue text-[11px] text-text-muted">
              <FiExternalLink size={12} />
              {t('projects.comingSoon')}
            </span>
          )}
          <div className="h-4 w-px bg-bg-border" />
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="inline-flex items-center gap-1.5 font-epilogue text-[11px] text-text-secondary transition-colors hover:text-accent-gold"
          >
            <FiGithub size={12} />
            {t('projects.viewCode')}
          </a>
          <div className="ml-auto inline-flex items-center gap-1 font-epilogue text-[11px] text-accent-gold">
            {t('projects.details')}
            <FiChevronRight size={11} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }) {
  const { lang, t } = useLanguage()

  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm sm:p-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 30 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={pick(project, 'title', lang)}
        className="relative my-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-bg-border bg-bg-card shadow-2xl"
      >
        <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${project.gradient} sm:h-48`}>
          {project.thumb && (
            <img
              src={project.thumb}
              alt={pick(project, 'title', lang)}
              className="absolute inset-0 h-full w-full object-cover opacity-40"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
            <p className="mb-1 font-epilogue text-[10px] uppercase tracking-[0.2em] text-accent-gold drop-shadow-md">
              {project.stats} {project.year ? `· ${project.year}` : ''}
            </p>
            <h3 className="font-syne text-xl font-bold leading-tight text-white drop-shadow-lg sm:text-2xl">
              {pick(project, 'title', lang)}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t('projects.close')}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white/80 backdrop-blur-sm transition-colors hover:border-accent-gold/40 hover:text-accent-gold"
          >
            <FiX size={18} />
          </button>
        </div>

        <div className="max-h-[65vh] space-y-6 overflow-y-auto p-6 sm:p-8">
          <div>
            <h4 className="mb-2 font-syne text-xs font-bold uppercase tracking-[0.18em] text-text-muted">
              {t('projects.overview')}
            </h4>
            <p className="font-epilogue text-sm leading-relaxed text-text-secondary">
              {pick(project, 'description', lang)}
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-syne text-xs font-bold uppercase tracking-[0.18em] text-text-muted">
              {t('projects.techStack')}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="tag px-2.5 py-1 text-[11px]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-syne text-xs font-bold uppercase tracking-[0.18em] text-text-muted">
              {t('projects.links')}
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-4 py-2 text-xs"
                >
                  <FiExternalLink size={13} />
                  {t('projects.liveDemo')}
                </a>
              )}
              {project.api && (
                <a
                  href={project.api}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-4 py-2 text-xs"
                >
                  <FiServer size={13} />
                  {t('projects.liveApi')}
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-4 py-2 text-xs"
              >
                <FiGithub size={13} />
                {project.githubServer ? t('projects.clientRepo') : t('projects.viewCode')}
              </a>
              {project.githubServer && (
                <a
                  href={project.githubServer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-4 py-2 text-xs"
                >
                  <FiGithub size={13} />
                  {t('projects.serverRepo')}
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-syne text-xs font-bold uppercase tracking-[0.18em] text-text-muted">
              {t('projects.keyFeatures')}
            </h4>
            <ul className="space-y-2">
              {pick(project, 'features', lang).map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 font-epilogue text-sm leading-relaxed text-text-secondary"
                >
                  <span className="mt-1 shrink-0 text-[10px] text-accent-gold">▸</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-bg-border bg-bg-secondary/60 p-5">
              <h4 className="mb-3 font-syne text-xs font-bold uppercase tracking-[0.18em] text-text-muted">
                {t('projects.challenges')}
              </h4>
              <ul className="space-y-2">
                {pick(project, 'challenges', lang).map((challenge) => (
                  <li
                    key={challenge}
                    className="flex items-start gap-2.5 font-epilogue text-xs leading-relaxed text-text-secondary"
                  >
                    <span className="mt-1 shrink-0 text-[10px] text-accent-coral">▸</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-bg-border bg-bg-secondary/60 p-5">
              <h4 className="mb-3 font-syne text-xs font-bold uppercase tracking-[0.18em] text-text-muted">
                {t('projects.futurePlans')}
              </h4>
              <ul className="space-y-2">
                {pick(project, 'improvements', lang).map((improvement) => (
                  <li
                    key={improvement}
                    className="flex items-start gap-2.5 font-epilogue text-xs leading-relaxed text-text-secondary"
                  >
                    <span className="mt-1 shrink-0 text-[10px] text-emerald-500">▸</span>
                    {improvement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const { t } = useLanguage()
  const [selected, setSelected] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const featured = projects.filter((project) => project.featured)
  const rest = projects.filter((project) => !project.featured)
  const visible = showAll ? projects : featured

  return (
    <SectionWrapper id="projects" className="section-pad">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            label={t('projects.label')}
            title={
              <>
                {t('projects.titleStart')}{' '}
                <span className="text-accent-gold">{t('projects.titleAccent')}</span>
              </>
            }
            subtitle={t('projects.subtitle')}
            className="mb-0"
          />
          <motion.a
            href="https://github.com/mesbahtoha"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-secondary shrink-0 self-start px-4 py-2 text-xs sm:self-auto"
          >
            <FiGithub size={13} />
            {t('projects.allGithub')}
          </motion.a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence>
            {visible.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 18 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} index={index} onOpen={setSelected} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {rest.length > 0 && (
          <div className="mt-11 flex justify-center">
            <motion.button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary"
            >
              {showAll ? (
                <>
                  <FiEyeOff size={15} />
                  {t('projects.showLess')}
                </>
              ) : (
                <>
                  <FiEye size={15} />
                  {t('projects.showAll')}
                </>
              )}
            </motion.button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </SectionWrapper>
  )
}
