import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        cascade: {
          DEFAULT: '#98AEAB',
          50: '#FFFFFF',
          100: '#F3F6F6',
          200: '#DDE4E3',
          300: '#C6D2D0',
          400: '#AFC0BE',
          500: '#98AEAB',
          600: '#799591',
          700: '#5E7874',
          800: '#455856',
          900: '#2D3937'
        },
        tailwindcss: {
          text: '#38BDF8'
        },
        typescript: {
          text: '#3178C6'
        }
      },
      keyframes: {
        'wave-animation': {
          '0%, 100%': {
            transform: 'rotate(0deg)'
          },
          '25%': {
            transform: 'rotate(20deg)'
          },
          '75%': {
            transform: 'rotate(-15deg)'
          }
        }
      },
      animation: {
        'wave-animation': 'wave-animation 0.3s infinite'
      }
    }
  },
  plugins: []
}

export default config
