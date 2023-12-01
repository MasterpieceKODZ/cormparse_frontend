"use client";
import { toggleWorkspaceNavPopup } from "@/ui_controllers/workspace/navbar/toggle.nav.popup";
import NavbarMyWorkPopupRootlayout from "./popup.root.layout";

const NavMyWorkBtn = () => {
	return (
		<div className="tw-px-4 tw-py-2 tw-w-max tw-h-min tw-relative">
			<button
				id="nav_btn_my_work"
				className=" tw-bg-transparent tw-font-russo-one tw-text-gray-700 dark:tw-text-gray-400 tw-inline-block"
				onClick={toggleWorkspaceNavPopup}>
				My Work{" "}
			</button>
			<NavbarMyWorkPopupRootlayout />
		</div>
	);
};

export default NavMyWorkBtn;
