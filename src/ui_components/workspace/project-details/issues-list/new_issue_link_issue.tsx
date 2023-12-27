/* eslint-disable @next/next/no-img-element */
import IconDownArrow from "@/ui_components/icons/down.arrow";
import { toggleNewIssueLinkTypePopup } from "@/ui_controllers/workspace/issues/show.hide.new.issue.link.type.popup";
import IconBug from "@/ui_components/icons/bug.icon";
import IconFeature from "@/ui_components/icons/feature.icon";
import IconImprovement from "@/ui_components/icons/improvement.icon";
import IconTask from "@/ui_components/icons/task.icon";
import {
	hideLinkIssueSuggestion,
	showLinkIssueSuggestion,
} from "@/ui_controllers/workspace/issues/show.hide.new.issue.link.suggestion";
import { selectLinkIssueType } from "@/ui_controllers/workspace/issues/select.issues.link.type";
import { ReactNode } from "react";
import IconEdit from "@/ui_components/icons/edit";
import IconCloseCropper from "@/ui_components/icons/close.cropper.icon";

const NewIssueLinkIssue = ({
	linkedIssue,
	setLinkedIssue,
}: {
	linkedIssue: any;
	setLinkedIssue: any;
}) => {
	return (
		<>
			{" "}
			<div className=" tw-w-full tw-h-max tw-relative">
				<button
					className=" tw-w-max tw-h-max tw-py-1 tw-px-5 tw-inline-block tw-me-2 tw-text-gray-700 dark:tw-text-gray-400 tw-bg-gray-300 dark:tw-bg-gray-600 tw-text-center tw-rounded"
					onClick={toggleNewIssueLinkTypePopup}>
					<span
						id="nw_iss_lnk_drp_dwn_txt"
						className=" tw-pe-5 tw-font-exo">
						child
					</span>
					<span
						id="nw_iss_link_icn_arr_dwn"
						className=" tw-ms-2 tw-inline-block">
						<IconDownArrow />
					</span>
				</button>
				<div
					id="nw_iss_link_typ_popup"
					className=" tw-w-max tw-h-max tw-absolute tw-top-[110%] tw-z-40 tw-left-0 tw-rounded tw-text-gray-700 dark:tw-text-gray-400 tw-bg-gray-300 dark:tw-bg-gray-600 tw-hidden popup">
					<button
						className="  tw-w-max tw-h-max tw-block tw-mx-3 tw-my-2 tw-py-2 tw-ps-5 tw-pe-[70px] tw-rounded tw-font-exo tw-text-[15px] tw-text-gray-700 dark:tw-text-gray-400 hover:tw-bg-gray-200 dark:hover:tw-bg-gray-700"
						onClick={(e) =>
							selectLinkIssueType(e, linkedIssue, setLinkedIssue)
						}>
						child
					</button>
					<div className=" tw-w-full tw-h-[1px] tw-bg-gray-100 dark:tw-bg-gray-500"></div>
					<button
						className=" tw-w-max tw-h-max tw-block tw-mx-3 tw-my-2 tw-py-2 tw-ps-5 tw-pe-[70px] tw-rounded tw-font-exo tw-text-[15px] tw-text-gray-700 dark:tw-text-gray-400 hover:tw-bg-gray-200 dark:hover:tw-bg-gray-700"
						onClick={(e) =>
							selectLinkIssueType(e, linkedIssue, setLinkedIssue)
						}>
						parent
					</button>
				</div>
			</div>
			<div className=" tw-w-full tw-h-max tw-relative tw-mt-5">
				{linkedIssue.issue ? (
					<></>
				) : (
					<>
						<input
							type="text"
							id="inp_nw_iss_lnk_key"
							placeholder="type issue key..."
							onChange={showLinkIssueSuggestion}
							className="tw-block tw-w-full tw-font-exo tw-text-mygrey-default dark:tw-text-gray-400 tw-h-[40px] tw-border-[1px] tw-rounded tw-border-mygrey-v-lyt dark:tw-border-gray-500 tw-px-2 tw-text-[16px] dark:tw-bg-gray-800 focus:tw-outline focus:tw-outline-blue-300 focus:tw-outline-1"
						/>
						<div
							id="nw_iss_lnk_sug"
							className=" tw-w-full tw-h-max tw-max-h-[350px] tw-pt-[35px] tw-mb-6 tw-overflow-auto tw-absolute tw-top-[110%] tw-left-0 tw-bg-gray-300 dark:tw-bg-gray-700 tw-rounded tw-border tw-border-gray-500 dark:tw-border-gray-500 tw-z-40 tw-py-6 tw-px-3 tw-hidden">
							<div
								className=" tw-w-max tw-h-max tw-absolute tw-top-[3px] tw-right-[5px] tw-cursor-pointer"
								onClick={hideLinkIssueSuggestion}>
								<IconCloseCropper
									size="30px"
									fill="tw-fill-red-600"
								/>
							</div>
							{/* issue suggestion item */}
							<div
								className=" tw-w-full tw-h-max tw-cursor-pointer tw-flex tw-justify-start tw-items-center tw-my-2 tw-border-t tw-border-t-gray-200 dark:tw-border-t-gray-500"
								onClick={() => {
									setLinkedIssue({
										relation: "parent",
										issue: {
											type: "feature",
											summary:
												"flower vase on the table girl sitting on the chair drinking wine.",
											key: "SSDFD-43",
										},
									});

									document
										.getElementById("nw_iss_lnk_sug")
										?.classList.add("tw-hidden");
								}}>
								<div>
									<IconBug />
								</div>
								<div className=" tw-h-max tw-basis-full tw-shrink tw-grow-0 tw-text-mygrey-default dark:tw-text-gray-400 tw-mx-2">
									<p className=" tw-w-full tw-h-max tw-font-exo tw-text-[17px] tw-font-semibold tw-text-start">
										issue summary straight outta the ghetto give the best vibe
										ever{" "}
									</p>
									<p className=" tw-w-full tw-h-max tw-font-exo tw-text-[13px] tw-mt-2 tw-text-start">
										AASD-2
									</p>
								</div>
							</div>{" "}
							{/* issue suggestion item */}
							<div
								className=" tw-w-full tw-h-max  tw-cursor-pointer tw-flex tw-justify-start tw-items-center tw-my-2 tw-border-t tw-border-t-gray-200 dark:tw-border-t-gray-500"
								onClick={() => {
									setLinkedIssue({
										relation: "parent",
										issue: {
											type: "feature",
											summary:
												"flower vase on the table girl sitting on the chair drinking wine.",
											key: "SSDFD-43",
										},
									});

									document
										.getElementById("nw_iss_lnk_sug")
										?.classList.add("tw-hidden");
								}}>
								<div>
									<IconBug />
								</div>
								<div className=" tw-h-max tw-basis-full tw-shrink tw-grow-0 tw-text-mygrey-default dark:tw-text-gray-400 tw-mx-2">
									<p className=" tw-w-full tw-h-max tw-font-exo tw-text-[17px] tw-font-semibold tw-text-start">
										issue summary straight outta the ghetto give the best vibe
										ever{" "}
									</p>
									<p className=" tw-w-full tw-h-max tw-font-exo tw-text-[13px] tw-mt-2 tw-text-start">
										AASD-2
									</p>
								</div>
							</div>{" "}
							{/* issue suggestion item */}
							<div
								className=" tw-w-full tw-h-max tw-cursor-pointer tw-flex tw-justify-start tw-items-center tw-my-2 tw-border-t tw-border-t-gray-200 dark:tw-border-t-gray-500"
								onClick={() => {
									setLinkedIssue({
										relation: "parent",
										issue: {
											type: "feature",
											summary:
												"flower vase on the table girl sitting on the chair drinking wine.",
											key: "SSDFD-43",
										},
									});

									document
										.getElementById("nw_iss_lnk_sug")
										?.classList.add("tw-hidden");
								}}>
								<div>
									<IconTask />
								</div>
								<div className=" tw-h-max tw-basis-full tw-shrink tw-grow-0 tw-text-mygrey-default dark:tw-text-gray-400  tw-mx-2">
									<p className=" tw-w-full tw-h-max tw-font-exo tw-text-[17px] tw-font-semibold tw-text-start">
										issue summary straight outta the ghetto give the best vibe
										ever{" "}
									</p>
									<p className=" tw-w-full tw-h-max tw-font-exo tw-text-[13px] tw-mt-2 tw-text-start">
										AASD-2
									</p>
								</div>
							</div>{" "}
							{/* issue suggestion item */}
							<div
								className=" tw-w-full tw-h-max tw-cursor-pointer tw-flex tw-justify-start tw-items-center tw-my-2 tw-border-t tw-border-t-gray-200 dark:tw-border-t-gray-500"
								onClick={() => {
									setLinkedIssue({
										relation: "parent",
										issue: {
											type: "feature",
											summary:
												"flower vase on the table girl sitting on the chair drinking wine.",
											key: "SSDFD-43",
										},
									});

									document
										.getElementById("nw_iss_lnk_sug")
										?.classList.add("tw-hidden");
								}}>
								<div>
									<IconImprovement />
								</div>
								<div className=" tw-h-max tw-basis-full tw-shrink tw-grow-0 tw-text-mygrey-default dark:tw-text-gray-400  tw-mx-2">
									<p className=" tw-w-full tw-h-max tw-font-exo tw-text-[17px] tw-font-semibold tw-text-start">
										issue summary straight outta the ghetto give the best vibe
										ever{" "}
									</p>
									<p className=" tw-w-full tw-h-max tw-font-exo tw-text-[13px] tw-mt-2  tw-text-start">
										AASD-2
									</p>
								</div>
							</div>{" "}
							{/* issue suggestion item */}
							<div
								className=" tw-w-full tw-h-max tw-cursor-pointer tw-flex tw-justify-start tw-items-center tw-my-2 tw-border-t tw-border-t-gray-200 dark:tw-border-t-gray-500"
								onClick={() => {
									setLinkedIssue({
										relation: "parent",
										issue: {
											type: "feature",
											summary:
												"flower vase on the table girl sitting on the chair drinking wine.",
											key: "SSDFD-43",
										},
									});

									document
										.getElementById("nw_iss_lnk_sug")
										?.classList.add("tw-hidden");
								}}>
								<div>
									<IconFeature />
								</div>
								<div className=" tw-h-max tw-basis-full tw-shrink tw-grow-0 tw-text-mygrey-default dark:tw-text-gray-400  tw-mx-2">
									<p className=" tw-w-full tw-h-max tw-font-exo tw-font-semibold tw-text-[17px] tw-text-start">
										issue summary straight outta the ghetto give the best vibe
										ever{" "}
									</p>
									<p className=" tw-w-full tw-h-max tw-font-exo tw-text-[13px] tw-mt-2 tw-text-start">
										AASD-2
									</p>
								</div>
							</div>
						</div>
					</>
				)}

				{linkedIssue.issue ? (
					<div
						className={` tw-w-full tw-h-max tw-mt-4 tw-border tw-border-gray-300 dark:tw-border-gray-600 tw-rounded tw-py-2 tw-px-3 ${
							linkedIssue ? "" : " tw-hidden"
						} tw-flex tw-justify-start tw-items-center`}>
						{((issueType: string): ReactNode => {
							switch (issueType) {
								case "bug":
									return <IconBug />;
								case "improvement":
									return <IconImprovement />;
								case "task":
									return <IconTask />;
								case "feature":
									return <IconFeature />;
							}
						})(linkedIssue.issue.type)}
						<div className=" tw-basis-full tw-h-max tw-mx-3">
							<p className=" tw-w-full tw-h-max tw-font-exo tw-font-semibold tw-text-[17px] tw-text-start">
								{linkedIssue.issue.summary}
							</p>
							<p className="tw-w-full tw-h-max tw-font-exo tw-text-[13px] tw-mt-2 tw-text-start">
								{linkedIssue.issue.key}
							</p>
						</div>
						<div
							className=" tw-w-max tw-h-max tw-cursor-pointer"
							onClick={() => {
								setLinkedIssue("");
							}}>
							<IconEdit fill="tw-fill-gray-700 dark:tw-fill-gray-400" />
						</div>
					</div>
				) : (
					<></>
				)}
			</div>
		</>
	);
};

export default NewIssueLinkIssue;
