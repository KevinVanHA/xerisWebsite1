/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0019A5',
        'brand-navy': '#010414',
        'brand-midnight': '#050B2B',
        'brand-space': '#0A123D',
        'brand-muted': '#4E5BA6',
        'brand-deep': '#000B4F',
        'brand-light': '#F0F2F5',
        'text-header': '#F0F2F5',
        'text-body': '#94a3b8',
        'text-muted': '#64748b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'reveal': 'reveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          '0%': { transform: 'scale(1.05)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
        'premium': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        'brand-glow': '0 0 40px -10px rgba(0, 25, 165, 0.4)',
      }
    },
  },
  plugins: [],
}
