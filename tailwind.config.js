module.exports = {
	content: ['./views/**/*.{ejs, html, js}'],
	theme: {
		extend: {
			colors: {
				greenplant: '#996d4e',
			},
			fontFamily: {
				title: ['Patua One', 'cursive'],
				body: ['Open Sans', 'sans-serif'],
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
