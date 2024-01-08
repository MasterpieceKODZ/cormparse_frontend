"use client";
import QuillEditor from "@/ui_components/quill.editor";
import {
	closeCommentEditor,
	openCommentEditor,
	saveComment,
} from "@/ui_controllers/workspace/issue_details/handel.comment";
import { loadActivities } from "@/ui_controllers/workspace/issue_details/load.activitiies";
import { useState } from "react";
import IssueCommentItem from "./comment.item";
import IssueUpateItem from "./update.item";

const IssueDetailActivityRoot = () => {
	const [activityFilter, setActivitiyFilter] = useState("comment");
	return (
		<div className=" tw-w-full tw-h-max tw-mt-12">
			<label className=" tw-text-start tw-text-[16px] tw-font-semibold tw-font-exo tw-text-gray-700 dark:tw-text-gray-400">
				Activities
			</label>
			<div className=" tw-w-max tw-h-max tw-mt-5">
				<button
					className=" tw-w-max tw-h-max tw-px-7 tw-py-1 tw-mx-4 tw-bg-gray-200 dark:tw-bg-gray-700 tw-rounded  tw-text-gray-700 dark:tw-text-gray-300 tw-font-exo tw-text-[17px] actv_btn"
					onClick={(e) => loadActivities(e, "all", setActivitiyFilter)}>
					All
				</button>
				<button
					className=" tw-w-max tw-h-max tw-px-7 tw-py-1 tw-mx-4 tw-bg-gray-200 dark:tw-bg-gray-700 tw-rounded  tw-text-gray-700 dark:tw-text-gray-300 tw-font-exo tw-text-[17px] actv_btn"
					onClick={(e) => loadActivities(e, "comment", setActivitiyFilter)}>
					Comments
				</button>
				<button
					className=" tw-w-max tw-h-max tw-px-7 tw-py-1 tw-mx-4 tw-bg-blue-200 dark:tw-bg-blue-900  tw-rounded  tw-text-blue-700 dark:tw-text-blue-200 tw-font-exo tw-text-[17px] actv_btn"
					onClick={(e) => loadActivities(e, "update", setActivitiyFilter)}>
					Updates
				</button>
			</div>
			<div className=" tw-w-full tw-h-max tw-max-h-[88vh] tw-mt-8 tw-grid tw-grid-rows-[auto_1fr] tw-overflow-hidden">
				{/* add comments */}
				{activityFilter == "comment" ? (
					<>
						<div
							id="ad_cmt_cont"
							className=" tw-w-full tw-h-max">
							<div className=" tw-w-full tw-h-max tw-py-3 tw-px-4 tw-rounded-lg tw-flex tw-justify-start tw-items-center tw-bg-gray-100 dark:tw-bg-gray-800 ">
								<p
									className=" tw-text-start tw-font-exo tw-text-[18px] tw-text-gray-500 dark:tw-text-gray-500 tw-w-full"
									onClick={openCommentEditor}>
									add comment
								</p>
							</div>
						</div>
						<div
							id="cmt_editor_cont"
							className=" tw-w-full tw-h-max tw-hidden">
							<QuillEditor />
							<div className=" tw-w-max tw-h-max tw-flex tw-justify-start tw-items-center tw-mb-8">
								<button
									className="tw-w-max tw-h-max tw-px-7 tw-me-3 tw-py-1 tw-bg-blue-800 tw-text-white tw-text-[16px] tw-font-exo tw-font-semibold tw-rounded-lg"
									onClick={saveComment}>
									save
								</button>
								<button
									className="tw-w-max tw-h-max tw-px-7 tw-ms-3 tw-py-1 tw-bg-red-700 tw-text-white tw-text-[16px] tw-font-exo tw-font-semibold tw-rounded-lg"
									onClick={closeCommentEditor}>
									cancel
								</button>
							</div>
						</div>
					</>
				) : (
					<></>
				)}
				{/* activities */}
				<div className=" tw-w-full tw-h-full tw-overflow-y-auto tw-mt-9 tw-pb-10">
					<IssueCommentItem
						body={`<h2> Camper Vibe</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illo ipsum magnam quaerat laborum perferendis minima distinctio modi id fugit?</p>
                    <h3> Basement Hood</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illo ipsum magnam quaerat laborum perferendis minima distinctio modi id fugit?</p>`}
						date="02-04-2024"
						author={{
							fullname: "Nicholas Castro",
							username: "CastroNick",
							imgUrl: "/logo.png",
						}}
						likes={21}
						unlikes={6}
						position={1}
						isReply
						replyTo="182"
					/>
					<IssueUpateItem
						body={`<p><strong>Benedict Vero</strong> changed the status from  <strong class="tw-text-blue-600">in-progress</strong>  to  <strong class="tw-text-green-600">done</strong></p>`}
						date="05-04-2024"
						author={{
							fullname: "Benedict Vero",
							username: "BennyV",
							imgUrl: "/logo.png",
						}}
						position={2}
					/>
					<IssueCommentItem
						body={`<h2> Camper Vibe</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illo ipsum magnam quaerat laborum perferendis minima distinctio modi id fugit?</p>
                    <h3> Basement Hood</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illo ipsum magnam quaerat laborum perferendis minima distinctio modi id fugit?</p>`}
						date="02-04-2024"
						author={{
							fullname: "Nicholas Castro",
							username: "CastroNick",
							imgUrl: "/logo.png",
						}}
						likes={46}
						unlikes={9}
						position={3}
					/>
					<IssueUpateItem
						body={`<p><strong>Benedict Vero</strong> changed the status from  <strong class="tw-text-blue-600">in-progress</strong>  to  <strong class="tw-text-green-600">done</strong></p>`}
						date="05-04-2024"
						author={{
							fullname: "Benedict Vero",
							username: "BennyV",
							imgUrl: "/logo.png",
						}}
						position={4}
					/>
					<IssueCommentItem
						body={`<h2> Camper Vibe</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illo ipsum magnam quaerat laborum perferendis minima distinctio modi id fugit?</p>
                    <h3> Basement Hood</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illo ipsum magnam quaerat laborum perferendis minima distinctio modi id fugit?</p>`}
						date="02-04-2024"
						author={{
							fullname: "Nicholas Castro",
							username: "CastroNick",
							imgUrl: "/logo.png",
						}}
						likes={98}
						unlikes={0}
						position={5}
					/>
					<IssueUpateItem
						body={`<p><strong>Benedict Vero</strong> changed the status from  <strong class="tw-text-blue-600">in-progress</strong>  to  <strong class="tw-text-green-600">done</strong></p>`}
						date="05-04-2024"
						author={{
							fullname: "Benedict Vero",
							username: "BennyV",
							imgUrl: "/logo.png",
						}}
						position={6}
					/>
				</div>
			</div>
		</div>
	);
};

export default IssueDetailActivityRoot;
