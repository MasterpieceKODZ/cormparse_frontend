"use client";
import IconPlus from "@/ui_components/icons/plus";
import { toggleNewIssuePopup } from "@/ui_controllers/workspace/issues/show.hide.add.new.issue.popup";

const BtnCreateNewIssue = () => {
	return (
		<button
			className=" tw-py-2 tw-px-6 tw-bg-secondary tw-text-white tw-text-[18px] tw-font-russo-one tw-rounded tw-text-center tw-block "
			onClick={toggleNewIssuePopup}>
			<span>
				<IconPlus stroke="tw-stroke-white" />
			</span>
			<span className=" tw-ms-4">Create Issue</span>
		</button>
	);
};

export default BtnCreateNewIssue;
