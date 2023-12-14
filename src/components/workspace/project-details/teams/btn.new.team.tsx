"use client";
import IconPlus from "@/components/icons/plus";
import { showNewTeamPopup } from "@/ui_controllers/workspace/teams/open.close.new.team.popup";

const BtnCreateNewTeam = () => {
	return (
		<button
			className=" tw-py-2 tw-px-6 tw-bg-secondary tw-text-white tw-text-[20px] tw-font-russo-one tw-absolute tw-top-[40px] tw-right-[30px] tw-rounded tw-text-center"
			onClick={showNewTeamPopup}>
			<span>
				<IconPlus stroke="tw-stroke-white" />
			</span>
			<span className=" tw-ms-4">New Team</span>
		</button>
	);
};

export default BtnCreateNewTeam;
