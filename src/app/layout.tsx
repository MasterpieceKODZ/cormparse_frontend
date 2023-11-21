import "./globals.css";
import "../styles/general.css";
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
			<body className=" tw-flex tw-flex-col tw-h-[100vh] tw-overflow-y-auto tw-relative">
				{children}
			</body>
		</html>
	);
}
