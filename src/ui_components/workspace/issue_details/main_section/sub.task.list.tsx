import IssueDetailSubTaskItem from "./sub.task.list.item";

const IssueDetailsSubTaskList = () => {
	return (
		<div className=" tw-w-full tw-h-max tw-mt-12">
			<label className=" tw-text-start tw-text-[16px] tw-font-semibold tw-font-exo tw-text-gray-700 dark:tw-text-gray-400">
				Sub-Tasks
			</label>
			<div className=" tw-w-full tw-h-max tw-max-h-[350px] tw-overflow-y-auto tw-mt-5">
				<IssueDetailSubTaskItem
					key="SADE-09"
					summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, modi."
					priority="mid"
					status="in-progress"
				/>
				<IssueDetailSubTaskItem
					key="SADE-09"
					summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, modi."
					priority="highest"
					status="done"
				/>
			</div>
		</div>
	);
};

export default IssueDetailsSubTaskList;
