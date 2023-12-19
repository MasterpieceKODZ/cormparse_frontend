"use client";
import {
	twFormTxtInput,
	twInputLabel,
} from "@/tailwind_classname_utils/login.page";
import ProjectMemberItem from "../user.item";
import IconEdit from "@/ui_components/icons/edit";
import {
	hideTeamLeadInput,
	showTeamLeadInput,
} from "@/ui_controllers/workspace/teams/show.hide.team.lead.input";
import { showTeamLeadSuggestion } from "@/ui_controllers/workspace/teams/find.lead";
import IconPlus from "@/ui_components/icons/plus";
import {
	hideTeamMembersInput,
	showTeamMembersInput,
} from "@/ui_controllers/workspace/teams/show.hide.team.members.input";
import IconCloseCropper from "@/ui_components/icons/close.cropper.icon";
import { showTeamMembersSuggestion } from "@/ui_controllers/workspace/teams/find.members";
import { hideNewTeamPopup } from "@/ui_controllers/workspace/teams/open.close.new.team.popup";
import NewTeamMemberUserPrevItem from "./new.team.member.prev.item";

const CreateNewTeamLayout = () => {
	return (
		<div
			id="new_team_popup"
			className=" tw-min-w-[310px] tw-max-w-[500px] tw-pt-8 tw-ps-4 tw-h-[75vh] tw-border-2 tw-z-40 tw-border-gray-500 tw-bg-gray-200 dark:tw-bg-gray-700 tw-rounded tw-absolute tw-top-[12vh] tw-right-[30px] tw-overflow-hidden tw-flex-col tw-justify-start tw-items-start tw-hidden popup">
			<h3 className=" tw-w-full tw-h-max tw-text-center tw-text-[24px] tw-font-exo tw-mb-3 tw-text-gray-800 dark:tw-text-gray-400">
				Create New Team
			</h3>
			<div className=" tw-w-full tw-basis-full tw-max-h-[97%] tw-overflow-y-auto tw-shrink tw-grow-0">
				<p className={`${twInputLabel}`}>Name</p>
				<input
					type="text"
					name="team_name"
					maxLength={30}
					id="team_name_inp"
					className={`${twFormTxtInput} tw-me-4`}
				/>
				<p className={`${twInputLabel}`}>Lead</p>
				<div className=" tw-relative tw-w-full">
					<div
						id="create_team_lead_wrap"
						className=" tw-w-full tw-h-max tw-py-3 tw-rounded tw-flex tw-flex-nowrap tw-justify-start tw-items-center tw-ps-[15px]">
						<ProjectMemberItem
							username="YoYouYouYouYouYouYouYouuYouYouYouYouYouYouYouYouYouYouYouYouYouYouYouYouYouYouYouYouYouYou"
							fullname="Gidon Omorodion"
							role="Fullstack Developer"
							dir="up"
							img="/logo.png"
							showPopup={false}
						/>
						<button
							className=" tw-w-max tw-h-max tw-block  tw-mx-7"
							onClick={showTeamLeadInput}>
							<IconEdit fill=" tw-fill-gray-600 dark:tw-fill-gray-400" />
						</button>
					</div>
					<div
						id="create_team_lead_inp_wrap"
						className=" tw-w-full tw-h-max tw-relative tw-hidden tw-mt-8 tw-mb-3">
						<div className=" tw-w-full tw-h-max tw-flex tw-flex-nowrap tw-justify-start tw-items-center">
							<input
								type="text"
								name="team_name"
								maxLength={100}
								id="team_lead_un_inp"
								placeholder="type username..."
								onChange={showTeamLeadSuggestion}
								className={` tw-basis-full tw-shrink tw-grow tw-font-exo tw-text-mygrey-default dark:tw-text-gray-400 tw-h-[45px] tw-border-[1px] tw-rounded tw-border-mygrey-v-lyt dark:tw-border-gray-500 tw-px-2 tw-text-xl dark:tw-bg-gray-800 focus:tw-outline focus:tw-outline-blue-300 focus:tw-outline-1 tw-inline`}
							/>
							<button
								className=" tw-w-max tw-h-max tw-mx-2"
								onClick={hideTeamLeadInput}>
								<IconCloseCropper fill=" tw-fill-gray-800 dark:tw-fill-gray-400" />
							</button>
						</div>
						<div
							id="team_users_suggest_wrap"
							className=" tw-w-full tw-max-h-[30vh]  tw-bg-blue-300 dark:tw-bg-blue-900 tw-rounded tw-p-5 tw-absolute tw-z-20 tw-top-[105%] tw-hidden">
							<div className=" tw-w-full tw-h-full tw-max-h-[28vh] tw-overflow-y-auto">
								<div
									className=" tw-my-3 tw-w-full tw-cursor-pointer"
									onClick={hideTeamLeadInput}>
									<ProjectMemberItem
										username="ManOfValor"
										fullname="Gidon Omorodion"
										role="Cloud Architect"
										img="/logo.png"
										dir="up"
										showPopup={false}
									/>
								</div>
								<div
									className=" tw-my-3 tw-w-full tw-cursor-pointer"
									onClick={hideTeamLeadInput}>
									<ProjectMemberItem
										username="ManOfValor"
										fullname="Gidon Omorodion"
										role="Cloud Architect"
										img="/logo.png"
										dir="up"
										showPopup={false}
									/>
								</div>
								<div
									className=" tw-my-3 tw-w-full tw-cursor-pointer"
									onClick={hideTeamLeadInput}>
									<ProjectMemberItem
										username="ManOfValor"
										fullname="Gidon Omorodion"
										role="Cloud Architect"
										img="/logo.png"
										dir="up"
										showPopup={false}
									/>
								</div>
								<div
									className=" tw-my-3 tw-w-full tw-cursor-pointer"
									onClick={hideTeamLeadInput}>
									<ProjectMemberItem
										username="ManOfValor"
										fullname="Gidon Omorodion"
										role="Cloud Architect"
										img="/logo.png"
										dir="up"
										showPopup={false}
									/>
								</div>
								<div
									className=" tw-my-3 tw-w-full tw-cursor-pointer"
									onClick={hideTeamLeadInput}>
									<ProjectMemberItem
										username="ManOfValor"
										fullname="Gidon Omorodion"
										role="Cloud Architect"
										img="/logo.png"
										dir="up"
										showPopup={false}
									/>
								</div>
								<div
									className=" tw-my-3 tw-w-full tw-cursor-pointer"
									onClick={hideTeamLeadInput}>
									<ProjectMemberItem
										username="ManOfValor"
										fullname="Gidon Omorodion"
										role="Cloud Architect"
										img="/logo.png"
										dir="up"
										showPopup={false}
									/>
								</div>
								<div
									className=" tw-my-3 tw-w-full tw-cursor-pointer"
									onClick={hideTeamLeadInput}>
									<ProjectMemberItem
										username="ManOfValor"
										fullname="Gidon Omorodion"
										role="Cloud Architect"
										img="/logo.png"
										dir="up"
										showPopup={false}
									/>
								</div>
								<div
									className=" tw-my-3 tw-w-full tw-cursor-pointer"
									onClick={hideTeamLeadInput}>
									<ProjectMemberItem
										username="ManOfValor"
										fullname="Gidon Omorodion"
										role="Cloud Architect"
										img="/logo.png"
										dir="up"
										showPopup={false}
									/>
								</div>
								<div
									className=" tw-my-3 tw-w-full tw-cursor-pointer"
									onClick={hideTeamLeadInput}>
									<ProjectMemberItem
										username="ManOfValor"
										fullname="Gidon Omorodion"
										role="Cloud Architect"
										img="/logo.png"
										dir="up"
										showPopup={false}
									/>
								</div>
								<div
									className=" tw-my-3 tw-w-full tw-cursor-pointer"
									onClick={hideTeamLeadInput}>
									<ProjectMemberItem
										username="ManOfValor"
										fullname="Gidon Omorodion"
										role="Cloud Architect"
										img="/logo.png"
										dir="up"
										showPopup={false}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="tw-w-full tw-h-max tw-pe-[19px]">
					<div className=" tw-relative">
						<div className=" tw-w-full tw-h-max tw-py-3 tw-flex tw-justify-start tw-items-center">
							<p className=" tw-basis-full tw-shrink tw-grow-0 tw-text-gray-800 dark:tw-text-gray-400 tw-text-[22px] tw-text-start tw-font-exo">
								Members
							</p>
							<button
								id="btn_show_team_mem_inp"
								className=" tw-w-max tw-h-max  tw-ms-1"
								onClick={showTeamMembersInput}>
								<IconPlus stroke="tw-stroke-gray-800 dark:tw-stroke-gray-400" />
							</button>
							<button
								id="btn_hide_team_mem_inp"
								className=" tw-w-max tw-h-max  tw-ms-1 tw-hidden"
								onClick={hideTeamMembersInput}>
								<IconCloseCropper fill="tw-fill-gray-800 dark:tw-fill-gray-400" />
							</button>
						</div>
						<div
							id="create_team_mem_inp_wrap"
							className=" tw-w-full tw-h-max tw-absolute tw-z-20 tw-top-[110%] tw-right-[0px] tw-hidden">
							<input
								type="text"
								name="team_name"
								maxLength={100}
								id="team_mem_un_inp"
								placeholder="type username..."
								onChange={showTeamMembersSuggestion}
								className={`tw-block tw-font-exo tw-text-mygrey-default dark:tw-text-gray-400 tw-max-w-[450px] tw-w-[100%] tw-h-[45px] tw-border-[1px] tw-rounded tw-border-mygrey-v-lyt dark:tw-border-gray-500 tw-px-2 tw-text-xl dark:tw-bg-gray-800 focus:tw-outline focus:tw-outline-blue-300 focus:tw-outline-1`}
							/>
							<div
								id="team_mem_users_suggest_wrap"
								className=" tw-w-full tw-max-h-[25vh]  tw-bg-blue-300 dark:tw-bg-blue-900 tw-rounded-b tw-py-5 tw-ps-5 tw-absolute tw-top-[102%] tw-hidden">
								<div className=" tw-w-full tw-h-full tw-max-h-[23vh] tw-overflow-y-auto">
									<div
										className=" tw-my-3 tw-w-full tw-cursor-pointer"
										onClick={hideTeamMembersInput}>
										<ProjectMemberItem
											username="ManOfValor"
											fullname="Gideon Omorodion"
											role="Cloud Architect"
											img="/logo.png"
											dir="up"
											showPopup={false}
										/>
									</div>
									<div
										className=" tw-my-3 tw-w-full tw-cursor-pointer"
										onClick={hideTeamMembersInput}>
										<ProjectMemberItem
											username="ManOfValor"
											fullname="Gideon Omorodion"
											role="Cloud Architect"
											img="/logo.png"
											dir="up"
											showPopup={false}
										/>
									</div>
									<div
										className=" tw-my-3 tw-w-full tw-cursor-pointer"
										onClick={hideTeamMembersInput}>
										<ProjectMemberItem
											username="ManOfValor"
											fullname="Gideon Omorodion"
											role="Cloud Architect"
											img="/logo.png"
											dir="up"
											showPopup={false}
										/>
									</div>
									<div
										className=" tw-my-3 tw-w-full tw-cursor-pointer"
										onClick={hideTeamMembersInput}>
										<ProjectMemberItem
											username="ManOfValor"
											fullname="Gideon Omorodion"
											role="Cloud Architect"
											img="/logo.png"
											dir="up"
											showPopup={false}
										/>
									</div>
									<div
										className=" tw-my-3 tw-w-full tw-cursor-pointer"
										onClick={hideTeamMembersInput}>
										<ProjectMemberItem
											username="ManOfValor"
											fullname="Gideon Omorodion"
											role="Cloud Architect"
											img="/logo.png"
											dir="up"
											showPopup={false}
										/>
									</div>
									<div
										className=" tw-my-3 tw-w-full tw-cursor-pointer"
										onClick={hideTeamMembersInput}>
										<ProjectMemberItem
											username="ManOfValor"
											fullname="Gideon Omorodion"
											role="Cloud Architect"
											img="/logo.png"
											dir="up"
											showPopup={false}
										/>
									</div>
									<div
										className=" tw-my-3 tw-w-full tw-cursor-pointer"
										onClick={hideTeamMembersInput}>
										<ProjectMemberItem
											username="ManOfValor"
											fullname="Gideon Omorodion"
											role="Cloud Architect"
											img="/logo.png"
											dir="up"
											showPopup={false}
										/>
									</div>
									<div
										className=" tw-my-3 tw-w-full tw-cursor-pointer"
										onClick={hideTeamMembersInput}>
										<ProjectMemberItem
											username="ManOfValor"
											fullname="Gideon Omorodion"
											role="Cloud Architect"
											img="/logo.png"
											dir="up"
											showPopup={false}
										/>
									</div>
									<div
										className=" tw-my-3 tw-w-full tw-cursor-pointer"
										onClick={hideTeamMembersInput}>
										<ProjectMemberItem
											username="ManOfValor"
											fullname="Gideon Omorodion"
											role="Cloud Architect"
											img="/logo.png"
											dir="up"
											showPopup={false}
										/>
									</div>
									<div
										className=" tw-my-3 tw-w-full tw-cursor-pointer"
										onClick={hideTeamMembersInput}>
										<ProjectMemberItem
											username="ManOfValor"
											fullname="Gideon Omorodion"
											role="Cloud Architect"
											img="/logo.png"
											dir="up"
											showPopup={false}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className=" tw-w-full tw-h-max tw-pb-12 tw-px-4">
					<NewTeamMemberUserPrevItem
						username="MANofVALOR"
						fullname="Gideon Omorodion"
						role="Cloud Architect"
						img="/logo.png"
						position="1"
					/>
					<NewTeamMemberUserPrevItem
						username="MANofVALOR"
						fullname="Gideon Omorodion"
						role="Cloud Architect"
						img="/logo.png"
						position="1"
					/>
					<NewTeamMemberUserPrevItem
						username="MANofVALOR"
						fullname="Gideon Omorodion"
						role="Cloud Architect"
						img="/logo.png"
						position="1"
					/>
					<NewTeamMemberUserPrevItem
						username="MANofVALOR"
						fullname="Gideon Omorodion"
						role="Cloud Architect"
						img="/logo.png"
						position="1"
					/>
					<NewTeamMemberUserPrevItem
						username="MANofVALOR"
						fullname="Gideon Omorodion"
						role="Cloud Architect"
						img="/logo.png"
						position="1"
					/>
					<NewTeamMemberUserPrevItem
						username="MANofVALOR"
						fullname="Gideon Omorodion"
						role="Cloud Architect"
						img="/logo.png"
						position="1"
					/>
					<NewTeamMemberUserPrevItem
						username="MANofVALOR"
						fullname="Gideon Omorodion"
						role="Cloud Architect"
						img="/logo.png"
						position="1"
					/>
					<NewTeamMemberUserPrevItem
						username="MANofVALOR"
						fullname="Gideon Omorodion"
						role="Cloud Architect"
						img="/logo.png"
						position="1"
					/>
				</div>
			</div>
			<button
				className=" tw-w-max tw-h-max tw-absolute tw-top-[35px] tw-right-[10px]"
				onClick={hideNewTeamPopup}>
				<IconCloseCropper fill="tw-fill-red-700" />
			</button>
			<button className=" tw-bg-blue-700 tw-text-[17px] tw-text-white tw-font-russo-one tw-rounded-br tw-rounded-tl tw-px-4 tw-py-2 tw-absolute tw-bottom-0 tw-right-0">
				proceed
			</button>
		</div>
	);
};

export default CreateNewTeamLayout;
