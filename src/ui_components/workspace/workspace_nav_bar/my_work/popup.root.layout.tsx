import InprogressIssuesNavList from "./inprogress.issues";
import PendingIssuesNavList from "./pending.issues";

const NavbarMyWorkPopupRootlayout = () => {
	return (
		<div
			id="nav_my_work_popup"
			className=" tw-w-[400px] tw-h-max tw-max-h-[500px] tw-overflow-y-auto tw-p-[13px] dark:tw-bg-gray-800 tw-bg-gray-100  tw-rounded-[10px] tw-absolute tw-z-50 tw-top-[140%] tw-right-0 popup tw-hidden nav_btn_my_work">
			<p className=" tw-w-full tw-h-max tw-my-4 tw-text-center tw-text-[18px] tw-text-gray-700 dark:tw-text-gray-400 tw-font-exo">
				Most Recent
			</p>
			<InprogressIssuesNavList />
			<PendingIssuesNavList />
		</div>
	);
};

export default NavbarMyWorkPopupRootlayout;
