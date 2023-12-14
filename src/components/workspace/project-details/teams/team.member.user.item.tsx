import ProjectMemberItem from "../user.item";
import IconHamburgerDots from "@/components/icons/hamburger.dots";
import IconCloseCropper from "@/components/icons/close.cropper.icon";
import { initiateTeamLeadDemotion } from "@/ui_controllers/workspace/teams/demote.lead";
import {
	closeTeamMemberOptionsPopup,
	showTeamMemberOptionsPopup,
} from "@/ui_controllers/workspace/teams/open.close.edit.members";
import { removeUserFromTeam } from "@/ui_controllers/workspace/teams/remove.user";
import {
	hideTeamLeadOptionsPopup,
	showTeamLeadOptionsPopup,
} from "@/ui_controllers/workspace/teams/lead.user.options.handlers";
import {
	initiateTeamMemberPromotion,
	promoteTeamMemberToLead,
} from "@/ui_controllers/workspace/teams/promote.member";

const TeamMemberUserItem = ({
	name,
	role,
	img,
	index,
	rank,
	position,
}: {
	name: string;
	role: string;
	img: string;
	index: string;
	rank: string;
	position: string;
}) => {
	return (
		<div className=" tw-px-6 tw-mt-[40px] tw-flex tw-w-full tw-h-max tw-justify-start tw-items-center">
			<div className=" tw-basis-full tw-shrink tw-grow-0 tw-flex tw-justify-start tw-items-center">
				<ProjectMemberItem
					name={name}
					role={role}
					img={img}
					showPopup={true}
				/>
			</div>
			<div className=" tw-w-max tw-h-max tw-relative">
				<button
					id={
						rank == "lead"
							? `btn_team_lead_opt_${index}`
							: `btn_team_mem_opt_${index}_${position}`
					}
					className=" tw-w-max tw-h-max tw-mx-4 tw-min-w-[20px]"
					onClick={
						rank == "lead"
							? () => showTeamLeadOptionsPopup(index)
							: () => showTeamMemberOptionsPopup(index, position)
					}>
					<IconHamburgerDots />
				</button>
				<button
					id={
						rank == "lead"
							? `btn_cls_team_lead_opt_${index}`
							: `btn_cls_team_mem_opt_${index}_${position}`
					}
					className=" tw-w-max tw-h-max tw-mx-4 tw-hidden"
					onClick={
						rank == "lead"
							? () => hideTeamLeadOptionsPopup(index)
							: () => closeTeamMemberOptionsPopup(index, position)
					}>
					<IconCloseCropper fill="tw-fill-gray-800 dark:tw-fill-gray-400" />
				</button>
				<div
					id={
						rank == "lead"
							? `team_lead_opt_popup_${index}`
							: `team_mem_opt_popup_${index}_${position}`
					}
					className=" tw-w-max tw-px-3 tw-absolute tw-top-0 tw-z-50 tw-right-[110%] tw-rounded tw-bg-red-100 dark:tw-bg-red-950 tw-min-w-[150px] tw-hidden popup">
					<button
						className=" tw-text-gray-700 dark:tw-text-gray-100 tw-text-[16px] tw-font-russo-one tw-my-5 tw-block tw-w-full"
						onClick={
							rank == "lead"
								? () => initiateTeamLeadDemotion(index, name)
								: () => initiateTeamMemberPromotion(index, name, position)
						}>
						{rank == "lead" ? "demote" : "promote"}
					</button>
					<button
						className=" tw-text-gray-700 dark:tw-text-gray-100 tw-text-[16px] tw-font-russo-one tw-my-5 tw-block tw-w-full"
						onClick={() => removeUserFromTeam(index, name, rank, position)}>
						remove
					</button>
				</div>
				<div
					id={
						rank == "lead"
							? `team_lead_opt_conf_popup_${index}`
							: `team_mem_opt_conf_popup_${index}_${position}`
					}
					className=" tw-w-[350px] tw-h-max tw-py-4 tw-absolute tw-top-0 tw-right-[110%] tw-z-50 tw-rounded tw-bg-red-100 dark:tw-bg-red-950 tw-hidden popup tw-px-3">
					<p
						id={
							rank == "lead"
								? `team_lead_opt_conf_txt_${index}`
								: `team_mem_opt_conf_txt_${index}_${position}`
						}
						className=" tw-w-full tw-text-center tw-text-[17px] tw-text-gray-800 dark:tw-text-gray-100 tw-font-exo">
						are you sure you want to demote this user as the team lead?
					</p>
					<div className=" tw-w-full tw-h-max tw-mt-4 tw-flex tw-justify-between tw-items-center">
						<button
							className=" tw-px-3 tw-py-1 tw-ms-2 tw-bg-red-800 dark:tw-bg-black tw-text-white tw-font-russo-one tw-text-[16px] tw-block tw-rounded-lg"
							onClick={
								rank == "lead"
									? () => hideTeamLeadOptionsPopup(index)
									: () => closeTeamMemberOptionsPopup(index, position)
							}>
							cancel
						</button>
						<button
							className=" tw-px-3 tw-py-1 tw-me-2 tw-bg-green-600 tw-text-white tw-font-russo-one tw-text-[16px] tw-block tw-rounded-lg"
							onClick={
								rank == "lead"
									? () => hideTeamLeadOptionsPopup(index)
									: () => promoteTeamMemberToLead(index, name, position)
							}>
							proceed
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamMemberUserItem;
