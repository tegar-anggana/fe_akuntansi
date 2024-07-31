const { default: daisyui } = require('daisyui');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx,ejs}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  daisyui: {
    themes: [
      // 'light',
      {
        mytheme: {
          primary: '#ff00ff', // Primary color
          'primary-content': '#160016', // Foreground content color to use on primary color
          secondary: '#ff00ff', // Secondary color
          'secondary-content': '#160016', // Foreground content color to use on secondary color
          accent: '#00ffff', // Accent color
          'accent-content': '#001616', // Foreground content color to use on accent color
          neutral: '#ff00ff', // Neutral color
          'neutral-content': '#160016', // Foreground content color to use on neutral color
          'base-100': '#ffffff', // Base color of page, used for blank backgrounds
          'base-200': '#dedede', // Base color, a little darker
          'base-300': '#bebebe', // Base color, even more darker
          'base-content': '#161616', // Foreground content color to use on base color
          info: '#0000ff', // Info color
          'info-content': '#c6dbff', // Foreground content color to use on info color
          success: '#00ff00', // Success color
          'success-content': '#001600', // Foreground content color to use on success color
          warning: '#00ff00', // Warning color
          'warning-content': '#001600', // Foreground content color to use on warning color
          error: '#ff0000', // Error color
          'error-content': '#160000', // Foreground content color to use on error color
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
