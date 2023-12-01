import "../../styles/workspace.css";
import WorkSpaceHeader from "@/components/workspace/header";
import WorkspaceSideNav from "../../components/workspace/sidenav/root.section";

export default function AuthRootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<WorkSpaceHeader />
			<main className="tw-basis-full tw-grow tw-max-h-full tw-flex tw-justify-center tw-items-center tw-overflow-x-hidden tw-bg-white dark:tw-bg-gray-900 tw-relative">
				{children}
				<WorkspaceSideNav />
			</main>
		</>
	);
}
