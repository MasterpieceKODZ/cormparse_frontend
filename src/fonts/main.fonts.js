import localFont from "next/font/local";

export const londrina_outline = localFont({
	src: "Londrina_Outline/LondrinaOutline-Regular.ttf",
	display: "swap",
	subsets: ["latin"],
	variable: "--font-londrina-outline",
});

export const exo = localFont({
	src: [
		{
			path: "Exo/Exo-VariableFont_wght.ttf",
			//weight: ["variable"],
			style: "normal",
		},
		{
			path: "Exo/Exo-Italic-VariableFont_wght.ttf",
			style: "italic",
		},
	],
	display: "swap",
	subsets: ["latin"],
	variable: "--font-exo",
});

export const russo_one = localFont({
	src: "Russo_One/RussoOne-Regular.ttf",
	display: "swap",
	subsets: ["latin"],
	variable: "--font-russo-one",
});

export const edu_tas_beg = localFont({
	src: "Edu_Tas_Beginner/EduTASBeginner-VariableFont_wght.ttf",
	display: "swap",
	subsets: ["latin"],
	variable: "--font-edu-tas-beginner",
});
