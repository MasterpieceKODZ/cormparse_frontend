"use client";
import IconBug from "@/ui_components/icons/bug.icon";
import IconDownArrow from "@/ui_components/icons/down.arrow";
import IconFeature from "@/ui_components/icons/feature.icon";
import IconImprovement from "@/ui_components/icons/improvement.icon";
import IconTask from "@/ui_components/icons/task.icon";
import { useState } from "react";
import NewIssueTypeSelectItem from "./btn.new.issue.type";
import { toggleNewIssueTypePopup } from "@/ui_controllers/workspace/issues/show.hide.new.issue.type.popup";
import { selectNewIssueType } from "@/ui_controllers/workspace/issues/select.new.issue.type";
import IconPriorityHighest from "@/ui_components/icons/issue.priority.highest";
import IconPriorityHigh from "@/ui_components/icons/issue.priority.high";
import IconPriorityMid from "@/ui_components/icons/issue.priority.mid";
import IconPriorityLow from "@/ui_components/icons/issue.priority.low";
import { toggleNewIssuePriorityPopup } from "@/ui_controllers/workspace/issues/show.hide.new.issue.priority.popup";
import { selectNewIssuePrority } from "@/ui_controllers/workspace/issues/select.new.issue.priority";
import NewIssuePrioritySelectItem from "./new.issue.priority.item";
import QuillEditor from "@/ui_components/quill.editor";
import { selectNewIssueFileAttachment } from "@/ui_controllers/workspace/issues/select.new.issue.attachment";
import NewIssueAttachment from "./new.issue.attachment.item";
import IconCheck from "@/ui_components/icons/check";
import IconCloseCropper from "@/ui_components/icons/close.cropper.icon";
import {
	addNewIssueTag,
	removeNewIssueTag,
} from "@/ui_controllers/workspace/issues/add.remove.new.issue.tag";
import ProjectMemberItem from "../user.item";
import { toggleNewIssueAssignee } from "@/ui_controllers/workspace/issues/show.hide.new.issue.assignee.drop.down";
import { toggleNewIssueAssigneeSugPopup } from "@/ui_controllers/workspace/issues/show.hide.new.issue.assigne.sugestion.popup";
import { selectNewIssueAssigne } from "@/ui_controllers/workspace/issues/select.new.issue.assignee";
import NewIssueLinkIssue from "./new_issue_link_issue";

