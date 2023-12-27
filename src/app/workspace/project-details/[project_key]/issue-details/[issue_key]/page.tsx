import IssueDetailsMainSectionRoot from "@/ui_components/workspace/issue_details/main_section/main.section.root";
import IssueDetailsSubSectionRoot from "@/ui_components/workspace/issue_details/sub_section/sub.section.root";

const IssueView = () => {
	return (
		<section className=" tw-w-[80vw] tw-h-full tw-overflow-hidden tw-flex tw-justify-start tw-items-start tw-flex-wrap-reverse">
			<IssueDetailsMainSectionRoot />
			<IssueDetailsSubSectionRoot />
		</section>
	);
};

export default IssueView;
