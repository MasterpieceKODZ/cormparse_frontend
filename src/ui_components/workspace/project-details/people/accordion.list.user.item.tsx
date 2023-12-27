import IconDeleteLeft from "@/ui_components/icons/delete.left";
import ProjectMemberItem from "../user.item";
import {
	confirmRemoveUserFromProject,
	hideRemovePersonPopup,
	showRemovePersonPopup,
} from "@/ui_controllers/workspace/people/remove.person";

const ProjectPeopleUserItem = ({
	username,
	fullname,
	role,
	img,
	rank,
	position,
}: {
	username: string;
	fullname: string;
	role: string;
	img: string;
	rank: string;
	position: string;
}) => {
	return (
		<div className=" tw-w-full tw-h-max tw-flex tw-justify-start tw-items-center tw-mt-[15px]">
			<div className=" tw-basis-full">
				<ProjectMemberItem
					username={username}
					fullname={fullname}
					role={role}
					dir="down"
					img={img}
					showPopup={true}
				/>
			</div>
			<div className=" tw-w-max tw-h-max tw-relative">
				<button
					className=" tw-w-max tw-h-max tw-mx-3"
					onClick={() => showRemovePersonPopup(rank, position)}>
					<IconDeleteLeft />
				</button>
				<div
					id={`rmv_prj_usr_${rank}_${position}`}
					className=" tw-w-[350px] tw-h-max tw-py-4 tw-absolute tw-top-0 tw-right-[110%] tw-z-50 tw-rounded tw-bg-red-100 dark:tw-bg-red-950 popup tw-hidden tw-px-3 rmv_prj_usr">
					<p className=" tw-w-full tw-text-center tw-text-[17px] tw-text-gray-800 dark:tw-text-gray-100 tw-font-exo">
						are you sure you want to remove this user from this project?
					</p>
					<div className=" tw-w-full tw-h-max tw-mt-4 tw-flex tw-justify-between tw-items-center">
						<button
							className=" tw-px-3 tw-py-1 tw-ms-2 tw-bg-red-800 dark:tw-bg-black tw-text-white tw-font-russo-one tw-text-[16px] tw-block tw-rounded-lg"
							onClick={hideRemovePersonPopup}>
							cancel
						</button>
						<button
							className=" tw-px-3 tw-py-1 tw-me-2 tw-bg-green-600 tw-text-white tw-font-russo-one tw-text-[16px] tw-block tw-rounded-lg"
							onClick={confirmRemoveUserFromProject}>
							proceed
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectPeopleUserItem;
