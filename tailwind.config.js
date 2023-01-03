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
        brandBright: '#00f5d4',
        brandBrightDarker: '#00ebcb',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}
