import IconDeleteLeft from "@/components/icons/delete.left";
import ProjectMemberItem from "../user.item";

const NewTeamMemberUserPrevItem = ({
	name,
	role,
	img,
	position,
}: {
	name: string;
	role: string;
	img: string;
	position: string;
}) => {
	return (
		<div className=" tw-w-full tw-h-max tw-flex tw-justify-start tw-items-center">
			<div className=" tw-basis-full tw-shrink tw-grow-0">
				<ProjectMemberItem
					name={name}
					role={role}
					img={img}
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
