import type { Config } from 'tailwindcss'
import fs from 'fs'
import path from 'path'
import tailwindScrollbar from 'tailwind-scrollbar'

const themePath = path.resolve(__dirname, './theme/theme.json')
const { global } = JSON.parse(fs.readFileSync(themePath, 'utf-8'))

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/core/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        red: {
          50: global.Red['red-50'].value,
          100: global.Red['red-100'].value,
          200: global.Red['red-200'].value,
          300: global.Red['red-300'].value,
          400: global.Red['red-400'].value,
          500: global.Red['red-500'].value,
          600: global.Red['red-600'].value,
          700: global.Red['red-700'].value,
          800: global.Red['red-800'].value,
          900: global.Red['red-900'].value
        },
        blue: {
          1: global.Blue['blue-1'].value,
          2: global.Blue['blue-2'].value,
          3: global.Blue['blue-3'].value,
          4: global.Blue['blue-4'].value,
          5: global.Blue['blue-5'].value,
          6: global.Blue['blue-6'].value,
          7: global.Blue['blue-7'].value,
          8: global.Blue['blue-8'].value,
          9: global.Blue['blue-9'].value,
          10: global.Blue['blue-10'].value
        },
        black: {
          1: global.Black['black-1'].value,
          2: global.Black['black-2'].value,
          3: global.Black['black-3'].value,
          4: global.Black['black-4'].value,
          5: global.Black['black-5'].value,
          6: global.Black['black-6'].value,
          7: global.Black['black-7'].value,
          8: global.Black['black-8'].value,
          9: global.Black['black-9'].value,
          10: global.Black['black-10'].value,
          11: global.Black['black-11'].value,
          12: global.Black['black-12'].value,
          13: global.Black['black-13'].value
        }
      },
      fontFamily: {
        'darker-grotesque': ['var(--darker-grotesque)', 'sans-serif'],
        roboto: ['var(--roboto)', 'sans-serif'],
        karla: ['var(--karla)', 'sans-serif'],
        inter: ['var(--inter)', 'sans-serif']
      },
      fontSize: {
        0: global.fontSize['0'].value + 'px',
        1: global.fontSize['1'].value + 'px',
        2: global.fontSize['2'].value + 'px',
        3: global.fontSize['3'].value + 'px',
        4: global.fontSize['4'].value + 'px',
        5: global.fontSize['5'].value + 'px',
        6: global.fontSize['6'].value + 'px',
        7: global.fontSize['7'].value + 'px',
        8: global.fontSize['8'].value + 'px',
        9: global.fontSize['9'].value + 'px',
        10: global.fontSize['10'].value + 'px',
        11: global.fontSize['11'].value + 'px',
        12: global.fontSize['12'].value + 'px',
        13: global.fontSize['13'].value + 'px',
        14: global.fontSize['14'].value + 'px',
        15: global.fontSize['15'].value + 'px',
        16: global.fontSize['16'].value + 'px',
        17: global.fontSize['17'].value + 'px',
        18: global.fontSize['18'].value + 'px',
        19: global.fontSize['19'].value + 'px',
        20: global.fontSize['20'].value + 'px'
      },
      lineHeight: {
        0: global.lineHeights['0'].value + 'px',
        1: global.lineHeights['1'].value + 'px',
        2: global.lineHeights['2'].value + 'px',
        3: global.lineHeights['3'].value + 'px',
        4: global.lineHeights['4'].value + 'px',
        5: global.lineHeights['5'].value + 'px'
      },
      fontWeight: {
        'darker-grotesque-0': global.fontWeights['darker-grotesque-0'].value, // Medium
        'darker-grotesque-1': global.fontWeights['darker-grotesque-1'].value, // Black
        'roboto-2': global.fontWeights['roboto-2'].value, // Regular
        'darker-grotesque-3': global.fontWeights['darker-grotesque-3'].value, // ExtraBold
        'darker-grotesque-4': global.fontWeights['darker-grotesque-4'].value, // Bold
        'karla-5': global.fontWeights['karla-5'].value, // Regular
        'darker-grotesque-6': global.fontWeights['darker-grotesque-6'].value, // Regular
        'darker-grotesque-7': global.fontWeights['darker-grotesque-7'].value, // SemiBold
        'karla-8': global.fontWeights['karla-8'].value, // Medium
        'karla-9': global.fontWeights['karla-9'].value, // Light
        'karla-10': global.fontWeights['karla-10'].value, // Bold
        'darker-grotesque-11': global.fontWeights['darker-grotesque-11'].value,
        'darker-grotesque-300': '300', // Peso Medium
        'darker-grotesque-400': '400', // Peso Regular
        'darker-grotesque-500': '500', // Peso Medium
        'darker-grotesque-600': '600', // Peso SemiBold
        'darker-grotesque-700': '700', // Peso Bold // Semi Bold
        'karla-300': '300', // Peso Medium
        'karla-400': '400', // Peso Regular
        'karla-500': '500', // Peso Medium
        'karla-600': '600', // Peso SemiBold
        'karla-700': '700', // Peso Bold // Semi Bold
        'inter-300': '300', // Peso Medium
        'inter-400': '400', // Peso Regular
        'inter-500': '500', // Peso Medium
        'inter-600': '600', // Peso SemiBold
        'inter-700': '700' // Peso Bold // Semi Bold
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      animation: {
        scrollLeft: 'scroll-left 20s linear infinite',
        'infinite-scroll': 'scroll 25s linear infinite',
        typing: 'typing 2s steps(20, end) infinite'
      },
      keyframes: {
        'scroll-left': {
          'from%': { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 7))' } // ajusta este valor según el número de logos
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        }
      },
      boxShadow: {
        shadowFlags: '0 -5px 10px rgba(0, 0, 0, 0.16)',
        shadowFlagsDesktop: '0 0 30px rgba(0, 0, 0, 0.16)'
      },
      width: {
        widthFlags: 'clamp(47px, 15vw, 72px)'
      }
    }
  },
  plugins: [tailwindScrollbar({ nocompatible: true })]
}
export default config
