/* eslint-disable @next/next/no-img-element */
import { projectsTableRowData } from "@/tailwind_classname_utils/workspace";
import Link from "next/link";
import IconEdit from "@/ui_components/icons/edit";
import ProjectMemberItem from "../project-details/user.item";

const ProjectsTableItem = ({
	name,
	projectKey,
	leadName,
	leadImg,
	dateCreated,
	dateUpdate,
}: {
	name: string;
	projectKey: string;
	leadName: string;
	leadImg: string;
	dateCreated: string;
	dateUpdate: string;
}) => {
	return (
		<tr className=" tw-my-6 tw-h-max hover:tw-bg-gray-200 dark:hover:tw-bg-gray-700">
			<td
				className={`${projectsTableRowData} tw-max-w-[300px] 2xl:tw-max-w-[500px] tw-cursor-pointer`}>
				<Link
					href={`/workspace/project-details/${projectKey}`}
					className=" tw-text-blue-800 tw-no-underline tw-text-[15px]">
					{name}
				</Link>
			</td>
			<td className={`${projectsTableRowData}`}>{projectKey}</td>
			<td>
				<div>
					<ProjectMemberItem
						username="ManOfValor"
						fullname="Wale Oluwajoba"
						role="Cloud Architect"
						img="/logo.png"
						showPopup
						dir="down"
					/>
				</div>
			</td>
			<td className={`${projectsTableRowData}`}>{dateCreated}</td>
			<td className={`${projectsTableRowData}`}>{dateUpdate}</td>
			<td className={`${projectsTableRowData}`}>
				<div className=" tw-w-max tw-h-max tw-relative">
					<Link
						className=" tw-w-max tw-h-max tw-no-underline"
						href={`/workspace/project-details/${projectKey}/setting`}>
						<IconEdit fill="tw-fill-gray-800 dark:tw-fill-gray-400" />
					</Link>
				</div>
			</td>
		</tr>
	);
};

export default ProjectsTableItem;
