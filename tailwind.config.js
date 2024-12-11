module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  darkMode: 'media',
  content: [`_site/**/*.html`],
  theme: {
    extend: {
      colors: {
        brandBright: 'var(--brand-bright)',
        brandBrightDarker: '#02ddc0',
        brandBrightDarkerDarkMode: '#01c6ac',
      },
      fontFamily: {
        serif: ['Libre Baskerville', 'serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}
