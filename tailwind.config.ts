import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "background-opacity-7": "rgba(36, 43, 124, 0.7)",
        "background-opacity-8": "rgba(36, 43, 124, 0.8)",
        "background-opacity-9": "rgba(36, 43, 124, 0.9)",
        'background':"#2B3499",
        'background-lighter-1':"#353FB1",
        'background-lighter-2':"#4A54CB",
        'background-lighter-3':"#6570ED",
        'background-darker-1':"#242B7C",
        'background-darker-2':"#1D2371",

        'primary':"#FF6C22",
        'primary-lighter-1':"#FF8548",
        'primary-lighter-2':"#FF9B68",
        'primary-lighter-3':"#FFBB99",
        'primary-darker-1':"#D25618",
        'primary-darker-2':"#AE4714",
        
        'seccondary':"#FF9209",
        'seccondary-lighter-1':"#FFA535",
        'seccondary-lighter-2':"#FFB150",
        'seccondary-lighter-3':"#FFBD6A",
        'seccondary-darker-1':"#D47A09",
        'seccondary-darker-2':"#B96A07",
        
        'accent':'#FFD099',
        'accent-lighter-1':"#FFDEB8",
        'accent-lighter-2':"#FFEBD5",
        'accent-lighter-3':"#FFF8F0",
        'accent-darker-1':"#DCB07C",
        'accent-darker-2':"#A98254",

        "white-opacity-7": "rgba(255, 255, 255, 0.7)",
        "white-opacity-8": "rgba(255, 255, 255, 0.8)",
        "white-opacity-9": "rgba(255, 255, 255, 0.9)",

      },
      height:{
        '1/12':'8.333333%',
        '5/12':'41.666667%',
        '7/12':'58.333333%',
        '10/12': '83.333333%',
        '11/12':'91.666667%',
        'double':'200%',
        'triple':"300%",
      },
      minHeight: {
        '8': '2rem',
        '11': '2.75rem',
        '12': '3rem',
        '14': '3.75rem',
        '16': '4rem',
        '1/3': 'calc(100% /3)',
      },
      width:{
        '1/12':'8.333333%',
        '10/12': '83.333333%',
        'double':'200%',
      },
      rotate:{
        "l-90":"-90deg",
      },
      brightness: {
        '40':'.4',
        '25': '.25',
        '175': '1.75',
      },
      translate: {
        'up-full': '-100%',
        'up-1/2': '-50%',
        'up-1/3': 'calc(-100% / 3)',
        'up-2/3': 'calc(2 * calc(-100% / 3))',
        'left-full': '-100%',
        'left-1/2': '-50%',
      },
      boxShadow: {
        '5xl': '0 0 10px rgba(0, 0, 0, 0.548)',
        'inner-xl': 'inset 0px 4px 6.7px 0px rgba(255, 255, 255, 0.50)',
      },      
      zIndex: {
        '1000': '1000',
      },
      borderRadius: {
        '4xl':"4.5rem"
      },
      strokeWidth: {
        '100': '100px',
      },
      spacing:{
        '68':'17rem',
      }
    },
  },
  plugins: [],
}
export default config
