const theme = require('./src/config/Ant Design Theme.json')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      primary: theme.token.colorPrimary,
      success: theme.token.colorSuccess,
      error: theme.token.colorError,
      warning: theme.token.colorWarning,
      white: '#fff',
      gray: {
        bg: theme.token.colorBgLayout,
        border: theme.token.colorBorder
      },
      color: {
        DEFAULT: theme.token.colorText,
        secondary: theme.token.colorTextSecondary,
        tertiary: theme.token.colorTextTertiary
      }
    },
    extend: {},
  },
  plugins: [],
}
