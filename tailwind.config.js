/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#19052F",
					"blue-lyt": "#518CFF",
					"blue-v-lyt": "#D7ECFF",
				},
				secondary: {
					DEFAULT: "#A40707",
				},
				mygrey: {
					default: "#403F3F",
					lyt: "#6D6D6D",
					"v-lyt": "#CACACA",
				},
			},
			fontFamily: {
				"lond-out": ["var(--font-londrina-outline)"],
				exo: ["var(--font-exo)"],
				"russo-one": ["var(--font-russo-one)"],
				"edu-tas-beg": ["var(--font-edu-tas-beginner)"],
			},
			screens: {
				smst: "320px",
				xxsm: "410px",
				xsm: "550px",
			},
		},
	},
	plugins: [],
	prefix: "tw-",
	important: false,
};