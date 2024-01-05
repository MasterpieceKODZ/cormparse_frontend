"use client";

import {
	clickSelectAttachmentFileInput,
	finishAttachmentSelection,
	onChangeIssueDetailAttachmentFileInput,
} from "@/ui_controllers/workspace/issue_details/select.attachment.file";
import { ReactNode, useState } from "react";
import { LinkedIssue } from "../../../../../@types/linked.issue.type";
import IssueDetailLinkIssueSuggestion from "./issue.detail.link.issue.suggestion.item";
import { issueDetailSetLinkIssueRelation } from "@/ui_controllers/workspace/issue_details/set.link.issue.relation";
import IconBug from "@/ui_components/icons/bug.icon";
import IconFeature from "@/ui_components/icons/feature.icon";
import IconImprovement from "@/ui_components/icons/improvement.icon";
import { issueDetailsShowLinkIssueSuggestion } from "@/ui_controllers/workspace/issue_details/show.link.issue.suggestion";
import { issueDetailsToggleLinkIssuePopup } from "@/ui_controllers/workspace/issue_details/toggle.link.issue.popup";
import { toggleIssueDetailSelectAttachmentFile } from "@/ui_controllers/workspace/issue_details/toggle.attach.input";
import DoubleRingSpinner from "@/ui_components/icons/double.ring.spinner";
import { issueDetailCompleteLinkIssue } from "@/ui_controllers/workspace/issue_details/complete.link.issue";
import { issueDetailsToggleCreateSubtaskPopup } from "@/ui_controllers/workspace/issue_details/toggle.create.subtask.popup";

