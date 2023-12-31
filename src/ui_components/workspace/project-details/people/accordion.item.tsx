"use client";
import IconDownArrow from "@/ui_components/icons/down.arrow";
import { openClosePeopleAccordion } from "@/ui_controllers/workspace/people/open.close.accordion";
import ProjectPeopleUserItem from "./accordion.list.user.item";

const ProjectPeopleAccordionItem = ({
	label,
	rank,
}: {
	label: string;
	rank: string;
}) => {
	return (
		<div className=" tw-w-[60vw] tw-max-w-[800px] tw-max-h-[60vh] tw-my-[50px] tw-flex tw-flex-col tw-items-start tw-justify-start tw-border-2 tw-border-gray-300 dark:tw-border-gray-700 tw-rounded">
			<div
				className=" tw-w-full tw-h-max tw-flex tw-justify-start tw-py-4 tw-px-5 tw-items-center tw-flex-nowrap tw-border-b-2  tw-border-gray-300 dark:tw-border-gray-700"
				onClick={openClosePeopleAccordion}>
				<p className=" tw-basis-full tw-shrink tw-grow-0 tw-mr-5 tw-text-[25px] tw-text-gray-800 dark:tw-text-gray-400">
					{label}
				</p>
				<div className="tw-mr-4 people_drop_icon">
					<IconDownArrow fill="tw-fill-gray-800 dark:tw-fill-gray-400" />
				</div>
			</div>
			<div className=" tw-w-full tw-overflow-y-auto tw-relative people_memb_list">
				<div className=" tw-relative tw-w-full tw-h-max tw-z-20 tw-py-2 tw-px-5">
					<div className=" tw-ms-6">
						<ProjectPeopleUserItem
							fullname="Nicholas Benedict"
							username="Nicholaz"
							role="Cyber-Security Engineer"
							img="/logo.png"
							rank={rank}
							position="1"
						/>
						<ProjectPeopleUserItem
							fullname="Nicholas Benedict"
							username="Nicholaz"
							role="Cyber-Security Engineer"
							img="/logo.png"
							rank={rank}
							position="1"
						/>
						<ProjectPeopleUserItem
							fullname="Nicholas Benedict"
							username="Nicholaz"
							role="Cyber-Security Engineer"
							img="/logo.png"
							rank={rank}
							position="1"
						/>
						<ProjectPeopleUserItem
							fullname="Nicholas Benedict"
							username="Nicholaz"
							role="Cyber-Security Engineer"
							img="/logo.png"
							rank={rank}
							position="1"
						/>
						<ProjectPeopleUserItem
							fullname="Nicholas Benedict"
							username="Nicholaz"
							role="Cyber-Security Engineer"
							img="/logo.png"
							rank={rank}
							position="1"
						/>
						<ProjectPeopleUserItem
							fullname="Nicholas Benedict"
							username="Nicholaz"
							role="Cyber-Security Engineer"
							img="/logo.png"
							rank={rank}
							position="1"
						/>
						<ProjectPeopleUserItem
							fullname="Nicholas Benedict"
							username="Nicholaz"
							role="Cyber-Security Engineer"
							img="/logo.png"
							rank={rank}
							position="1"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectPeopleAccordionItem;
