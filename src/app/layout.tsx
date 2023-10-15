import "./globals.css";
import type { Metadata } from "next";
import {
	londrina_outline,
	exo,
	russo_one,
	edu_tas_beg,
} from "@/fonts/main.fonts";

export const metadata: Metadata = {
	title: "Cormparse",
	description: "Simple and easy to use issue tracker",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${londrina_outline.variable} ${exo.variable} ${russo_one.variable} ${edu_tas_beg.variable}`}>
			<body className=" tw-flex tw-flex-col tw-min-h-[100vh]">{children}</body>
		</html>
	);
}
