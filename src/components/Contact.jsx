import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import SectionWrapper, { SectionHeading } from './SectionWrapper'
import { personal } from '../data/data'
import {
  slideLeft, slideRight, fadeUp, scaleUp,
  staggerContainer, useReveal,
} from '../hooks/useScrollAnimations'
import {
  FiMail, FiMapPin, FiPhone,
  FiGithub, FiLinkedin,
  FiSend, FiCheck, FiAlertCircle,
} from 'react-icons/fi'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

// ─────────────────────────────────────────────────────────────
//  🔑 YOUR EMAILJS KEYS — already configured
// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_bagerdo'
const EMAILJS_TEMPLATE_ID = 'template_244vtrm'
const EMAILJS_PUBLIC_KEY  = 'asbAb2JcSv6aXvChh'
// ─────────────────────────────────────────────────────────────

// Contact info cards (left panel)
const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone}`,
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: personal.location,
    href: null, // no link for location
  },
]

// Social icon links
const socialLinks = [
  { icon: FiGithub,    href: personal.github,    label: 'GitHub' },
  { icon: FiLinkedin,  href: personal.linkedin,  label: 'LinkedIn' },
  { icon: FaFacebookF, href: personal.facebook,  label: 'Facebook' },
  { icon: FaInstagram, href: personal.instagram, label: 'Instagram' },
]

// Animated form field wrapper
function FormField({ label, children, delay = 0 }) {
  const { ref, inView } = useReveal()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      <label className="block text-text-secondary text-xs font-epilogue font-500 uppercase tracking-widest mb-2">
        {label}
      </label>
      {children}
    </motion.div>
  )
}

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  // status: 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle')
  const [focused, setFocused] = useState('')

  const { ref: leftRef,  inView: leftInView  } = useReveal({ margin: '-50px' })
  const { ref: rightRef, inView: rightInView } = useReveal({ margin: '-50px' })

  // Dynamic input border based on focus state
  const inputClass = (field) =>
    `w-full bg-bg-secondary border rounded-xl px-4 py-3 text-text-primary text-sm font-epilogue
     placeholder:text-text-muted outline-none transition-all duration-200
     ${focused === field
       ? 'border-accent-gold/60 shadow-lg shadow-accent-gold/10'
       : 'border-bg-border hover:border-bg-border/80'
     }`

  // ─────────────────────────────────────────────────────────
  //  EMAILJS SEND — all template variables included
  //  FIX 1: added  name: formState.name        → {{name}} in template body
  //  FIX 2: added  reply_to: formState.email   → {{reply_to}} in Reply To field
  //  This means when you hit Reply in Gmail it goes to the sender, not yourself
  // ─────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          // Matches {{from_name}} — used in Subject line
          from_name:  formState.name,

          // Matches {{name}} — used in email body/avatar in your template
          name:       formState.name,

          // Matches {{from_email}} — shows sender's email in body
          from_email: formState.email,

          // Matches {{reply_to}} — THIS makes Gmail Reply go to the sender ✅
          reply_to:   formState.email,

          // Matches {{message}} — the actual message content
          message:    formState.message,

          // Destination inbox
          to_email:   'mesbahulalam017@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      )

      setStatus('success')
      setFormState({ name: '', email: '', message: '' })
      // Reset button back to idle after 4 seconds
      setTimeout(() => setStatus('idle'), 4000)

    } catch (error) {
      console.error('EmailJS send failed:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  // Button label + icon + style based on current status
  const buttonConfig = {
    idle: {
      label: 'Send Message',
      icon:  <FiSend size={15} />,
      className: 'bg-accent-gold text-bg-primary hover:bg-accent-amber shadow-accent-gold/20',
    },
    sending: {
      label: 'Sending...',
      icon:  (
        // Spinning loader ring (CSS only, no extra library)
        <svg
          className="animate-spin"
          width={15} height={15}
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
      label: 'Message Sent!',
      icon:  <FiCheck size={15} />,
      className: 'bg-emerald-500 text-white shadow-emerald-500/20',
    },
    error: {
      label: 'Failed — Try Again',
      icon:  <FiAlertCircle size={15} />,
      className: 'bg-red-500 text-white shadow-red-500/20',
    },
  }

  const btn = buttonConfig[status]

  return (
    <SectionWrapper id="contact" className="py-24 bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Contact"
          title={<>Let&apos;s <span className="text-accent-gold">Connect</span></>}
          subtitle="Have an opportunity or just want to say hi? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* ── LEFT PANEL ─────────────────────────────────── */}
          <motion.div
            ref={leftRef}
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate={leftInView ? 'visible' : 'hidden'}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Contact info cards */}
            {contactInfo.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 5 }}
                    className="w-10 h-10 rounded-xl bg-accent-gold/10 border border-accent-gold/20
                               flex items-center justify-center shrink-0
                               group-hover:bg-accent-gold/20 transition-colors"
                  >
                    <Icon className="text-accent-gold" size={16} />
                  </motion.div>
                  <div>
                    <p className="text-text-muted text-xs font-epilogue uppercase tracking-wider">
                      {label}
                    </p>
                    <p className="text-text-primary text-sm font-epilogue mt-0.5 group-hover:text-accent-gold transition-colors">
                      {value}
                    </p>
                  </div>
                </>
              )

              // Render as <a> if href exists, otherwise plain <div>
              return href ? (
                <motion.a
                  key={label}
                  href={href}
                  variants={slideLeft}
                  whileHover={{ x: 6, borderColor: 'rgba(240,165,0,0.3)', transition: { duration: 0.2 } }}
                  className="card flex items-center gap-4 group no-underline"
                >
                  {inner}
                </motion.a>
              ) : (
                <motion.div
                  key={label}
                  variants={slideLeft}
                  whileHover={{ x: 6, borderColor: 'rgba(240,165,0,0.3)', transition: { duration: 0.2 } }}
                  className="card flex items-center gap-4 group"
                >
                  {inner}
                </motion.div>
              )
            })}

            {/* Social links */}
            <motion.div variants={fadeUp} className="card">
              <p className="text-text-muted text-xs font-epilogue uppercase tracking-wider mb-4">
                Find Me Online
              </p>
              <motion.div variants={staggerContainer(0.07)} className="flex flex-wrap gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  // Only render if href is set in data.js
                  href ? (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      variants={scaleUp}
                      whileHover={{ scale: 1.15, borderColor: 'rgba(240,165,0,0.5)' }}
                      className="w-10 h-10 rounded-full border border-bg-border flex items-center justify-center
                                 text-text-secondary hover:text-accent-gold hover:border-accent-gold/50
                                 transition-all duration-200"
                    >
                      <Icon size={16} />
                    </motion.a>
                  ) : null
                ))}
              </motion.div>
            </motion.div>

            {/* GitHub card */}
            {/* <motion.a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              whileHover={{ x: 6, borderColor: 'rgba(240,165,0,0.3)', transition: { duration: 0.2 } }}
              className="card flex items-center gap-3 group no-underline"
            >
              <FiGithub className="text-accent-gold" size={18} />
              <div>
                <p className="text-text-primary text-sm font-epilogue font-500 group-hover:text-accent-gold transition-colors">
                  View My GitHub
                </p>
                <p className="text-text-muted text-xs font-epilogue mt-0.5">
                  github.com/mesbahtoha
                </p>
              </div>
            </motion.a> */}

            {/* Availability badge */}
            <motion.div
              variants={fadeUp}
              className="px-4 py-3 bg-emerald-500/5 border border-emerald-500/20 rounded-xl"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <p className="text-emerald-400 text-xs font-epilogue">
                  Actively looking for junior / entry-level roles
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT PANEL — FORM ──────────────────────────── */}
          <motion.div
            ref={rightRef}
            initial="hidden"
            animate={rightInView ? 'visible' : 'hidden'}
            variants={slideRight}
            className="lg:col-span-3 card p-8"
          >
            <motion.h3
              variants={fadeUp}
              className="font-syne font-700 text-text-primary text-lg mb-6"
            >
              Send a Message
            </motion.h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField label="Your Name" delay={0.1}>
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    value={formState.name}
                    onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused('')}
                    className={inputClass('name')}
                    required
                  />
                </FormField>

                <FormField label="Email Address" delay={0.15}>
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState(s => ({ ...s, email: e.target.value }))}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                    className={inputClass('email')}
                    required
                  />
                </FormField>
              </div>

              <FormField label="Message" delay={0.2}>
                <textarea
                  rows={6}
                  placeholder="Tell me about the opportunity or just say hi..."
                  value={formState.message}
                  onChange={(e) => setFormState(s => ({ ...s, message: e.target.value }))}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')}
                  className={`${inputClass('message')} resize-none`}
                  required
                />
              </FormField>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={status === 'idle' ? { scale: 1.03 } : {}}
                whileTap={status === 'idle' ? { scale: 0.97 } : {}}
                className={`self-start flex items-center gap-2 px-8 py-3 rounded-full
                            font-syne font-700 text-sm transition-all duration-300 shadow-lg
                            ${btn.className}`}
              >
                {btn.icon}
                {btn.label}
              </motion.button>

              {/* Error fallback message */}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-xs font-epilogue leading-relaxed"
                >
                  Something went wrong. Please email me directly at{' '}
                  <a
                    href="mailto:mesbahulalam017@gmail.com"
                    className="underline hover:text-accent-gold transition-colors"
                  >
                    mesbahulalam017@gmail.com
                  </a>
                </motion.p>
              )}

              {/* Success confirmation */}
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-emerald-400 text-xs font-epilogue"
                >
                  ✓ Your message has been delivered to my inbox. I'll get back to you soon!
                </motion.p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  )
}
