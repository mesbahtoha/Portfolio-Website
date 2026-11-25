import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper, { SectionHeading } from './SectionWrapper'
import { videos } from '../data/data'
import { pick } from '../i18n/content'
import { useLanguage } from '../context/LanguageContext'
import {
  FiExternalLink,
  FiHardDrive,
  FiPlay,
  FiVideo,
  FiX,
} from 'react-icons/fi'
import { FaYoutube } from 'react-icons/fa'

function getEmbedUrl(video) {
  if (video.provider === 'youtube') {
    return `https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`
  }
  return `https://drive.google.com/file/d/${video.driveId}/preview`
}

function VideoCard({ video, index, onOpen }) {
  const { lang, t } = useLanguage()
  const isYouTube = video.provider === 'youtube'

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="group overflow-hidden rounded-2xl border border-bg-border bg-bg-card shadow-soft transition-colors hover:border-accent-gold/30"
    >
      <button
        type="button"
        onClick={() => onOpen(video)}
        aria-label={`${t('videos.watch')}: ${pick(video, 'title', lang)}`}
        className="relative block aspect-video w-full overflow-hidden text-left"
      >
        {isYouTube ? (
          <img
            src={video.thumbnail}
            alt={pick(video, 'title', lang)}
            loading="lazy"
            decoding="async"
            onError={(event) => {
              event.currentTarget.onerror = null
              event.currentTarget.src = `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`
            }}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${video.accent || 'from-violet-500/30 to-indigo-500/10'}`}>
            <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
              <FiHardDrive size={34} className="text-white/30" />
              <p className="text-[10px] font-epilogue uppercase tracking-[0.2em] text-white/45">
                Google Drive
              </p>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/10" />

        <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[10px] font-epilogue font-medium text-white/90 backdrop-blur-sm">
          {isYouTube ? <FaYoutube size={12} className="text-red-500" /> : <FiHardDrive size={11} />}
          {isYouTube ? t('videos.youtube') : t('videos.drive')}
        </div>

        <div className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[10px] font-epilogue text-white/80 backdrop-blur-sm">
          {video.tag}
        </div>

        <span className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-accent-gold/50 group-hover:bg-accent-gold group-hover:text-bg-primary">
          <FiPlay size={20} className="ml-0.5" />
        </span>
      </button>

      <div className="p-5">
        <h3 className="mb-1.5 font-syne text-base font-bold leading-tight text-text-primary">
          {pick(video, 'title', lang)}
        </h3>
        <p className="font-epilogue text-xs leading-relaxed text-text-secondary">
          {pick(video, 'description', lang)}
        </p>
      </div>
    </motion.article>
  )
}

function VideoModal({ video, onClose }) {
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 24 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={pick(video, 'title', lang)}
        className="w-full max-w-4xl overflow-hidden rounded-2xl border border-bg-border bg-bg-card shadow-2xl"
      >
        <div className="relative aspect-video bg-black">
          <iframe
            src={getEmbedUrl(video)}
            title={pick(video, 'title', lang)}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="font-syne text-base font-bold text-text-primary">
              {pick(video, 'title', lang)}
            </h3>
            <p className="mt-1 font-epilogue text-xs leading-relaxed text-text-secondary">
              {pick(video, 'description', lang)}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost px-3 py-2 text-[11px]"
            >
              {t('videos.open')}
              <FiExternalLink size={12} />
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label={t('videos.close')}
              className="icon-button"
            >
              <FiX size={17} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Videos() {
  const { t } = useLanguage()
  const [selected, setSelected] = useState(null)

  return (
    <SectionWrapper id="videos" className="section-pad">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label={t('videos.label')}
          title={
            <>
              {t('videos.titleStart')}{' '}
              <span className="text-accent-gold">{t('videos.titleAccent')}</span>
            </>
          }
          subtitle={t('videos.subtitle')}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} onOpen={setSelected} />
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-[11px] font-epilogue text-text-muted">
          <span className="inline-flex items-center gap-1.5">
            <FiVideo size={12} className="text-accent-gold" />
            YouTube + Google Drive
          </span>
          <span className="hidden h-3 w-px bg-bg-border sm:block" />
          <span>{t('videos.subtitle')}</span>
        </div>
      </div>

      <AnimatePresence>
        {selected && <VideoModal video={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </SectionWrapper>
  )
}
