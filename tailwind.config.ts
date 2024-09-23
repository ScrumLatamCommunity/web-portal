import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          50: '#ffeae6',
          100: '#ffbeb0',
          200: '#ff9f8a',
          300: '#fe7354',
          400: '#fe5833',
          500: '#fe2e00',
          600: '#e72a00',
          700: '#b42100',
          800: '#8c1900',
          900: '#6b1300',
        },
        blue: {
          1: '#e6eaf0',
          2: '#c4ccda',
          3: '#95a3bd',
          4: '#63789e',
          5: '#345081',
          6: '#082965',
          7: '#072356',
          8: '#061d48',
          9: '#05173a',
          10: '#04122d',
        },
        black: {
          1: '#ffffff',
          2: '#fcfcfc',
          3: '#f5f5f5',
          4: '#f0f0f0',
          5: '#d9d9d9',
          6: '#bfbfbf',
          7: '#8c8c8c',
          8: '#595959',
          9: '#454545',
          10: '#262626',
          11: '#1f1f1f',
          12: '#141414',
          13: '#000000',
        },
      },
      fontFamily: {
        'darker-grotesque': ['Darker Grotesque', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        karla: ['Karla', 'sans-serif'],
      },
      fontSize: {
        0: '12px',
        1: '13px',
        2: '15px',
        3: '16px',
        4: '17px',
        5: '18px',
        6: '20px',
        7: '21px',
        8: '22px',
        9: '23px',
        10: '25px',
        11: '30px',
        12: '32px',
        13: '38px',
        14: '40px',
        15: '42px',
        16: '45px',
        17: '48px',
        18: '57px',
        19: '60px',
        20: '80px',
      },
      lineHeight: {
        0: 'auto',
        1: '50px',
        2: '55.1px',
        3: '18.3px',
        4: '27.9px',
        5: '23px',
      },
      fontWeight: {
        'darker-grotesque-0': '500', // Medium
        'darker-grotesque-1': '900', // Black
        'roboto-2': '400', // Regular
        'darker-grotesque-3': '800', // ExtraBold
        'darker-grotesque-4': '700', // Bold
        'karla-5': '400', // Regular
        'darker-grotesque-6': '400', // Regular
        'darker-grotesque-7': '600', // SemiBold
        'karla-8': '500', // Medium
        'karla-9': '300', // Light
        'karla-10': '700', // Bold
        'darker-grotesque-11': '600', // Semi Bold
      },
    },
  },
  plugins: [],
}
export default config
