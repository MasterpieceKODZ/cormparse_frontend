import "./globals.css";
import type { Metadata } from "next";

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
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
