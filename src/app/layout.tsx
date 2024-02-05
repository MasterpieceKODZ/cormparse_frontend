import "./globals.css";
import "../styles/general.css";
import "../styles/password.css";
import "../styles/pre.reg.email.css";
import "cropperjs/dist/cropper.min.css";
import type { Metadata } from "next";
import {
	londrina_outline,
	exo,
	russo_one,
	edu_tas_beg,
} from "@/fonts/main.fonts";
import LoadTheme from "@/ui_components/load.theme";

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
			className={`${londrina_outline.variable} ${exo.variable} ${russo_one.variable} ${edu_tas_beg.variable} tw-text-gray-800 dark:tw-text-white`}>
			<body className=" tw-w-[100%] tw-max-w-[100%] tw-flex tw-flex-col tw-h-[100vh] tw-overflow-y-auto tw-bg-white dark:tw-bg-gray-900 tw-relative">
				<LoadTheme />
				{children}
			</body>
		</html>
	);
}
