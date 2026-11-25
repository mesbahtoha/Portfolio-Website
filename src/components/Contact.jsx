import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import SectionWrapper, { SectionHeading } from './SectionWrapper'
import { personal } from '../data/data'
import { useLanguage } from '../context/LanguageContext'
import {
  slideLeft,
  slideRight,
  fadeUp,
  scaleUp,
  staggerContainer,
  useReveal,
} from '../hooks/useScrollAnimations'
import {
  FiAlertCircle,
  FiCheck,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from 'react-icons/fi'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

const EMAILJS_SERVICE_ID = 'service_bagerdo'
const EMAILJS_TEMPLATE_ID = 'template_244vtrm'
const EMAILJS_PUBLIC_KEY = 'asbAb2JcSv6aXvChh'

const socialLinks = [
  { icon: FiGithub, href: personal.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personal.linkedin, label: 'LinkedIn' },
  { icon: FaFacebookF, href: personal.facebook, label: 'Facebook' },
  { icon: FaInstagram, href: personal.instagram, label: 'Instagram' },
]

function FormField({ label, children, delay = 0 }) {
  const { ref, inView } = useReveal()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      <label className="mb-2 block text-xs font-epilogue font-medium uppercase tracking-widest text-text-secondary">
        {label}
      </label>
      {children}
    </motion.div>
  )
}

