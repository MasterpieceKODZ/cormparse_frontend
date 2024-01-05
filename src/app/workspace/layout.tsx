import "../../styles/workspace.css";
import WorkSpaceHeader from "@/ui_components/workspace/header";
import WorkspaceSideNav from "../../ui_components/workspace/sidenav/root.section";

export default function AuthRootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<WorkSpaceHeader />
			<main className="tw-basis-full tw-w-[100vw] tw-shrink tw-grow-0 tw-max-h-[92vh] tw-overflow-x-hidden tw-relative">
				{children}
				<WorkspaceSideNav />
			</main>
		</>
	);
}
