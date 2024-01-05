"use client";
import IssueDetailActionButtons from "./action.btns";
import IssueDetailActivityRoot from "./activity.segment";
import IssueDetailsAttachmentList from "./atachment.list";
import IssueDetailDescription from "./description.layout";
import IssueDetailsSubTaskList from "./sub.task.list";
import IssueDetailSummary from "./summary";

const IssueDetailsMainSectionRoot = () => {
	return (
		<div className=" tw-w-full lg:tw-w-[60vw] tw-h-max tw-min-h-max lg:tw-h-full tw-overflow-y-auto tw-py-5 tw-ps-[30px] tw-pe-3">
			{/* summary */}
			<IssueDetailSummary />
			<IssueDetailActionButtons />
			<IssueDetailDescription />
			<IssueDetailsAttachmentList />
			<IssueDetailsSubTaskList />
			<IssueDetailActivityRoot />
		</div>
	);
};

export default IssueDetailsMainSectionRoot;
