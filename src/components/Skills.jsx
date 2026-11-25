import { motion } from 'framer-motion'
import SectionWrapper, { SectionHeading } from './SectionWrapper'
import { skills } from '../data/data'
import { pick } from '../i18n/content'
import { useLanguage } from '../context/LanguageContext'
import { fadeUp, scaleUp, staggerContainer, useReveal } from '../hooks/useScrollAnimations'
import {
  FiBarChart2,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGlobe,
  FiLayers,
  FiLock,
  FiRefreshCw,
  FiServer,
  FiTerminal,
  FiTool,
  FiTrendingUp,
  FiZap,
} from 'react-icons/fi'
import {
  SiCpanel,
  SiCss,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFigma,
  SiGit,
  SiGithub,
  SiGooglecolab,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiLinux,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiOpenai,
  SiPandas,
  SiPostgresql,
  SiPrisma,
  SiPostman,
  SiPython,
  SiPytorch,
  SiReact,
  SiReacthookform,
  SiScikitlearn,
  SiShadcnui,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiZod,
} from 'react-icons/si'

const iconLibrary = {
  FiBarChart2,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGlobe,
  FiLayers,
  FiLock,
  FiRefreshCw,
  FiServer,
  FiTerminal,
  FiTool,
  FiTrendingUp,
  FiZap,
  SiCpanel,
  SiCss,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFigma,
  SiGit,
  SiGithub,
  SiGooglecolab,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiLinux,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiOpenai,
  SiPandas,
  SiPostgresql,
  SiPrisma,
  SiPostman,
  SiPython,
  SiPytorch,
  SiReact,
  SiReacthookform,
  SiScikitlearn,
  SiShadcnui,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiZod,
}

const resolveIcon = (key) => iconLibrary[key] || FiCode

const MONO = 'rgb(var(--text-primary))'

const categoryAccent = {
  Languages: '#f7df1e',
  Frontend: '#61dafb',
  Backend: '#3cba54',
  Database: '#47a248',
  'AI / ML': '#a45ee5',
  'Tools & Platforms': '#ff6c37',
  'Currently Exploring': '#a45ee5',
}

const techColors = {
  SiJavascript: '#f7df1e',
  SiTypescript: '#3178c6',
  SiHtml5: '#e34f26',
  SiCss: '#663399',
  SiReact: '#61dafb',
  SiNextdotjs: MONO,
  SiTailwindcss: '#38bdf8',
  SiShadcnui: MONO,
  FiRefreshCw: '#ff4154',
  SiReacthookform: '#ec5990',
  SiZod: '#3e67b1',
  FiZap: '#f0a500',
  FiBarChart2: '#f0a500',
  SiNodedotjs: '#3c873a',
  SiExpress: MONO,
  FiGlobe: '#f0a500',
  SiJsonwebtokens: MONO,
  FiLock: '#f0a500',
  SiFirebase: '#ffca28',
  SiStripe: '#635bff',
  SiOpenai: '#10a37f',
  SiMongodb: '#47a248',
  SiMongoose: '#b91c1c',
  SiPostgresql: '#4169e1',
  SiMysql: '#00758f',
  SiPrisma: '#6366f1',
  FiDatabase: '#f0a500',
  SiDocker: '#2496ed',
  SiGit: '#f05033',
  SiGithub: MONO,
  SiLinux: '#fcc624',
  FiServer: '#f0a500',
  SiCpanel: '#ff6c2f',
  SiPostman: '#ff6c37',
  SiFigma: '#f24e1e',
  FiCode: '#f0a500',
  SiVercel: MONO,
  SiNetlify: '#00c7b7',
  SiPython: '#3776ab',
  SiPytorch: '#ee4c2c',
  SiScikitlearn: '#f7931e',
  SiNumpy: '#4d77cf',
  SiPandas: '#8b5cf6',
  SiGooglecolab: '#f9ab00',
  FiTerminal: '#f0a500',
  FiCpu: '#a45ee5',
  FiLayers: '#a45ee5',
  FiTrendingUp: '#a45ee5',
}

function CategoryCard({ category, index }) {
  const { ref, inView } = useReveal({ margin: '-40px' })
  const { lang } = useLanguage()
  const Icon = resolveIcon(category.icon)
  const accent = categoryAccent[category.category] || '#f0a500'

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.08,
            staggerChildren: 0.035,
            delayChildren: 0.18,
          },
        },
      }}
      whileHover={{
        borderColor: 'rgb(var(--accent-gold) / 0.25)',
        transition: { duration: 0.2 },
      }}
      className="card"
    >
      <div className="mb-4 flex items-center gap-3">
        <motion.div
          variants={{
            hidden: { scale: 0, rotate: -15 },
            visible: {
              scale: 1,
              rotate: 0,
              transition: { type: 'spring', stiffness: 300, damping: 20 },
            },
          }}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-bg-border bg-bg-secondary"
        >
          <Icon size={17} style={{ color: accent }} />
        </motion.div>
        <div className="flex-1">
          <motion.h3 variants={fadeUp} className="font-syne text-base font-bold text-text-primary">
            {pick(category, 'category', lang)}
          </motion.h3>
        </div>
        <span className="rounded-full border border-bg-border px-2 py-0.5 text-[10px] font-epilogue text-text-muted">
          {category.items.length}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.items.map((skill) => {
          const SkillIcon = resolveIcon(skill.icon)
          const color = techColors[skill.icon] || '#f0a500'
          return (
            <motion.span
              key={skill.name}
              variants={scaleUp}
              whileHover={{ scale: 1.05, borderColor: `${color}66` }}
              className="group inline-flex items-center gap-2 rounded-xl border border-bg-border bg-bg-secondary px-2.5 py-2 transition-colors duration-200"
              title={skill.name}
            >
              <SkillIcon
                size={14}
                style={{ color }}
                className="shrink-0 transition-transform duration-200 group-hover:scale-110"
              />
              <span className="font-epilogue text-[11px] text-text-secondary transition-colors group-hover:text-text-primary">
                {pick(skill, 'name', lang)}
              </span>
            </motion.span>
          )
        })}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const { t, messages } = useLanguage()
  const { ref: extraRef, inView: extraInView } = useReveal({ margin: '-40px' })

  return (
    <SectionWrapper id="skills" className="section-pad section-soft">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label={t('skills.label')}
          title={
            <>
              {t('skills.titleStart')}{' '}
              <span className="text-accent-gold">{t('skills.titleAccent')}</span>
            </>
          }
          subtitle={t('skills.subtitle')}
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((category, index) => (
            <CategoryCard key={category.category} category={category} index={index} />
          ))}
        </div>

        <motion.div
          ref={extraRef}
          initial={{ opacity: 0, y: 20 }}
          animate={extraInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 border-t border-bg-border/60 pt-8"
        >
          <p className="mb-5 text-center text-xs font-epilogue uppercase tracking-[0.18em] text-text-muted">
            {t('skills.beyond')}
          </p>
          <motion.div
            variants={staggerContainer(0.05)}
            initial="hidden"
            animate={extraInView ? 'visible' : 'hidden'}
            className="flex flex-wrap justify-center gap-2.5"
          >
            {messages.skills.softSkills.map((skill) => (
              <motion.span
                key={skill}
                variants={scaleUp}
                whileHover={{
                  scale: 1.06,
                  borderColor: 'rgb(var(--accent-gold) / 0.5)',
                  color: 'rgb(var(--accent-gold))',
                }}
                className="tag cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
