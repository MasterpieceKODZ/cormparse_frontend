import IconDeleteLeft from "@/ui_components/icons/delete.left";
import ProjectMemberItem from "../user.item";

const NewTeamMemberUserPrevItem = ({
	username,
	fullname,
	role,
	img,
	position,
}: {
	username: string;
	fullname: string;
	role: string;
	img: string;
	position: string;
}) => {
	return (
		<div className=" tw-w-full tw-h-max tw-flex tw-justify-start tw-items-center">
			<div className=" tw-basis-full tw-shrink tw-grow-0">
				<ProjectMemberItem
					username={username}
					fullname={fullname}
					role={role}
					img={img}
					dir="up"
					showPopup={false}
				/>
			</div>
			<button className=" tw-w-max tw-h-max tw-mx-5">
				<IconDeleteLeft />
			</button>
		</div>
	);
};

export default NewTeamMemberUserPrevItem;
