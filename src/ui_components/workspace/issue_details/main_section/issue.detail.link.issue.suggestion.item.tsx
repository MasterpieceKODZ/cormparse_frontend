import { Dispatch, ReactNode, SetStateAction } from "react";
import { Issue, LinkedIssue } from "../../../../../@types/linked.issue.type";
import IconBug from "@/ui_components/icons/bug.icon";
import IconFeature from "@/ui_components/icons/feature.icon";
import IconImprovement from "@/ui_components/icons/improvement.icon";
import {
	closeNotification,
	showNotificationBar,
} from "@/ui_controllers/notification.bar";

const IssueDetailLinkIssueSuggestion = ({
	issue,
	setLinkedIssue,
	relation,
}: {
	issue: Issue;
	setLinkedIssue: Dispatch<SetStateAction<LinkedIssue | null>>;
	relation: "parent" | "child" | "";
}) => {
	return (
		<div
			className=" tw-w-full tw-h-max tw-cursor-pointer tw-flex tw-justify-start tw-items-center tw-my-4 tw-border-t tw-border-t-gray-200 dark:tw-border-t-gray-500"
			onClick={() => {
				closeNotification();
				if (relation == "parent" || relation == "child") {
					setLinkedIssue({ relation, issue });

					document
						.getElementById("iss_dtl_lnk_sug")
						?.classList.add("tw-hidden");
				} else {
					showNotificationBar("select a relationship first.", "error");
				}
			}}>
			<div>
				{((type: string): ReactNode => {
					switch (type) {
						case "bug":
							return <IconBug />;
						case "feature":
							return <IconFeature />;
						case "task":
							return <IconFeature />;
						case "improvement":
							return <IconImprovement />;
						default:
							return <></>;
					}
				})(issue.type)}
			</div>
			<div className=" tw-h-max tw-basis-full tw-shrink tw-grow-0 tw-text-mygrey-default dark:tw-text-gray-400 tw-ms-3">
				<p className=" tw-w-full tw-h-max tw-font-exo tw-text-[17px] tw-font-semibold tw-text-start">
					{issue.summary}
				</p>
				<p className=" tw-w-full tw-h-max tw-font-exo tw-text-[13px] tw-mt-2 tw-text-start">
					{issue.key}
				</p>
			</div>
		</div>
	);
};

export default IssueDetailLinkIssueSuggestion;
