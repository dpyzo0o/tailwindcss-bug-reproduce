module.exports = {
  purge: ['./pages/**/*.{js,jsx}'],
  theme: {
    extend: {},
    typography: {
      default: {
        css: {
          code: {
            '&::before': {
              content: '""',
            },
            '&::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
