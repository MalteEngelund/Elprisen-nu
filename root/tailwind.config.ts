import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        elDarkGrey: '#27282B',
        elBlack: '#201E1E',
        elGreen: '#55EC20',
        elWhite: '#EBEBEB',
      },
    },
  },
  plugins: [],
};

export default config;