const CreateNewIssue = () => {
	const [newIssueType, setNewIssueType] = useState("bug");
	const [newIssuePriority, setNewIssuePriority] = useState("high");
	const [attachments, setAttachments] = useState<any[]>([]);
	const [tags, setTags] = useState<string[]>([]);
	const [linkedIssue, setLinkedIssue] = useState<any>("");

	return (
		<div
			id="new_iss_popup"
			className=" tw-w-[30vw] tw-min-w-[400px] tw-max-w-[550px] tw-pt-6 tw-px-8 tw-pb-[200px] tw-h-[75vh] tw-border-2 tw-z-40 tw-border-gray-500 tw-bg-gray-200 dark:tw-bg-stone-900 tw-rounded tw-absolute tw-top-[115%] tw-right-0 tw-overflow-auto popup">
			<h4 className=" tw-font-exo tw-text-[24px] tw-text-center tw-text-gray-800 dark:tw-text-gray-400">
				Create New Issue
			</h4>
			<label
				htmlFor="inp_iss_sum"
				className="tw-block tw-text-[17px] tw-text-gray-700 tw-font-exo dark:tw-text-gray-400 tw-text-start tw-mt-9">
				summary
			</label>
			<input
				id=" inp_iss_sum"
				type="text"
				maxLength={150}
				className="tw-block tw-font-exo tw-text-mygrey-default dark:tw-text-gray-400 tw-w-[100%] tw-h-[40px] tw-border-[1px] tw-rounded tw-border-mygrey-v-lyt dark:tw-border-gray-500 tw-px-2 tw-mt-2 tw-text-[16px] dark:tw-bg-gray-800 focus:tw-outline focus:tw-outline-blue-300 focus:tw-outline-1"
			/>

			{/* type */}
			<div className=" tw-w-max tw-h-max tw-relative tw-mt-7">
				<div className=" tw-w-max tw-h-max tw-flex tw-justify-start tw-items-center ">
					<button
						className=" tw-w-max tw-h-max tw-py-1 tw-font-exo tw-px-3 tw-inline-block tw-me-2 tw-text-gray-700 dark:tw-text-gray-400 tw-bg-gray-300 dark:tw-bg-gray-600 tw-text-center tw-rounded"
						onClick={toggleNewIssueTypePopup}>
						<span>type</span>
						<span
							id="nw_iss_typ_icn_arr_dwn"
							className=" tw-ms-2 tw-inline-block">
							<IconDownArrow fill="tw-fill-gray-800 dark:tw-fill-gray-400" />
						</span>
					</button>
					<div className=" tw-w-max tw-h-max tw-py-1 tw-px-3 tw-text-[15px] tw-flex tw-justify-center tw-items-center tw-text-gray-700 dark:tw-text-gray-400 tw-bg-gray-300 dark:tw-bg-gray-600 tw-rounded">
						<span className=" tw-w-max tw-h-max tw-me-2">
							{((type) => {
								switch (type) {
									case "bug":
										return <IconBug />;
									case "feature":
										return <IconFeature />;
									case "improvement":
										return <IconImprovement />;
									case "task":
										return <IconTask />;
								}
							})(newIssueType)}
						</span>
						<span className=" tw-ms-2 tw-font-exo">{newIssueType}</span>
					</div>
				</div>
				<div
					id="nw_iss_type_popup"
					className=" tw-w-max tw-h-max tw-py-2 tw-px-1 tw-absolute tw-top-[110%] tw-z-30 tw-bg-gray-300 dark:tw-bg-gray-600 tw-rounded tw-hidden">
					<button
						className=" tw-w-max tw-h-max tw-block"
						onClick={() => selectNewIssueType(setNewIssueType, "bug")}>
						<NewIssueTypeSelectItem type="bug" />
					</button>

					<button
						className=" tw-w-max tw-h-max tw-block"
						onClick={() => selectNewIssueType(setNewIssueType, "feature")}>
						<NewIssueTypeSelectItem type="feature" />
					</button>

					<button
						className=" tw-w-max tw-h-max tw-block"
						onClick={() => selectNewIssueType(setNewIssueType, "improvement")}>
						<NewIssueTypeSelectItem type="improvement" />
					</button>

					<button
						className=" tw-w-max tw-h-max tw-block"
						onClick={() => selectNewIssueType(setNewIssueType, "task")}>
						<NewIssueTypeSelectItem type="task" />
					</button>
				</div>
			</div>
			{/* priority */}
			<div className=" tw-w-max tw-h-max tw-relative tw-mt-7">
				<div className=" tw-w-max tw-h-max tw-flex tw-justify-start tw-items-center ">
					<button
						className=" tw-w-max tw-h-max tw-py-1 tw-px-3 tw-inline-block tw-me-2 tw-text-gray-700 dark:tw-text-gray-400 tw-bg-gray-300 dark:tw-bg-gray-600 tw-text-center tw-rounded"
						onClick={toggleNewIssuePriorityPopup}>
						<span className=" tw-font-exo">priority</span>
						<span
							id="nw_iss_prio_icn_arr_dwn"
							className=" tw-ms-2 tw-inline-block">
							<IconDownArrow fill="tw-fill-gray-800 dark:tw-fill-gray-400" />
						</span>
					</button>
					<div className=" tw-w-max tw-h-max tw-py-1 tw-px-3 tw-text-[15px] tw-flex tw-justify-center tw-items-center tw-text-gray-700 dark:tw-text-gray-400 tw-bg-gray-300 dark:tw-bg-gray-600 tw-rounded">
						<span className=" tw-w-max tw-h-max tw-me-2">
							{((priority) => {
								switch (priority) {
									case "highest":
										return <IconPriorityHighest />;
									case "high":
										return <IconPriorityHigh />;
									case "mid":
										return <IconPriorityMid />;
									case "low":
										return <IconPriorityLow />;
								}
							})(newIssuePriority)}
						</span>
						<span className=" tw-ms-2 tw-font-exo">{newIssuePriority}</span>
					</div>
				</div>
				<div
					id="nw_iss_prio_popup"
					className=" tw-w-max tw-h-max tw-py-2 tw-px-1 tw-absolute tw-top-[110%] tw-z-30 tw-bg-gray-300 dark:tw-bg-gray-600 tw-rounded tw-hidden">
					<button
						className=" tw-w-max tw-h-max tw-block"
						onClick={() =>
							selectNewIssuePrority(setNewIssuePriority, "highest")
						}>
						<NewIssuePrioritySelectItem priority="highest" />
					</button>

					<button
						className=" tw-w-max tw-h-max tw-block"
						onClick={() => selectNewIssuePrority(setNewIssuePriority, "high")}>
						<NewIssuePrioritySelectItem priority="high" />
					</button>

					<button
						className=" tw-w-max tw-h-max tw-block"
						onClick={() => selectNewIssuePrority(setNewIssuePriority, "mid")}>
						<NewIssuePrioritySelectItem priority="mid" />
					</button>

					<button
						className=" tw-w-max tw-h-max tw-block"
						onClick={() => selectNewIssuePrority(setNewIssuePriority, "low")}>
						<NewIssuePrioritySelectItem priority="low" />
					</button>
				</div>
			</div>
			{/* description */}
			<label className="tw-block tw-text-[17px] tw-text-gray-700 tw-font-exo dark:tw-text-gray-400 tw-text-start tw-mt-9">
				description
			</label>
			<div className=" tw-w-full">
				<QuillEditor />
			</div>

			{/* assignee */}

			<div className=" tw-w-full tw-h-max tw-relative tw-flex tw-flex-col tw-justify-start tw-mt-5 tw-items-start">
				<button
					id="btn_new_iss_assign"
					className=" tw-w-max tw-h-max tw-px-8 tw-py-2 tw-rounded tw-text-gray-700 dark:tw-text-gray-400 tw-bg-gray-300 dark:tw-bg-gray-600 tw-font-exo tw-flex tw-justify-center tw-items-center"
					onClick={toggleNewIssueAssignee}>
					<span>assign to</span>
					<span
						id="nw_iss_icn_dwn"
						className=" tw-mx-3">
						<IconDownArrow fill="tw-fill-gray-800 dark:tw-fill-gray-400" />
					</span>
				</button>
				<div
					id="nw_iss_assignee_drp_dwn"
					className=" tw-w-full tw-h-max tw-mt-1 tw-px-4 tw-rounded-sm tw-bg-gray-100 dark:tw-bg-gray-800 tw-flex tw-flex-col tw-justify-start tw-items-start tw-overflow-x-hidden tw-overflow-y-auto">
					<button className=" tw-w-full tw-h-max tw-text-start tw-font-exo tw-text-[16px] tw-font-semibold tw-block tw-mt-9 tw-ms-1 tw-rounded-sm tw-text-gray-700 dark:tw-text-gray-400 ">
						Un-Assigned
					</button>
					<button className=" tw-w-full tw-h-max tw-text-start tw-font-exo tw-text-[16px] tw-font-semibold tw-block tw-mt-6 tw-ms-1 tw-rounded-sm tw-text-gray-700 dark:tw-text-gray-400 ">
						Self
					</button>

					<input
						id="inp_new_iss_assignee"
						type="text"
						maxLength={100}
						placeholder="type username."
						className="tw-inline tw-font-exo tw-text-mygrey-default dark:tw-text-gray-400 tw-w-[100%] tw-h-[40px] tw-border-[1px] tw-mb-8 tw-rounded tw-border-mygrey-v-lyt dark:tw-border-gray-500 tw-px-2 tw-mt-7 tw-text-[16px] dark:tw-bg-gray-800 focus:tw-outline focus:tw-outline-blue-300 focus:tw-outline-1"
						onChange={toggleNewIssueAssigneeSugPopup}
					/>
					{/* person suggestion popup */}
					<div
						id="new_iss_prsn_sug_popup"
						className=" tw-w-full tw-h-max tw-max-h-[300px] tw-mb-7 tw-px-4 tw-overflow-y-auto tw-absolute tw-top-[102%] tw-right-0 tw-rounded tw-overflow-hidden tw-bg-gray-100 dark:tw-bg-gray-800 tw-shadow-sm tw-hidden">
						<button
							className=" tw-w-full tw-h-max"
							onClick={() => selectNewIssueAssigne()}>
							<ProjectMemberItem
								username="Sabestinozy"
								fullname="Zion Farouk"
								role="software developer"
								img="/logo.png"
								showPopup={false}
								dir="down"
							/>
						</button>
						<button
							className=" tw-w-full tw-h-max tw-my-2"
							onClick={() => selectNewIssueAssigne()}>
							<ProjectMemberItem
								username="Sabestinozy"
								fullname="Zion Farouk"
								role="software developer"
								img="/logo.png"
								showPopup={false}
								dir="down"
							/>
						</button>
						<button
							className=" tw-w-full tw-h-max tw-my-2"
							onClick={() => selectNewIssueAssigne()}>
							<ProjectMemberItem
								username="Sabestinozy"
								fullname="Zion Farouk"
								role="software developer"
								img="/logo.png"
								showPopup={false}
								dir="down"
							/>
						</button>
						<button
							className=" tw-w-full tw-h-max tw-my-2"
							onClick={() => selectNewIssueAssigne()}>
							<ProjectMemberItem
								username="Sabestinozy"
								fullname="Zion Farouk"
								role="software developer"
								img="/logo.png"
								showPopup={false}
								dir="down"
							/>
						</button>
						<button
							className=" tw-w-full tw-h-max tw-my-2"
							onClick={() => selectNewIssueAssigne()}>
							<ProjectMemberItem
								username="Sabestinozy"
								fullname="Zion Farouk"
								role="software developer"
								img="/logo.png"
								showPopup={false}
								dir="down"
							/>
						</button>
						<button
							className=" tw-w-full tw-h-max tw-my-2"
							onClick={() => selectNewIssueAssigne()}>
							<ProjectMemberItem
								username="Sabestinozy"
								fullname="Zion Farouk"
								role="software developer"
								img="/logo.png"
								showPopup={false}
								dir="down"
							/>
						</button>
						<button
							className=" tw-w-full tw-h-max tw-my-2"
							onClick={() => selectNewIssueAssigne()}>
							<ProjectMemberItem
								username="Sabestinozy"
								fullname="Zion Farouk"
								role="software developer"
								img="/logo.png"
								showPopup={false}
								dir="down"
							/>
						</button>
						<button
							className=" tw-w-full tw-h-max tw-my-2"
							onClick={() => selectNewIssueAssigne()}>
							<ProjectMemberItem
								username="Sabestinozy"
								fullname="Zion Farouk"
								role="software developer"
								img="/logo.png"
								showPopup={false}
								dir="down"
							/>
						</button>
					</div>
				</div>
			</div>
			{/* attachments */}
			<label className="tw-block tw-text-[17px] tw-text-gray-700 tw-font-exo dark:tw-text-gray-400 tw-text-start tw-mt-9">
				attachments
			</label>
			<div className=" tw-mt-4">
				<button
					className="tw-w-max tw-h-max tw-font-exo tw-py-1 tw-px-3 tw-inline-block tw-me-2 tw-text-gray-700 dark:tw-text-gray-400 tw-bg-gray-300 dark:tw-bg-gray-600 tw-text-center tw-rounded"
					onClick={() => {
						document.getElementById("new_iss_attach_file_inp")?.click();
					}}>
					select file
				</button>
				<input
					id="new_iss_attach_file_inp"
					className=" tw-w-0 tw-h-0 tw-invisible"
					type="file"
					onChange={selectNewIssueFileAttachment}
				/>
				<div className=" tw-w-full tw-h-max tw-mt-5">
					<NewIssueAttachment
						name="hshshshshshddfd.ss.dff.pdf"
						size="23MB"
						url="dds.com"
						attachments={attachments}
						setAttachments={setAttachments}
						position="1"
					/>
					<NewIssueAttachment
						name="hshshshshshddfd.ss.dff.pdf"
						size="23MB"
						url="dds.com"
						attachments={attachments}
						setAttachments={setAttachments}
						position="2"
					/>
					<NewIssueAttachment
						name="hshshshshshddfd.ss.dff.pdf"
						size="23MB"
						url="dds.com"
						attachments={attachments}
						setAttachments={setAttachments}
						position="3"
					/>
				</div>
			</div>
			{/* tags */}
			<label className="tw-block tw-text-[17px] tw-text-gray-700 tw-font-exo dark:tw-text-gray-400 tw-text-start tw-mt-9">
				tags
			</label>
			<div className=" tw-w-full tw-h-max tw-mt-2">
				<div className=" tw-w-full tw-h-max tw-flex tw-justify-start tw-items-center">
					<input
						id="inp_new_iss_tag"
						type="text"
						maxLength={30}
						className="tw-inline tw-font-exo tw-text-mygrey-default dark:tw-text-gray-400 tw-basis-full tw-shrink tw-grow-0 tw-h-[40px] tw-border-[1px] tw-rounded tw-border-mygrey-v-lyt dark:tw-border-gray-500 tw-px-2 tw-text-[16px] dark:tw-bg-gray-800 focus:tw-outline focus:tw-outline-blue-300 focus:tw-outline-1"
					/>
					<button
						className=" tw-inline tw-w-max tw-h-max tw-mx-4"
						onClick={() => addNewIssueTag(tags, setTags)}>
						<IconCheck stroke="tw-stroke-gray-700 dark:tw-stroke-gray-400" />
					</button>
				</div>
				<div
					id="new_iss_tags_prev"
					className=" tw-w-full tw-h-max tw-flex tw-justify-start tw-items-center tw-mt-3">
					{/* tags map */}
					{tags.map((tag, indx) => (
						<div
							key={indx}
							className=" tw-w-max tw-h-max tw-m-2 tw-px-2 tw-py-1 tw-bg-gray-200 dark:tw-bg-gray-600 tw-rounded-[20px] tw-flex tw-justify-center tw-items-center">
							<p className=" tw-w-max tw-h-max tw-ps-1 tw-text-[14px] tw-font-exo tw-text-gray-700 dark:tw-text-gray-400">
								{tags[indx]}
							</p>
							<button
								className=" tw-w-max tw-h-max tw-ms-3 tw-me-1"
								onClick={() => removeNewIssueTag(tags, setTags, indx)}>
								<IconCloseCropper
									fill="tw-fill-gray-700 dark:tw-fill-gray-400"
									size="15px"
								/>
							</button>
						</div>
					))}
				</div>
			</div>
			{/* due date */}
			<label className="tw-block tw-text-[17px] tw-text-gray-700 tw-font-exo dark:tw-text-gray-400 tw-text-start tw-mt-9 tw-mb-3">
				due date
			</label>
			<input
				type="date"
				className=" tw-w-[70%] tw-bg-gray-200 tw-block tw-font-exo tw-text-mygrey-default dark:tw-text-gray-400  tw-h-[40px] tw-border-[1px] tw-rounded tw-border-mygrey-v-lyt dark:tw-border-gray-500 tw-px-2 tw-text-[16px] dark:tw-bg-gray-800 focus:tw-outline focus:tw-outline-blue-300 focus:tw-outline-1"
				onChange={(e) => console.log(e.target.value)}
			/>
			{/* link issue */}
			<label className="tw-block tw-text-[17px] tw-text-gray-700 tw-font-exo dark:tw-text-gray-400 tw-text-start tw-mt-9 tw-mb-3">
				link issue as
			</label>
			<NewIssueLinkIssue
				linkedIssue={linkedIssue}
				setLinkedIssue={setLinkedIssue}
			/>
			<div className=" tw-w-full tw-h-max tw-flex tw-justify-center tw-items-center tw-pt-[65px]">
				<button className=" tw-w-max tw-h-max tw-px-[50px] tw-py-2 tw-rounded tw-shadow tw-bg-blue-600 tw-text-white tw-font-russo-one tw-text-[15px] tw-text-center">
					SUBMIT
				</button>
			</div>
		</div>
	);
};

export default CreateNewIssue;