const IssueDetailActionButtons = () => {
	const [attachFile, setAttachFile] = useState<any>(null);
	const [linkedIssue, setLinkedIssue] = useState<LinkedIssue | null>(null);
	const [relation, setRelation] = useState<"parent" | "child" | "">("");
	return (
		<div className=" tw-flex tw-justify-start tw-items-center tw-mt-8 tw-px-4">
			{/* attach file*/}
			<div className=" tw-w-max tw-h-max tw-relative">
				<button
					className=" tw-w-max tw-h-max tw-px-7 tw-py-1 tw-bg-gray-200 dark:tw-bg-gray-700 tw-rounded  tw-text-gray-700 dark:tw-text-gray-300 tw-font-exo tw-text-[17px]"
					onClick={toggleIssueDetailSelectAttachmentFile}>
					attach file
				</button>
				<div
					id="iss_dtl_attach_popup"
					className=" tw-w-[20vw] tw-min-w-[350px] tw-h-max tw-absolute tw-z-40 tw-top-[105%] tw-left-0 tw-border tw-border-stone-300 dark:tw-border-stone-700 tw-bg-stone-100 dark:tw-bg-gray-800 tw-px-4 tw-py-5 tw-rounded-sm tw-hidden popup">
					<input
						type="file"
						id="iss_dtl_file_inp"
						onChange={(e) =>
							onChangeIssueDetailAttachmentFileInput(e, setAttachFile)
						}
						className=" tw-w-0 tw-h-0 tw-invisible"
					/>
					<button
						className=" tw-w-max tw-h-max tw-px-5 tw-py-1 tw-rounded-lg tw-font-exo tw-text-[18px] tw-text-gray-700 dark:tw-text-gray-400 tw-bg-gray-200 dark:tw-bg-gray-700"
						onClick={clickSelectAttachmentFileInput}>
						select file
					</button>
					<p
						id="iss_dtl_attach_file_prv"
						className=" tw-mt-4 tw-text-gray-700 dark:tw-text-gray-400">
						friends.man.cousin.night.might.ts
					</p>
					<div className=" tw-w-full tw-h-max tw-mt-5 tw-flex tw-justify-end tw-items-center">
						<button
							className="tw-w-max tw-h-max tw-px-7 tw-py-1 tw-bg-blue-800 tw-text-white tw-text-[16px] tw-font-exo tw-font-semibold tw-rounded-lg"
							onClick={() => finishAttachmentSelection(attachFile)}>
							confirm
						</button>
					</div>
				</div>
			</div>
			{/* link issue */}
			<div className=" tw-w-max tw-h-max tw-ms-4 tw-relative">
				<button
					className=" tw-w-max tw-h-max tw-px-7 tw-py-1 tw-bg-gray-200 dark:tw-bg-gray-700 tw-rounded  tw-text-gray-700 dark:tw-text-gray-300 tw-font-exo tw-text-[17px]"
					onClick={issueDetailsToggleLinkIssuePopup}>
					link issue
				</button>
				<div
					id="iss_dtl_lnk_iss_popup"
					className=" tw-w-[30vw] tw-min-w-[400px] tw-h-max tw-absolute tw-z-40 tw-top-[105%] tw-left-0 tw-border tw-border-stone-300 dark:tw-border-stone-700 tw-bg-stone-100 dark:tw-bg-gray-800 tw-px-4 tw-py-5 tw-rounded-sm tw-hidden popup">
					<label className=" tw-mt-3 tw-text-[15px] tw-font-exo tw-text-gray-700 dark:tw-text-gray-400 tw-text-start">
						relationship
					</label>
					<fieldset className=" tw-mt-3">
						<label className=" tw-text-blue-700  tw-font-exo tw-font-semibold">
							<input
								type="radio"
								name="link_type"
								value="parent"
								id=""
								onChange={(e) =>
									issueDetailSetLinkIssueRelation(setRelation, e)
								}
							/>
							{"  "}
							Parent
						</label>
						<label className=" tw-text-blue-700 tw-ms-8 tw-font-exo tw-font-semibold">
							<input
								type="radio"
								name="link_type"
								value="child"
								id=""
								onChange={(e) =>
									issueDetailSetLinkIssueRelation(setRelation, e)
								}
							/>
							{"  "}
							Child
						</label>
					</fieldset>
					<input
						type="text"
						placeholder="enter issue key"
						id="iss_dtl_lnk_iss_inp"
						className="tw-block tw-font-exo tw-text-mygrey-default dark:tw-text-gray-400 tw-w-full tw-h-[45px] tw-border-[1px] tw-rounded tw-border-mygrey-v-lyt dark:tw-border-gray-500 tw-px-2 tw-mt-5 tw-text-xl dark:tw-bg-gray-800 focus:tw-outline focus:tw-outline-blue-300 focus:tw-outline-1"
						onChange={issueDetailsShowLinkIssueSuggestion}
					/>
					{/* issue suggestion container */}
					<div
						id="iss_dtl_lnk_sug"
						className=" tw-w-full tw-h-max tw-max-h-[400px] tw-py-3 tw-px-2 tw-overflow-auto tw-hidden">
						{/* issue suggestion item */}
						<IssueDetailLinkIssueSuggestion
							relation={relation}
							issue={{
								type: "feature",
								summary:
									"take me away to nowhere beneath the sea and above the mountains into the clouds and straight to heaven",
								key: "SDHJ-98",
							}}
							setLinkedIssue={setLinkedIssue}
						/>
						{/* issue suggestion item */}
						<IssueDetailLinkIssueSuggestion
							relation={relation}
							issue={{
								type: "feature",
								summary:
									"take me away to nowhere beneath the sea and above the",
								key: "SDHJ-98",
							}}
							setLinkedIssue={setLinkedIssue}
						/>{" "}
						{/* issue suggestion item */}
						<IssueDetailLinkIssueSuggestion
							relation={relation}
							issue={{
								type: "feature",
								summary:
									"takee sea and above the mountains into the clouds and straight to heaven",
								key: "SDHJ-98",
							}}
							setLinkedIssue={setLinkedIssue}
						/>
						{/* issue suggestion item */}
						<IssueDetailLinkIssueSuggestion
							relation={relation}
							issue={{
								type: "feature",
								summary:
									"take me away to nowhere beneath the sea and above the mountains into the clouds and straight to heaven",
								key: "SDHJ-98",
							}}
							setLinkedIssue={setLinkedIssue}
						/>{" "}
						{/* issue suggestion item */}
						<IssueDetailLinkIssueSuggestion
							relation={relation}
							issue={{
								type: "feature",
								summary:
									"take me away to nowhere beneath the sea and above the mountains into the clouds and straight to heaven",
								key: "SDHJ-98",
							}}
							setLinkedIssue={setLinkedIssue}
						/>{" "}
						{/* issue suggestion item */}
						<IssueDetailLinkIssueSuggestion
							relation={relation}
							issue={{
								type: "feature",
								summary:
									"take me away to nowhere beneath the sea and above the mountains into the clouds and straight to heaven",
								key: "SDHJ-98",
							}}
							setLinkedIssue={setLinkedIssue}
						/>{" "}
						{/* issue suggestion item */}
						<IssueDetailLinkIssueSuggestion
							relation={relation}
							issue={{
								type: "feature",
								summary:
									"take me away to nowhere beneath the sea and above the mountains into the clouds and straight to heaven",
								key: "SDHJ-98",
							}}
							setLinkedIssue={setLinkedIssue}
						/>
						{/* issue suggestion item */}
						<IssueDetailLinkIssueSuggestion
							relation={relation}
							issue={{
								type: "feature",
								summary:
									"takee sea and above the mountains into the clouds and straight to heaven",
								key: "SDHJ-98",
							}}
							setLinkedIssue={setLinkedIssue}
						/>
						{/* issue suggestion item */}
						<IssueDetailLinkIssueSuggestion
							relation={relation}
							issue={{
								type: "feature",
								summary:
									"takee sea and above the mountains into the clouds and straight to heaven",
								key: "SDHJ-98",
							}}
							setLinkedIssue={setLinkedIssue}
						/>
						{/* issue suggestion item */}
						<IssueDetailLinkIssueSuggestion
							relation={relation}
							issue={{
								type: "feature",
								summary:
									"takee sea and above the mountains into the clouds and straight to heaven",
								key: "SDHJ-98",
							}}
							setLinkedIssue={setLinkedIssue}
						/>
						{/* issue suggestion item */}
						<IssueDetailLinkIssueSuggestion
							relation={relation}
							issue={{
								type: "feature",
								summary:
									"takee sea and above the mountains into the clouds and straight to heaven",
								key: "SDHJ-98",
							}}
							setLinkedIssue={setLinkedIssue}
						/>
						{/* issue suggestion item */}
						<IssueDetailLinkIssueSuggestion
							relation={relation}
							issue={{
								type: "feature",
								summary:
									"takee sea and above the mountains into the clouds and straight to heaven",
								key: "SDHJ-98",
							}}
							setLinkedIssue={setLinkedIssue}
						/>
					</div>
					{/* selected issue preview container */}
					{linkedIssue ? (
						<div className=" tw-w-full tw-h-max tw-flex tw-cursor-pointer tw-justify-start tw-items-center tw-flex-nowrap tw-m-4">
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
								})(linkedIssue?.issue.type as string)}
							</div>
							<div className=" tw-h-max tw-basis-full tw-shrink tw-grow-0 tw-text-mygrey-default dark:tw-text-gray-400 tw-ms-3">
								<p className=" tw-w-full tw-h-max tw-font-exo tw-text-[17px] tw-font-semibold tw-text-start">
									{linkedIssue?.issue.summary}
								</p>
								<p className=" tw-w-full tw-h-max tw-font-exo tw-text-[13px] tw-mt-2 tw-text-start">
									{linkedIssue?.issue.key}
								</p>
							</div>
						</div>
					) : (
						<></>
					)}

					<div className=" tw-w-full tw-h-max tw-mt-5 tw-px-4 tw-flex tw-justify-between tw-items-center">
						<button
							className="tw-w-max tw-h-max tw-px-7 tw-py-1 tw-bg-red-700 tw-text-white tw-text-[16px] tw-font-exo tw-font-semibold tw-rounded-lg tw-shadow"
							onClick={issueDetailsToggleLinkIssuePopup}>
							cancel
						</button>
						<button
							className="tw-w-max tw-h-max tw-px-7 tw-py-1 tw-bg-blue-800 tw-text-white tw-text-[16px] tw-font-exo tw-font-semibold tw-rounded-lg tw-shadow"
							onClick={issueDetailCompleteLinkIssue}>
							confirm
						</button>
					</div>
					<div
						id="dbl_spin"
						className=" tw-w-full tw-h-full tw-opacity-60 tw-absolute tw-z-50 tw-top-0 tw-right-0 tw-bg-white dark:tw-bg-gray-500 tw-justify-center tw-items-center tw-hidden">
						<DoubleRingSpinner />
					</div>
				</div>
			</div>
			{/* create sub-task */}
			<div className=" tw-w-max tw-h-max tw-ms-4 tw-relative">
				<button
					className=" tw-w-max tw-h-max tw-px-7 tw-py-1 tw-bg-gray-200 dark:tw-bg-gray-700 tw-rounded  tw-text-gray-700 dark:tw-text-gray-300 tw-font-exo tw-text-[17px]"
					onClick={issueDetailsToggleCreateSubtaskPopup}>
					create sub-task
				</button>

				<div
					id="iss_dtl_crt_sb_tsk"
					className=" tw-w-[25vw] tw-min-w-[300px] tw-h-max tw-absolute tw-z-50 tw-top-[105%] tw-right-0 tw-border tw-border-stone-300 dark:tw-border-stone-700 tw-bg-stone-100 dark:tw-bg-gray-800 tw-px-4 tw-py-5 tw-rounded-sm tw-hidden popup">
					<input
						type="text"
						placeholder="task summary"
						className="tw-block tw-font-exo tw-text-mygrey-default dark:tw-text-gray-400 tw-w-full tw-h-[45px] tw-border-[1px] tw-rounded tw-border-mygrey-v-lyt dark:tw-border-gray-500 tw-px-2 tw-mt-5 tw-text-xl dark:tw-bg-gray-800 focus:tw-outline focus:tw-outline-blue-300 focus:tw-outline-1"
					/>
					<div className=" tw-w-full tw-h-max tw-mt-5 tw-flex tw-justify-end tw-items-center">
						<button
							className="tw-w-max tw-h-max tw-px-7 tw-py-1 tw-bg-blue-800 tw-text-white tw-text-[16px] tw-font-exo tw-font-semibold tw-rounded-lg"
							onClick={() => issueDetailsToggleCreateSubtaskPopup()}>
							create
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default IssueDetailActionButtons;
