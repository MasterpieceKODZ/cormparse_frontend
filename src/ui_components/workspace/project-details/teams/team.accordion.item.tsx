"use client";
import IconDownArrow from "@/ui_components/icons/down.arrow";
import ProjectMemberItem from "../user.item";
import { openTeamAccordion } from "@/ui_controllers/workspace/teams/open.close.accordion";
import IconEdit from "@/ui_components/icons/edit";
import IconCloseCropper from "@/ui_components/icons/close.cropper.icon";
import {
	closeEditTeamLeadPopup,
	openEditTeamLeadPopup,
	showEditTeamLeadSuggestionPopup,
} from "@/ui_controllers/workspace/teams/open.close.edt.lead.popup";
import IconPlus from "@/ui_components/icons/plus";
import {
	closeNewMemberInput,
	openNewMemberInput,
	showEditTeamMembersSuggestionPopup,
} from "@/ui_controllers/workspace/teams/add.member";
import TeamMemberUserItem from "./team.member.user.item";

const ProjectTeamAccordion = ({ index }: { index: string }) => {
	return (
		<div className=" tw-w-[60vw] tw-max-w-[800px] tw-max-h-[60vh] tw-my-[50px] tw-flex tw-flex-col tw-items-start tw-justify-start tw-border-2 tw-border-gray-300 dark:tw-border-gray-700 tw-rounded">
			<div
				className=" tw-w-full tw-h-max tw-flex tw-justify-start tw-py-4 tw-px-5 tw-items-center tw-flex-nowrap tw-border-b-2  tw-border-gray-300 dark:tw-border-gray-700"
				onClick={openTeamAccordion}>
				<p className=" tw-basis-full tw-shrink tw-grow-0 tw-mr-5 tw-text-[25px] tw-text-gray-800 dark:tw-text-gray-400">
					Frontend and UI Design
				</p>
				<div className="tw-mr-4 team_drop_icon">
					<IconDownArrow />
				</div>
			</div>
			<div className=" tw-w-full tw-overflow-y-auto tw-relative team_memb_list">
				<div className=" tw-relative tw-w-full tw-h-max tw-z-20 tw-py-8 tw-px-5">
					<div className=" tw-w-full tw-h-max tw-relative">
						<div className=" tw-w-full tw-flex tw-justify-start tw-items-center tw-mt-[50px] tw-relative">
							<p className=" tw-basis-full tw-shrink tw-grow-0 tw-text-start tw-text-gray-800 dark:tw-text-gray-400 tw-font-exo tw-font-semibold tw-inline tw-text-[17px]">
								lead
							</p>
							<button
								id={`btn_edt_team_lead_${index}`}
								className=" tw-mx-5 tw-w-max tw-h-max"
								onClick={() => openEditTeamLeadPopup(index)}>
								<IconEdit fill=" tw-fill-gray-800 dark:tw-fill-gray-400" />
							</button>
							<button
								id={`btn_cls_edt_team_lead_${index}`}
								className=" tw-mx-5 tw-w-max tw-h-max tw-hidden"
								onClick={() => closeEditTeamLeadPopup(index)}>
								<IconCloseCropper fill=" tw-fill-gray-800 dark:tw-fill-gray-400" />
							</button>
						</div>
						<div
							id={`edt_team_lead_popup_${index}`}
							className=" tw-w-full tw-max-w-[350px] tw-h-max tw-absolute tw-z-50 tw-top-[105%] tw-hidden tw-right-[15px]  popup">
							<input
								type="text"
								id={`edt_team_lead_inp_${index}`}
								maxLength={100}
								onChange={() => showEditTeamLeadSuggestionPopup(index)}
								placeholder="type username..."
								className={` tw-w-full tw-font-exo tw-text-mygrey-default dark:tw-text-gray-400 tw-h-[45px] tw-border-[1px] tw-rounded tw-border-mygrey-v-lyt dark:tw-border-gray-500 tw-px-2 tw-text-xl dark:tw-bg-gray-800 focus:tw-outline focus:tw-outline-blue-300 focus:tw-outline-1 tw-block`}
							/>
							<div
								id={`edt_team_lead_sug_popup_${index}`}
								className=" tw-absolute tw-top-[105%] tw-right-0 tw-z-50 tw-w-full tw-h-max tw-max-h-[250px] tw-py-4 tw-px-2 tw-rounded-b tw-bg-blue-200 dark:tw-bg-blue-950 tw-overflow-x-hidden tw-overflow-y-auto tw-hidden">
								<div
									className=" tw-my-3 tw-w-full tw-cursor-pointer"
									onClick={() => closeEditTeamLeadPopup(index)}>
									<ProjectMemberItem
										username="ManOfValor"
										fullname="Gideon Omorodion"
										role="Cloud Architect"
										img="/logo.png"
										dir="down"
										showPopup={false}
									/>
								</div>
								<div
									className=" tw-my-3 tw-w-full tw-cursor-pointer"
									onClick={() => closeEditTeamLeadPopup(index)}>
									<ProjectMemberItem
										username="ManOfValor"
										fullname="Gideon Omorodion"
										role="Cloud Architect"
										img="/logo.png"
										dir="down"
										showPopup={false}
									/>
								</div>
								<div
									className=" tw-my-3 tw-w-full tw-cursor-pointer"
									onClick={() => closeEditTeamLeadPopup(index)}>
									<ProjectMemberItem
										username="ManOfValor"
										fullname="Gideon Omorodion"
										role="Cloud Architect"
										img="/logo.png"
										dir="down"
										showPopup={false}
									/>
								</div>
								<div
									className=" tw-my-3 tw-w-full tw-cursor-pointer"
									onClick={() => closeEditTeamLeadPopup(index)}>
									<ProjectMemberItem
										username="ManOfValor"
										fullname="Gideon Omorodion"
										role="Cloud Architect"
										img="/logo.png"
										dir="down"
										showPopup={false}
									/>
								</div>
								<div
									className=" tw-my-3 tw-w-full tw-cursor-pointer"
									onClick={() => closeEditTeamLeadPopup(index)}>
									<ProjectMemberItem
										username="ManOfValor"
										fullname="Gideon Omorodion"
										role="Cloud Architect"
										img="/logo.png"
										dir="down"
										showPopup={false}
									/>
								</div>
								<div
									className=" tw-my-3 tw-w-full tw-cursor-pointer"
									onClick={() => closeEditTeamLeadPopup(index)}>
									<ProjectMemberItem
										username="ManOfValor"
										fullname="Gideon Omorodion"
										role="Cloud Architect"
										img="/logo.png"
										dir="down"
										showPopup={false}
									/>
								</div>
								<div
									className=" tw-my-3 tw-w-full tw-cursor-pointer"
									onClick={() => closeEditTeamLeadPopup(index)}>
									<ProjectMemberItem
										username="ManOfValor"
										fullname="Gideon Omorodion"
										role="Cloud Architect"
										img="/logo.png"
										dir="down"
										showPopup={false}
									/>
								</div>
								<div
									className=" tw-my-3 tw-w-full tw-cursor-pointer"
									onClick={() => closeEditTeamLeadPopup(index)}>
									<ProjectMemberItem
										username="ManOfValor"
										fullname="Gideon Omorodion"
										role="Cloud Architect"
										img="/logo.png"
										dir="down"
										showPopup={false}
									/>
								</div>
								<div
									className=" tw-my-3 tw-w-full tw-cursor-pointer"
									onClick={() => closeEditTeamLeadPopup(index)}>
									<ProjectMemberItem
										username="ManOfValor"
										fullname="Gideon Omorodion"
										role="Cloud Architect"
										img="/logo.png"
										dir="down"
										showPopup={false}
									/>
								</div>
								<div
									className=" tw-my-3 tw-w-full tw-cursor-pointer"
									onClick={() => closeEditTeamLeadPopup(index)}>
									<ProjectMemberItem
										username="ManOfValor"
										fullname="Gideon Omorodion"
										role="Cloud Architect"
										img="/logo.png"
										dir="down"
										showPopup={false}
									/>
								</div>
							</div>
						</div>
					</div>
					<TeamMemberUserItem
						username="MasterpieceKODZ"
						fullname="Gideon Omorodion"
						role="Fullstack Developer"
						img="/logo.png"
						index={index}
						rank="lead"
						position="xx"
					/>

					<div className=" tw-w-full tw-h-max tw-relative">
						<div className=" tw-w-full tw-flex tw-justify-start tw-items-center tw-mt-[50px] tw-relative">
							<p className=" tw-basis-full tw-shrink tw-grow-0 tw-text-start tw-text-gray-800 dark:tw-text-gray-400 tw-font-exo tw-font-semibold tw-inline tw-text-[17px]">
								other members
							</p>
							<button
								id={`btn_edt_team_mem_${index}`}
								className=" tw-mx-5 tw-w-max tw-h-max"
								onClick={() => openNewMemberInput(index)}>
								<IconPlus stroke=" tw-stroke-gray-800 dark:tw-stroke-gray-400" />
							</button>
							<button
								id={`btn_cls_edt_team_mem_${index}`}
								className=" tw-mx-5 tw-w-max tw-h-max tw-hidden"
								onClick={() => closeNewMemberInput(index)}>
								<IconCloseCropper fill=" tw-fill-gray-800 dark:tw-fill-gray-400" />
							</button>
						</div>
						<div
							id={`edt_team_mem_popup_${index}`}
							className=" tw-w-full tw-max-w-[350px] tw-h-max tw-absolute tw-z-50 tw-top-[105%] tw-hidden tw-right-[15px]  popup">
							<input
								type="text"
								id={`edt_team_mem_inp_${index}`}
								maxLength={100}
								onChange={() => showEditTeamMembersSuggestionPopup(index)}
								placeholder="type username..."
								className={` tw-w-full tw-font-exo tw-text-mygrey-default dark:tw-text-gray-400 tw-h-[45px] tw-border-[1px] tw-rounded tw-border-mygrey-v-lyt dark:tw-border-gray-500 tw-px-2 tw-text-xl dark:tw-bg-gray-800 focus:tw-outline focus:tw-outline-blue-300 focus:tw-outline-1 tw-block`}
							/>
							<div
								id={`edt_team_mem_sug_popup_${index}`}
								className=" tw-absolute tw-top-[105%] tw-right-0 tw-z-50 tw-w-full tw-h-max tw-max-h-[250px] tw-py-4 tw-px-2 tw-rounded-b tw-bg-blue-200 dark:tw-bg-blue-950 tw-overflow-x-hidden tw-overflow-y-auto tw-hidden">
								<div
									className=" tw-my-3 tw-w-full tw-cursor-pointer"
									onClick={() => closeNewMemberInput(index)}>
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
									onClick={() => closeNewMemberInput(index)}>
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
									onClick={() => closeNewMemberInput(index)}>
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
									onClick={() => closeNewMemberInput(index)}>
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
									onClick={() => closeNewMemberInput(index)}>
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
									onClick={() => closeNewMemberInput(index)}>
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
									onClick={() => closeNewMemberInput(index)}>
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
									onClick={() => closeNewMemberInput(index)}>
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
									onClick={() => closeNewMemberInput(index)}>
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
									onClick={() => closeNewMemberInput(index)}>
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
									onClick={() => closeNewMemberInput(index)}>
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
					<div className=" tw-ms-6">
						<TeamMemberUserItem
							username="valarie_mansa"
							fullname="Victoria Major"
							role="Data Analyst"
							img="/logo.png"
							rank="member"
							index={index}
							position="1"
						/>
						<TeamMemberUserItem
							username="valarie_mansa"
							fullname="Victoria Major"
							role="Data Analyst"
							img="/logo.png"
							rank="member"
							index={index}
							position="1"
						/>
						<TeamMemberUserItem
							username="valarie_mansa"
							fullname="Victoria Major"
							role="Data Analyst"
							img="/logo.png"
							rank="member"
							index={index}
							position="1"
						/>
						<TeamMemberUserItem
							username="valarie_mansa"
							fullname="Victoria Major"
							role="Data Analyst"
							img="/logo.png"
							rank="member"
							index={index}
							position="1"
						/>
						<TeamMemberUserItem
							username="valarie_mansa"
							fullname="Victoria Major"
							role="Data Analyst"
							img="/logo.png"
							rank="member"
							index={index}
							position="1"
						/>
						<TeamMemberUserItem
							username="valarie_mansa"
							fullname="Victoria Major"
							role="Data Analyst"
							img="/logo.png"
							rank="member"
							index={index}
							position="1"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectTeamAccordion;
