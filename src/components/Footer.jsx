import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowUp } from 'react-icons/fi'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { personal } from '../data/data'
import shortImg from '../assets/shortImg.jpeg'
import { useReveal, staggerContainer, fadeUp, scaleUp } from '../hooks/useScrollAnimations'

const socialLinks = [
  { icon: FiGithub, href: personal.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personal.linkedin, label: 'LinkedIn' },
  { icon: FaFacebookF, href: personal.facebook, label: 'Facebook' },
  { icon: FaInstagram, href: personal.instagram, label: 'Instagram' },
]

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const { ref, inView } = useReveal({ margin: '-20px' })

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <motion.footer
      ref={ref}
      variants={staggerContainer(0.08)}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="bg-bg-secondary/50 border-t border-bg-border/50"
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Top row */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent-gold p-[2px] overflow-hidden">
                <div className="w-full h-full rounded-[6px] overflow-hidden bg-bg-card">
                  <img
                    src={shortImg}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <span className="font-syne font-700 text-text-primary">
                {personal.shortName}
                <span className="text-accent-gold">.</span>
              </span>
            </div>

            <p className="text-text-muted text-xs font-epilogue max-w-xs leading-relaxed">
              MERN Stack Developer based in {personal.location}. Open to opportunities.
            </p>
          </div>

          <motion.nav
            variants={staggerContainer(0.06)}
            className="flex flex-wrap gap-x-6 gap-y-2"
          >
            {footerLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                variants={fadeUp}
                whileHover={{ color: '#f0a500', y: -2 }}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-text-muted text-sm font-epilogue transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.nav>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={{
            hidden: { scaleX: 0, opacity: 0 },
            visible: {
              scaleX: 1,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          style={{ transformOrigin: '0%' }}
          className="h-px bg-gradient-to-r from-transparent via-bg-border to-transparent mb-8"
        />

        {/* Bottom row */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <motion.div
            variants={staggerContainer(0.07)}
            className="flex items-center gap-3 flex-wrap"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                variants={scaleUp}
                whileHover={{ scale: 1.15, borderColor: 'rgba(240,165,0,0.4)' }}
                className="w-9 h-9 rounded-full border border-bg-border flex items-center justify-center
                           text-text-muted hover:text-accent-gold transition-colors"
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </motion.div>

          <p className="text-text-muted text-xs font-epilogue text-center">
            © {new Date().getFullYear()} {personal.name}. Built with React & Tailwind.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3, borderColor: 'rgba(240,165,0,0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-full border border-bg-border flex items-center justify-center
                       text-text-muted hover:text-accent-gold transition-colors"
            aria-label="Back to top"
          >
            <FiArrowUp size={14} />
          </motion.button>
        </motion.div>
      </div>
    </motion.footer>
  )
}