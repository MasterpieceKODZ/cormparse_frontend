"use client";
import { toggleWorkspaceNavPopup } from "@/ui_controllers/workspace/navbar/toggle.nav.popup";
import NavbarProjectsPopupRootLayout from "./popup.root.layout";

const NavProjectsBtn = () => {
	return (
		<div className="tw-px-4 tw-py-2 tw-w-max tw-h-min tw-relative">
			<button
				id="nav_btn_projects"
				className=" tw-px-4 tw-bg-transparent tw-font-russo-one tw-text-gray-700 dark:tw-text-gray-400 tw-inline-block"
				onClick={toggleWorkspaceNavPopup}>
				Projects{" "}
			</button>
			<NavbarProjectsPopupRootLayout />
		</div>
	);
};

export default NavProjectsBtn;
