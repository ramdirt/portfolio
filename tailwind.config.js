/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	separator: "__",
	theme: {
		extend: {
			fontFamily: {
				sans: "mono",
			},
			screens: {
				'print': { 'raw': 'print' },
			}
		},
		container: {
			center: true,
		},
	},
	plugins: [],
};
