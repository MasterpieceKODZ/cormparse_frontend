"use client";
import DownArrowIcon from "@/components/icons/down.arrow";
import PendingIssuesNavList from "../workspace_nav_bar/my_work/pending.issues";
import InprogressIssuesNavList from "../workspace_nav_bar/my_work/inprogress.issues";
import { openCloseDropDown } from "@/ui_controllers/workspace/sidenav/show.hide.drop.down";

const SideNavMyWorkDropDown = () => {
	return (
		<div className=" tw-overflow-y-hidden">
			<button
				id="nav_drp_dwn_btn_my_work"
				onClick={openCloseDropDown}
				className=" tw-w-max tw-bg-transparent tw-font-russo-one tw-text-gray-700 dark:tw-text-gray-400  tw-flex tw-items-center">
				<span className=" tw-mr-3">My Work</span>
				<span className="nav_drp_dwn_btn_my_work_icon">
					<DownArrowIcon />
				</span>
			</button>
			<div className=" tw-flex tw-max-w-full">
				<div
					id="nav_drp_dwn_layout"
					className=" tw-pl-4 tw-overflow-y-hidden nav_drp_dwn_btn_my_work">
					<PendingIssuesNavList />
					<InprogressIssuesNavList />
				</div>
			</div>
		</div>
	);
};

export default SideNavMyWorkDropDown;