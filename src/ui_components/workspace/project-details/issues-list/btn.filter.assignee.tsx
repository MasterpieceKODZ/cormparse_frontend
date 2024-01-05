"use client";
import IconDownArrow from "@/ui_components/icons/down.arrow";

import ProjectMemberItem from "../user.item";
import {
	filterIssueByAssignee,
	toggleIssueAssigneeFilter,
} from "@/ui_controllers/workspace/issues/show.hide.issue.assignee.filter";

const BtnFilterIssueByAssignee = () => {
	return (
		<div className=" tw-w-max tw-h-max tw-mx-5 tw-relative">
			<button
				className=" tw-w-max tw-h-max tw-px-4 tw-py-1 tw-text-[15px] tw-font-exo tw-text-gray-800 dark:tw-text-gray-400 tw-flex tw-items-center tw-rounded tw-bg-gray-200 dark:tw-bg-gray-700 tw-justify-center"
				onClick={toggleIssueAssigneeFilter}>
				<span>Assignee</span>
				<span
					id="iss_assignee_filter_btn_arw"
					className=" tw-ms-4 iss_filter_btn_arw">
					<IconDownArrow
						fill="
						tw-text-fill-800
						dark:tw-fill-gray-400"
					/>
				</span>
			</button>
			<div
				id="iss_assignee_filter_cont"
				className="tw-w-[350px] tw-h-max tw-rounded tw-shadow dark:tw-shadow-gray-700 tw-bg-gray-100 dark:tw-bg-blue-950 tw-py-[10px] tw-px-5 tw-absolute tw-top-[110%] tw-left-0 tw-hidden tw-z-40 iss_filter_popup">
				<input
					type="text"
					placeholder="username"
					className=" tw-w-full tw-h-[40px] tw-block tw-font-exo tw-text-mygrey-default dark:tw-text-gray-400 tw-border-[1px] tw-rounded tw-border-mygrey-v-lyt dark:tw-border-gray-500 tw-px-2 tw-text-[18px] dark:tw-bg-gray-800 focus:tw-outline focus:tw-outline-blue-300 focus:tw-outline-1"
				/>
				<div className=" tw-w-full tw-h-max tw-max-h-[500px] tw-overflow-y-auto tw-mt-4">
					<div
						className=" tw-w-full tw-h-max tw-cursor-pointer"
						onClick={() => filterIssueByAssignee("name")}>
						<ProjectMemberItem
							username="MANofVALOR"
							fullname="Gideon Omorodion"
							role="Fullstack Developer"
							img="/logo.png"
							dir="up"
							showPopup={false}
						/>
					</div>
					<div
						className=" tw-w-full tw-h-max tw-cursor-pointer"
						onClick={() => filterIssueByAssignee("name")}>
						<ProjectMemberItem
							username="MANofVALOR"
							fullname="Gideon Omorodion"
							role="Fullstack Developer"
							img="/logo.png"
							dir="up"
							showPopup={false}
						/>
					</div>
					<div
						className=" tw-w-full tw-h-max tw-cursor-pointer"
						onClick={() => filterIssueByAssignee("name")}>
						<ProjectMemberItem
							username="MANofVALOR"
							fullname="Gideon Omorodion"
							role="Fullstack Developer"
							img="/logo.png"
							dir="up"
							showPopup={false}
						/>
					</div>
					<div
						className=" tw-w-full tw-h-max tw-cursor-pointer"
						onClick={() => filterIssueByAssignee("name")}>
						<ProjectMemberItem
							username="MANofVALOR"
							fullname="Gideon Omorodion"
							role="Fullstack Developer"
							img="/logo.png"
							dir="up"
							showPopup={false}
						/>
					</div>
					<div
						className=" tw-w-full tw-h-max tw-cursor-pointer"
						onClick={() => filterIssueByAssignee("name")}>
						<ProjectMemberItem
							username="MANofVALOR"
							fullname="Gideon Omorodion"
							role="Fullstack Developer"
							img="/logo.png"
							dir="up"
							showPopup={false}
						/>
					</div>
					<div
						className=" tw-w-full tw-h-max tw-cursor-pointer"
						onClick={() => filterIssueByAssignee("name")}>
						<ProjectMemberItem
							username="MANofVALOR"
							fullname="Gideon Omorodion"
							role="Fullstack Developer"
							img="/logo.png"
							dir="up"
							showPopup={false}
						/>
					</div>
					<div
						className=" tw-w-full tw-h-max tw-cursor-pointer"
						onClick={() => filterIssueByAssignee("name")}>
						<ProjectMemberItem
							username="MANofVALOR"
							fullname="Gideon Omorodion"
							role="Fullstack Developer"
							img="/logo.png"
							dir="up"
							showPopup={false}
						/>
					</div>
					<div
						className=" tw-w-full tw-h-max tw-cursor-pointer"
						onClick={() => filterIssueByAssignee("name")}>
						<ProjectMemberItem
							username="MANofVALOR"
							fullname="Gideon Omorodion"
							role="Fullstack Developer"
							img="/logo.png"
							dir="up"
							showPopup={false}
						/>
					</div>
					<div
						className=" tw-w-full tw-h-max tw-cursor-pointer"
						onClick={() => filterIssueByAssignee("name")}>
						<ProjectMemberItem
							username="MANofVALOR"
							fullname="Gideon Omorodion"
							role="Fullstack Developer"
							img="/logo.png"
							dir="up"
							showPopup={false}
						/>
					</div>
					<div
						className=" tw-w-full tw-h-max tw-cursor-pointer"
						onClick={() => filterIssueByAssignee("name")}>
						<ProjectMemberItem
							username="MANofVALOR"
							fullname="Gideon Omorodion"
							role="Fullstack Developer"
							img="/logo.png"
							dir="up"
							showPopup={false}
						/>
					</div>
					<div
						className=" tw-w-full tw-h-max tw-cursor-pointer"
						onClick={() => filterIssueByAssignee("name")}>
						<ProjectMemberItem
							username="MANofVALOR"
							fullname="Gideon Omorodion"
							role="Fullstack Developer"
							img="/logo.png"
							dir="up"
							showPopup={false}
						/>
					</div>
					<div
						className=" tw-w-full tw-h-max tw-cursor-pointer"
						onClick={() => filterIssueByAssignee("name")}>
						<ProjectMemberItem
							username="MANofVALOR"
							fullname="Gideon Omorodion"
							role="Fullstack Developer"
							img="/logo.png"
							dir="up"
							showPopup={false}
						/>
					</div>
					<div
						className=" tw-w-full tw-h-max tw-cursor-pointer"
						onClick={() => filterIssueByAssignee("name")}>
						<ProjectMemberItem
							username="MANofVALOR"
							fullname="Gideon Omorodion"
							role="Fullstack Developer"
							img="/logo.png"
							dir="up"
							showPopup={false}
						/>
					</div>
					<div
						className=" tw-w-full tw-h-max tw-cursor-pointer"
						onClick={() => filterIssueByAssignee("name")}>
						<ProjectMemberItem
							username="MANofVALOR"
							fullname="Gideon Omorodion"
							role="Fullstack Developer"
							img="/logo.png"
							dir="up"
							showPopup={false}
						/>
					</div>
					<div
						className=" tw-w-full tw-h-max tw-cursor-pointer"
						onClick={() => filterIssueByAssignee("name")}>
						<ProjectMemberItem
							username="MANofVALOR"
							fullname="Gideon Omorodion"
							role="Fullstack Developer"
							img="/logo.png"
							dir="up"
							showPopup={false}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BtnFilterIssueByAssignee;
