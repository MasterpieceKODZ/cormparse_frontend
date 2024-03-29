/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#02055A",
					"blue-lyt": "#518CFF",
					"blue-v-lyt": "#D7ECFF",
				},
				secondary: {
					DEFAULT: "#A40707",
				},
				mygrey: {
					default: "#403F3F",
					lyt: "#575757",
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
				smmd: "700px",
				lwmd: "830px",
			},
			keyframes: {
				shimmer: {
					"0%,100%": { "background-color": "rgb(243, 244, 246)" },
					"50%": {
						"background-color": "rgb(229, 231, 235)",
					},
				},
				darkshimmer: {
					"0%,100%": { "background-color": "rgb(75, 85, 99)" },
					"50%": {
						"background-color": "rgb(55, 65, 81)",
					},
				},
			},
		},
	},
	plugins: [],
	prefix: "tw-",
	important: false,
};
