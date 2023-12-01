const NavbarProjectsPopupItem = ({
	name,
	projectkey,
}: {
	name: string;
	projectkey: string;
}) => {
	return (
		<div className=" tw-w-full tw-max-w-full tw-my-4 tw-ps-6">
			<p className="tw-text-gray-800 dark:tw-text-gray-400 tw-w-full tw-truncate">
				{name}
			</p>
			<p className=" tw-mt-1 tw-font-exo tw-text-gray-600 dark:tw-text-gray-500 tw-text-[10px]">
				<span className=" tw-mr-3">{projectkey}</span>
			</p>
		</div>
	);
};

export default NavbarProjectsPopupItem;
