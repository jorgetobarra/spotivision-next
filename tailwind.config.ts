/* eslint-disable global-require */
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        bg: '#fff',
        darkBg: '#555',
        modalBg: 'rgba(0, 0, 0, 0.4)',
        modalDarkBg: 'rgba(255, 255, 255, 0.4)',
        accentBg: '#f0f0f0',
        darkAccentBg: '#111',
        text: '#333',
        subText: '#666',
        darkText: '#fff',
        darkSubText: '#aaa',
        primary: {
          400: '#66BB6A',
          500: '#4CAF50',
          600: '#43A047',
        },
        secondary: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-animate')],
};
export default config;
