module.exports = {
  //darkMode: 'media', // or 'class'
  darkMode: 'class',
  purge: {
    enabled: true,
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    typography: (theme) => ({}),
    // Ensure these match with .storybook/preview.js
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    fontFamily: {
      sans: ['Arial', 'sans-serif'],
      serif: ['Garamond', 'serif'],
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      primary: '#50861D',
      secondary: '#6EB828',
      info: '#0C63E7',
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: {
        50: '#FAFAFC',
        100: '#E9E9EC',
        200: '#C6C8CD',
        300: '#ACAEB6',
        400: '#92959F',
        500: '#777C87',
        600: '#5D6370',
        700: '#434959',
        800: '#293041',
        900: '#0f172a',
      },
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    }),
    extend: {
      colors: {
        blue: {
          500: '#1a73e8',
        },
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
