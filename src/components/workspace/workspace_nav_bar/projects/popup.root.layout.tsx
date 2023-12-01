import NavbarPopupRecentProject from "./recent.projects";

const NavbarProjectsPopupRootLayout = () => {
	return (
		<div
			id="nav_projects_popup"
			className=" tw-w-[400px] tw-h-max tw-max-h-[500px] tw-overflow-y-auto tw-p-[13px] dark:tw-bg-gray-800 tw-bg-gray-100  tw-rounded-[10px] tw-absolute tw-top-[140%] tw-right-0 tw-hidden popup nav_btn_projects">
			<NavbarPopupRecentProject />
			<div className="tw-border-t-2 tw-border-t-gray-500 dark:tw-border-t-gray-600">
				<p className=" tw-font-russo-one tw-text-[15px] tw-text-gray-800 dark:tw-text-gray-400 tw-my-5 tw-ps-4 hover:tw-text-blue-700 dark:hover:tw-text-blue-700">
					View All My Projects
				</p>
				<p className=" tw-font-russo-one tw-text-[15px] tw-text-gray-800 dark:tw-text-gray-400 tw-mt-7 tw-mb-5 tw-ps-4 hover:tw-text-blue-700 dark:hover:tw-text-blue-700">
					Create New Project
				</p>
				N
			</div>
		</div>
	);
};

export default NavbarProjectsPopupRootLayout;
