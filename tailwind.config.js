/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        epilogue: ['Epilogue', 'sans-serif'],
      },
      colors: {
        bg: {
          primary: '#080810',
          secondary: '#0e0e1a',
          card: '#12121f',
          border: '#1e1e30',
        },
        accent: {
          gold: '#f0a500',
          amber: '#ffb830',
          coral: '#ff6b6b',
          blue: '#4a9eff',
        },
        text: {
          primary: '#f0eee8',
          secondary: '#9896a4',
          muted: '#5a5870',
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(240, 165, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(240, 165, 0, 0.6)' },
        }
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(240,165,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(240,165,0,0.03) 1px, transparent 1px)",
        'hero-gradient': 'radial-gradient(ellipse at 20% 50%, rgba(240,165,0,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(74,158,255,0.06) 0%, transparent 60%)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      }
    },
  },
  plugins: [],
}
