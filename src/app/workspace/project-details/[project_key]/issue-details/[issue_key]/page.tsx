import IssueDetailsMainSectionRoot from "@/ui_components/workspace/issue_details/main_section/main.section.root";
import IssueDetailsSubSectionRoot from "@/ui_components/workspace/issue_details/sub_section/sub.section.root";

const IssueView = () => {
	return (
		<section className=" tw-w-full tw-h-full tw-max-h-[92vh] tw-overflow-y-auto tw-grid tw-grid-rows-[auto_auto] lg:tw-grid-cols-[1fr_auto]">
			<IssueDetailsMainSectionRoot />
			<IssueDetailsSubSectionRoot />
		</section>
	);
};

export default IssueView;
export const dynamic = "force-dynamic";
