import SideNavHeader from "./header";
import DropdownSideNavProjects from "./dropdown.my.projects";
import DropdownSideNavMyWork from "./dropdown.my.work";
import SideNavSelectTheme from "./select.theme";
import LoadTheme from "@/components/load.theme";

const WorkspaceSideNav = () => {
	return (
		<section
			id="side_nav"
			className=" tw-w-[95%] tw-h-[95%] tw-bg-gray-100 tw-shadow-[0_35px_60px_5px_rgba(100,100,100,1)] dark:tw-shadow-[0_35px_60px_5px_rgba(50,50,50,1)] dark:tw-bg-gray-800 tw-rounded-[15px] tw-z-10 tw-absolute tw-top-[3%] tw-left-[2%] tw-hidden smmd:tw-hidden tw-overflow-hidden tw-flex-col tw-justify-start tw-items-start">
			<LoadTheme />
			<SideNavHeader />
			<div
				id="nav_items"
				className=" tw-p-6 tw-mt-7  tw-h-full tw-w-full tw-overflow-y-auto tw-basis-full tw-shrink">
				<div className="tw-max-w-[400px] tw-overflow-hidden">
					<DropdownSideNavMyWork />
					<DropdownSideNavProjects />

					<p className=" tw-font-russo-one tw-text-gray-800 dark:tw-text-gray-400 tw-mt-5">
						View All My Projects
					</p>
					<p className=" tw-font-russo-one tw-text-gray-800 dark:tw-text-gray-400 tw-mt-5">
						Create New Project
					</p>
					<p className=" tw-font-russo-one tw-text-gray-800 dark:tw-text-gray-400 tw-mt-5">
						My Profile
					</p>
					<SideNavSelectTheme />
				</div>
			</div>
		</section>
	);
};

export default WorkspaceSideNav;
