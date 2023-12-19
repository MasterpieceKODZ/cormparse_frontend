const ListItemProfileViewProjects = ({
	creator,
	projectName,
	dateUpdated,
	topBorder,
}: {
	creator: string;
	projectName: string;
	dateUpdated: String;
	topBorder: boolean;
}) => {
	return (
		<div
			className={` tw-py-5 tw-w-full ${
				topBorder
					? " tw-border-t-[1px] tw-border-t-gray-500 dark:tw-border-t-gray-700"
					: ""
			}`}>
			<p className=" tw-text-[16px] tw-font-exo tw-text-gray-800 dark:tw-text-gray-400 tw-truncate">
				{projectName}
			</p>
			<p className="tw-text-[12px] tw-font-exo tw-text-gray-600 dark:tw-text-gray-500 tw-mt-2 tw-truncate">
				Created By - <span className=" tw-mr-2">{creator}</span>.
				<span className=" tw-ms-2">
					{" ON - "}
					{dateUpdated}
				</span>
			</p>
		</div>
	);
};

export default ListItemProfileViewProjects;
