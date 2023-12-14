import AuthNavBar from "@/components/navbar";

export default function AuthRootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<AuthNavBar />
			<main className=" tw-basis-full tw-min-h-[85vh] tw-grow tw-flex tw-justify-center tw-bg-white dark:tw-bg-gray-900">
				{children}
			</main>
		</>
	);
}
