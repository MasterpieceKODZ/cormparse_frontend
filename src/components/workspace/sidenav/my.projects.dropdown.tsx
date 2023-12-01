"use client";
import DownArrowIcon from "@/components/icons/down.arrow";
import { openCloseDropDown } from "@/ui_controllers/workspace/sidenav/show.hide.drop.down";
import NavbarPopupRecentProject from "../workspace_nav_bar/projects/recent.projects";

const SideNavProjectsDropDown = () => {
	return (
		<div className=" tw-overflow-y-hidden tw-mt-5">
			<button
				id="nav_drp_dwn_btn_projects"
				onClick={openCloseDropDown}
				className=" tw-w-max tw-bg-transparent tw-font-russo-one tw-text-gray-700 dark:tw-text-gray-400 tw-flex tw-items-center">
				<span className=" tw-mr-3">My Projects</span>
				<span className="nav_drp_dwn_btn_projects_icon">
					<DownArrowIcon />
				</span>
			</button>
			<div className=" tw-flex tw-max-w-full">
				<div
					id="nav_drp_dwn_layout"
					className=" tw-pl-4 tw-overflow-y-hidden nav_drp_dwn_btn_projects">
					<NavbarPopupRecentProject />
				</div>
			</div>
		</div>
	);
};

export default SideNavProjectsDropDown;
