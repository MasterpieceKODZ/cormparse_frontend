/* eslint-disable @next/next/no-img-element */
import { projectsTableRowData } from "@/tailwind_classname_utils/workspace";
import HamburgerDots from "../../icons/hamburger.dots";

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
		<tr className=" tw-my-6 tw-h-max">
			<td
				className={`${projectsTableRowData} tw-max-w-[300px] 2xl:tw-max-w-[500px]`}>
				{name}
			</td>
			<td className={`${projectsTableRowData}`}>{projectKey}</td>
			<td>
				<div>
					<img
						src={`${leadImg}`}
						alt="lead D.P"
						className=" tw-inline tw-w-[30px] tw-h-[30px] tw-object-cover tw-rounded-[50%]"
					/>
					<p className={`${projectsTableRowData} tw-inline tw-ms-3`}>
						{leadName}
					</p>
				</div>
			</td>
			<td className={`${projectsTableRowData}`}>{dateCreated}</td>
			<td className={`${projectsTableRowData}`}>{dateUpdate}</td>
			<td className={`${projectsTableRowData}`}>
				<button>
					<HamburgerDots />
				</button>
			</td>
		</tr>
	);
};

export default ProjectsTableItem;
