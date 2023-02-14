module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      colors: {
        'nuxt-green': '#00c58e',
        'tailwind-blue': '#1bb2ba',
        'storybook-pink': '#ff4785'
      }
    },
  },
  variants: {},
  plugins: [],
};
