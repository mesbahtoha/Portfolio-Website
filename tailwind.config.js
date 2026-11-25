/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'Hind Siliguri', 'sans-serif'],
        epilogue: ['Epilogue', 'Hind Siliguri', 'sans-serif'],
        bangla: ['Hind Siliguri', 'Epilogue', 'sans-serif'],
      },
      colors: {
        bg: {
          primary: 'rgb(var(--bg-primary) / <alpha-value>)',
          secondary: 'rgb(var(--bg-secondary) / <alpha-value>)',
          card: 'rgb(var(--bg-card) / <alpha-value>)',
          border: 'rgb(var(--bg-border) / <alpha-value>)',
        },
        accent: {
          gold: 'rgb(var(--accent-gold) / <alpha-value>)',
          amber: 'rgb(var(--accent-amber) / <alpha-value>)',
          coral: 'rgb(var(--accent-coral) / <alpha-value>)',
          blue: 'rgb(var(--accent-blue) / <alpha-value>)',
        },
        text: {
          primary: 'rgb(var(--text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
          muted: 'rgb(var(--text-muted) / <alpha-value>)',
        },
      },
      boxShadow: {
        soft: '0 20px 60px -30px rgb(0 0 0 / 0.45)',
        glow: '0 0 40px rgb(var(--accent-gold) / 0.18)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        marquee: 'marquee 32s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgb(var(--accent-gold) / 0.25)' },
          '50%': { boxShadow: '0 0 40px rgb(var(--accent-gold) / 0.45)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgb(var(--accent-gold) / 0.035) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--accent-gold) / 0.035) 1px, transparent 1px)',
        'hero-gradient':
          'radial-gradient(ellipse at 18% 45%, rgb(var(--accent-gold) / 0.10) 0%, transparent 58%), radial-gradient(ellipse at 82% 18%, rgb(var(--accent-blue) / 0.08) 0%, transparent 55%)',
      },
      backgroundSize: {
        grid: '60px 60px',
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
}
