import NavbarProjectsPopupItem from "./popup.item";

const NavbarPopupRecentProject = () => {
	return (
		<div className=" tw-my-12">
			<p className=" tw-font-russo-one tw-text-[15px] tw-text-gray-800 dark:tw-text-gray-400">
				Recent
			</p>
			<ul className=" tw-list-none tw-mt-3">
				<li>
					<NavbarProjectsPopupItem
						name="Project Dragonfly"
						projectkey="PRDRA-1"
					/>
				</li>
				<li>
					<NavbarProjectsPopupItem
						name="Anaconda Retriever"
						projectkey="ANRE-2"
					/>
				</li>
				<li>
					<NavbarProjectsPopupItem
						name="Operation Navigator"
						projectkey="OPSNAV"
					/>
				</li>
				<li>
					<NavbarProjectsPopupItem
						name="Blister Burner"
						projectkey="BLIBUR-9"
					/>
				</li>
			</ul>
		</div>
	);
};

export default NavbarPopupRecentProject;
