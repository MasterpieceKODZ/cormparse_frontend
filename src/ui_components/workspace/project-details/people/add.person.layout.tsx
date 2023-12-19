"use client";

import IconCloseCropper from "@/ui_components/icons/close.cropper.icon";
import { hideNewTeamPopup } from "@/ui_controllers/workspace/teams/open.close.new.team.popup";
import IconDownArrow from "@/ui_components/icons/down.arrow";
import { toggleNewPersonRank } from "@/ui_controllers/workspace/people/open.close.new.person.rank";
import { selectNewPersonRank } from "@/ui_controllers/workspace/people/new.person.rank.btn.clicked";
import IconPlus from "@/ui_components/icons/plus";
import {
	hideAddProjectPeopleInput,
	showAddProjectPeopleInput,
} from "@/ui_controllers/workspace/people/show.hide.new.person.input";
import ProjectMemberItem from "../user.item";
import { showProjectPersonSuggestion } from "@/ui_controllers/workspace/people/find.person";
import NewTeamMemberUserPrevItem from "../teams/new.team.member.prev.item";
import NewProjectPersonPrevItem from "./new.project.person.item";

const AddPersonLayout = () => {
	return (
		<div
			id="new_team_popup"
			className=" tw-min-w-[310px] tw-w-full tw-max-w-[500px] tw-pt-8 tw-ps-4 tw-h-[75vh] tw-border-2 tw-z-40 tw-border-gray-500 tw-bg-gray-200 dark:tw-bg-gray-700 tw-rounded tw-absolute tw-top-[12vh] tw-right-[30px] tw-overflow-hidden tw-flex-col tw-justify-start tw-items-start tw-hidden popup">
			<h3 className=" tw-w-full tw-h-max tw-text-center tw-text-[24px] tw-font-exo tw-mb-3 tw-text-gray-800 dark:tw-text-gray-400">
				Add People To Project
			</h3>
			<div className=" tw-w-full tw-basis-full tw-max-h-[97%] tw-overflow-y-auto tw-shrink tw-grow-0">
				<div className=" tw-w-full tw-px-2 tw-flex tw-flex-col tw-justify-start tw-items-start tw-mt-[50px] tw-relative">
					<button
						className=" tw-w-full tw-h-max tw-px-1 tw-flex tw-justify-start tw-items-center tw-font-exo tw-text-[20px] tw-text-gray-800 dark:tw-text-gray-400"
						onClick={toggleNewPersonRank}>
						<span className=" tw-basis-full tw-text-start">Select Rank</span>
						<span
							id="icn_arrw_nw_prsn_rank"
							className=" tw-me-[30px]">
							<IconDownArrow />
						</span>
					</button>
					<div className=" tw-w-full tw-max-w-[350px] tw-h-max tw-ms-3 tw-px-5 tw-overflow-hidden drop_dwn_prjct_person_rank">
						<button
							className=" tw-w-max tw-h-max tw-block tw-mt-6 tw-mb-4 tw-text-start tw-font-russo-one tw-text-[18px] tw-text-gray-800 dark:tw-text-gray-400 btn_prjct_person_rank"
							onClick={selectNewPersonRank}>
							Lead
						</button>
						<button
							className=" tw-w-max tw-h-max tw-mt-4 tw-mb-6 tw-block tw-text-start tw-font-russo-one tw-text-[18px] tw-text-gray-800 dark:tw-text-gray-400 btn_prjct_person_rank"
							onClick={selectNewPersonRank}>
							Member
						</button>
					</div>
				</div>
				{/* rank end */}

				<div className=" tw-w-full tw-h-max tw-px-[14px]">
					<div className=" tw-w-full tw-h-max tw-max-h-[25vh] tw-mt-[20px]">
						<div className=" tw-relative">
							<div className=" tw-w-full tw-h-max tw-py-3 tw-flex tw-justify-start tw-items-center">
								<p className=" tw-basis-full tw-shrink tw-grow-0 tw-text-gray-800 dark:tw-text-gray-400 tw-text-[20px] tw-font-exo">
									People
								</p>
								<button
									id="btn_show_projc_prsn_inp"
									className=" tw-w-max tw-h-max tw-me-6 tw-ms-3"
									onClick={showAddProjectPeopleInput}>
									<IconPlus stroke="tw-stroke-gray-800 dark:tw-stroke-gray-400" />
								</button>
								<button
									id="btn_hide_prjct_prsn_inp"
									className=" tw-w-max tw-h-max tw-me-6 tw-ms-3 tw-hidden"
									onClick={hideAddProjectPeopleInput}>
									<IconCloseCropper fill="tw-fill-gray-800 dark:tw-fill-gray-400" />
								</button>
							</div>
							<div
								id="add_prsn_inp_wrap"
								className=" tw-w-full tw-h-max tw-absolute tw-z-20 tw-top-[110%] tw-right-[0px] tw-hidden">
								<input
									type="text"
									name="team_name"
									maxLength={100}
									id="prjct_prsn_un_inp"
									placeholder="type username..."
									onChange={showProjectPersonSuggestion}
									className={`tw-block tw-font-exo tw-text-mygrey-default dark:tw-text-gray-400 tw-max-w-[450px] tw-w-[100%] tw-h-[45px] tw-border-[1px] tw-rounded tw-border-mygrey-v-lyt dark:tw-border-gray-500 tw-px-2 tw-text-xl dark:tw-bg-gray-800 focus:tw-outline focus:tw-outline-blue-300 focus:tw-outline-1`}
								/>
								<div
									id="prjct_prsn_users_suggest_wrap"
									className=" tw-w-full tw-max-h-[25vh]  tw-bg-blue-300 dark:tw-bg-blue-900 tw-rounded-b tw-py-5 tw-ps-5 tw-absolute tw-top-[102%] tw-hidden">
									<div className=" tw-w-full tw-h-full tw-max-h-[23vh] tw-overflow-y-auto">
										<div
											className=" tw-my-3 tw-w-full tw-cursor-pointer"
											onClick={hideAddProjectPeopleInput}>
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
											onClick={hideAddProjectPeopleInput}>
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
											onClick={hideAddProjectPeopleInput}>
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
											onClick={hideAddProjectPeopleInput}>
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
											onClick={hideAddProjectPeopleInput}>
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
											onClick={hideAddProjectPeopleInput}>
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
											onClick={hideAddProjectPeopleInput}>
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
				</div>
				<div className=" tw-w-full tw-h-max tw-pb-12 tw-px-8">
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
						position="2"
					/>
					<NewTeamMemberUserPrevItem
						username="MANofVALOR"
						fullname="Gideon Omorodion"
						role="Cloud Architect"
						img="/logo.png"
						position="3"
					/>
					<NewTeamMemberUserPrevItem
						username="MANofVALOR"
						fullname="Gideon Omorodion"
						role="Cloud Architect"
						img="/logo.png"
						position="3"
					/>
					<NewTeamMemberUserPrevItem
						username="MANofVALOR"
						fullname="Gideon Omorodion"
						role="Cloud Architect"
						img="/logo.png"
						position="3"
					/>
					<NewTeamMemberUserPrevItem
						username="MANofVALOR"
						fullname="Gideon Omorodion"
						role="Cloud Architect"
						img="/logo.png"
						position="3"
					/>
					<NewTeamMemberUserPrevItem
						username="MANofVALOR"
						fullname="Gideon Omorodion"
						role="Cloud Architect"
						img="/logo.png"
						position="3"
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

export default AddPersonLayout;
