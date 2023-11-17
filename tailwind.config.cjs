/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
    './docs/.vitepress/**/*.{js,ts,vue}',
    './docs/**/*.{md,vue}',
  ],
  darkMode: 'class',
  important: true,
  theme: {
    fontWeight: {
      light: 300,
      normal: 400,
      bold: 700,
    },
    fontFamily: {
      sans: ['Circe', 'sans-serif'],
    },
    extend: {
      colors: {
        foxford: {
          gray: {
            0: '#FFFFFF',
            5: '#F5F6F9',
            10: '#DADCE7',
            20: '#A2A4AC',
            40: '#707277',
            80: '#24262C',
            100: '#000000',
          },
          green: {
            40: '#7ED136',
            50: '#4DA700',
            60: '#356E00',
          },
          red: {
            40: '#FFA593',
            50: '#E71300',
            60: '#C20C00',
          },
          orange: {
            5: '#FFF2DF',
            10: '#FFE6BF',
            20: '#FFD597',
            30: '#FFBC57',
            40: '#FFAA2A',
            50: '#FF9900',
            60: '#FD8415',
          },
          purple: {
            5: '#F8F3FF',
            10: '#ECE1FF',
            20: '#E0D1FB',
            30: '#B995FA',
            40: '#8950E6',
            50: '#7A1AE3',
            60: '#6600C3',
          },
          jeans: {
            10: '#DCF3F8',
            20: '#BDDCEA',
            30: '#A0C5D5',
          },
          yellow: {
            10: '#FEFFC1',
            20: '#FEFF99',
            30: '#F4F484',
          },
        },
      },
      fontFamily: {
        foxford: ['foxford'],
      },
      maxHeight: {
        screen: '100dvh',
      },
      height: {
        screen: '100dvh',
      },
      minHeight: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
}
