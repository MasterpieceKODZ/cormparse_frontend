import AuthNavBar from "@/components/navbar";

export default function AuthRootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
    return (
			<>
				{" "}
				<AuthNavBar />
				{children}
			</>
		);
}
