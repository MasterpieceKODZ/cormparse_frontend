import {
	Londrina_Outline,
	Exo,
	Russo_One,
	Edu_TAS_Beginner,
} from "next/font/google";

export const londrina_outline = Londrina_Outline({
	display: "swap",
	subsets: ["latin"],
	weight: "400",
	variable: "--font-londrina-outline",
});

export const exo = Exo({
	weight: "variable",
	style: ["italic", "normal"],
	display: "swap",
	subsets: ["latin"],
	variable: "--font-exo",
});

export const russo_one = Russo_One({
	weight: "400",
	display: "swap",
	subsets: ["latin"],
	variable: "--font-russo-one",
});

export const edu_tas_beg = Edu_TAS_Beginner({
	weight: "variable",
	style: ["normal"],
	display: "swap",
	subsets: ["latin"],
	variable: "--font-edu-tas-beginner",
});
