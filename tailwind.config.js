module.exports = {
  purge: [],
  theme: {
		colors: {
			white: "#fff",
			black: "#000",
			orange: "#FF8C62",
			blue: {
				light: "#008CF3",
				dark: "#162869"
			},
		},
		screens: {
			'sm': {'min': '414px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1366px'},
      'xl': {'min': '1440px'},
		},
    extend: {},
  },
	variants: {
		textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
	},
  plugins: [],
}
