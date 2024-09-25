import type { Config } from 'tailwindcss'
import fs from 'fs'
import path from 'path'

const themePath = path.resolve(__dirname, './theme/theme.json')
const { global } = JSON.parse(fs.readFileSync(themePath, 'utf-8'))
console.log(global.lineHeights)

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/core/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
          900: global.Red['red-900'].value,
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
          10: global.Blue['blue-10'].value,
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
          13: global.Black['black-13'].value,
        },
      },
      fontFamily: {
        'darker-grotesque': ['Darker Grotesque', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        karla: ['Karla', 'sans-serif'],
      },
      fontSize: {
        0: global.fontSize['0'].value,
        1: global.fontSize['1'].value,
        2: global.fontSize['2'].value,
        3: global.fontSize['3'].value,
        4: global.fontSize['4'].value,
        5: global.fontSize['5'].value,
        6: global.fontSize['6'].value,
        7: global.fontSize['7'].value,
        8: global.fontSize['8'].value,
        9: global.fontSize['9'].value,
        10: global.fontSize['10'].value,
        11: global.fontSize['11'].value,
        12: global.fontSize['12'].value,
        13: global.fontSize['13'].value,
        14: global.fontSize['14'].value,
        15: global.fontSize['15'].value,
        16: global.fontSize['16'].value,
        17: global.fontSize['17'].value,
        18: global.fontSize['18'].value,
        19: global.fontSize['19'].value,
        20: global.fontSize['20'].value,
      },
      lineHeight: {
        0: global.lineHeights['0'].value,
        1: global.lineHeights['1'].value,
        2: global.lineHeights['2'].value,
        3: global.lineHeights['3'].value,
        4: global.lineHeights['4'].value,
        5: global.lineHeights['5'].value,
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
        'darker-grotesque-11': global.fontWeights['darker-grotesque-11'].value, // Semi Bold
      },
    },
  },
  plugins: [],
}
export default config