export default function Contact() {
  const { t } = useLanguage()
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [focused, setFocused] = useState('')

  const { ref: leftRef, inView: leftInView } = useReveal({ margin: '-50px' })
  const { ref: rightRef, inView: rightInView } = useReveal({ margin: '-50px' })

  const contactInfo = [
    {
      icon: FiMail,
      label: t('contact.email'),
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: FiPhone,
      label: t('contact.phone'),
      value: personal.phoneDisplay,
      href: `tel:${personal.phone}`,
    },
    {
      icon: FiMapPin,
      label: t('contact.location'),
      value: personal.location,
      href: null,
    },
  ]

  const inputClass = (field) =>
    `w-full rounded-xl border bg-bg-secondary px-4 py-3 text-sm font-epilogue text-text-primary
     placeholder:text-text-muted outline-none transition-all duration-200
     ${
       focused === field
         ? 'border-accent-gold/60 shadow-lg shadow-accent-gold/10'
         : 'border-bg-border hover:border-bg-border/80'
     }`

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formState.name,
          name: formState.name,
          from_email: formState.email,
          reply_to: formState.email,
          message: formState.message,
          to_email: 'mesbahulalam017@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      )

      setStatus('success')
      setFormState({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch (error) {
      console.error('EmailJS send failed:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const buttonConfig = {
    idle: {
      label: t('contact.send'),
      icon: <FiSend size={15} />,
      className: 'bg-accent-gold text-bg-primary hover:bg-accent-amber shadow-accent-gold/20',
    },
    sending: {
      label: t('contact.sending'),
      icon: (
        <svg
          className="animate-spin"
          width={15}
          height={15}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <circle cx="12" cy="12" r="10" strokeOpacity={0.25} />
          <path d="M12 2a10 10 0 0 1 10 10" />
        </svg>
      ),
      className: 'bg-accent-gold/60 text-bg-primary cursor-not-allowed',
    },
    success: {
      label: t('contact.sent'),
      icon: <FiCheck size={15} />,
      className: 'bg-emerald-500 text-white shadow-emerald-500/20',
    },
    error: {
      label: t('contact.failed'),
      icon: <FiAlertCircle size={15} />,
      className: 'bg-red-500 text-white shadow-red-500/20',
    },
  }

  const button = buttonConfig[status]

  return (
    <SectionWrapper id="contact" className="section-pad section-soft">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label={t('contact.label')}
          title={
            <>
              {t('contact.titleStart')}{' '}
              <span className="text-accent-gold">{t('contact.titleAccent')}</span>
            </>
          }
          subtitle={t('contact.subtitle')}
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
          <motion.div
            ref={leftRef}
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate={leftInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-3.5 lg:col-span-2"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 4 }}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent-gold/20 bg-accent-gold/10 transition-colors group-hover:bg-accent-gold/20"
                  >
                    <Icon className="text-accent-gold" size={16} />
                  </motion.div>
                  <div>
                    <p className="text-[10px] font-epilogue uppercase tracking-wider text-text-muted">
                      {label}
                    </p>
                    <p className="mt-0.5 break-all font-epilogue text-sm text-text-primary transition-colors group-hover:text-accent-gold">
                      {value}
                    </p>
                  </div>
                </>
              )

              return href ? (
                <motion.a
                  key={label}
                  href={href}
                  variants={slideLeft}
                  whileHover={{
                    x: 5,
                    borderColor: 'rgb(var(--accent-gold) / 0.3)',
                    transition: { duration: 0.2 },
                  }}
                  className="card group flex items-center gap-4 no-underline"
                >
                  {inner}
                </motion.a>
              ) : (
                <motion.div
                  key={label}
                  variants={slideLeft}
                  whileHover={{
                    x: 5,
                    borderColor: 'rgb(var(--accent-gold) / 0.3)',
                    transition: { duration: 0.2 },
                  }}
                  className="card group flex items-center gap-4"
                >
                  {inner}
                </motion.div>
              )
            })}

            <motion.div variants={fadeUp} className="card">
              <p className="mb-4 text-[10px] font-epilogue uppercase tracking-wider text-text-muted">
                {t('contact.findMeOnline')}
              </p>
              <motion.div variants={staggerContainer(0.06)} className="flex flex-wrap gap-2.5">
                {socialLinks.map(({ icon: Icon, href, label }) =>
                  href ? (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      variants={scaleUp}
                      whileHover={{
                        scale: 1.1,
                        borderColor: 'rgb(var(--accent-gold) / 0.5)',
                      }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-bg-border text-text-secondary transition-all duration-200 hover:border-accent-gold/50 hover:text-accent-gold"
                    >
                      <Icon size={15} />
                    </motion.a>
                  ) : null
                )}
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-400" />
                <p className="font-epilogue text-xs text-emerald-500">
                  {t('contact.available')}
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            ref={rightRef}
            initial="hidden"
            animate={rightInView ? 'visible' : 'hidden'}
            variants={slideRight}
            className="card p-6 sm:p-8 lg:col-span-3"
          >
            <motion.h3
              variants={fadeUp}
              className="mb-6 font-syne text-lg font-bold text-text-primary"
            >
              {t('contact.formTitle')}
            </motion.h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField label={t('contact.name')} delay={0.08}>
                  <input
                    type="text"
                    placeholder={t('contact.namePlaceholder')}
                    value={formState.name}
                    onChange={(event) =>
                      setFormState((current) => ({ ...current, name: event.target.value }))
                    }
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused('')}
                    className={inputClass('name')}
                    autoComplete="name"
                    required
                  />
                </FormField>

                <FormField label={t('contact.emailLabel')} delay={0.12}>
                  <input
                    type="email"
                    placeholder={t('contact.emailPlaceholder')}
                    value={formState.email}
                    onChange={(event) =>
                      setFormState((current) => ({ ...current, email: event.target.value }))
                    }
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                    className={inputClass('email')}
                    autoComplete="email"
                    required
                  />
                </FormField>
              </div>

              <FormField label={t('contact.message')} delay={0.16}>
                <textarea
                  rows={6}
                  placeholder={t('contact.messagePlaceholder')}
                  value={formState.message}
                  onChange={(event) =>
                    setFormState((current) => ({ ...current, message: event.target.value }))
                  }
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')}
                  className={`${inputClass('message')} resize-none`}
                  required
                />
              </FormField>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                className={`flex items-center gap-2 self-start rounded-full px-7 py-3 font-syne text-sm font-bold shadow-lg transition-all duration-300 ${button.className}`}
              >
                {button.icon}
                {button.label}
              </motion.button>

              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-epilogue text-xs leading-relaxed text-red-500"
                >
                  {t('contact.error')}{' '}
                  <a
                    href="mailto:mesbahulalam017@gmail.com"
                    className="underline transition-colors hover:text-accent-gold"
                  >
                    mesbahulalam017@gmail.com
                  </a>
                </motion.p>
              )}

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-epilogue text-xs text-emerald-500"
                >
                  {t('contact.success')}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
