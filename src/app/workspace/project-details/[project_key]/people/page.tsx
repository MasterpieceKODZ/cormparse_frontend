import ProjectPeopleAccordionItem from "@/components/workspace/project-details/people.accordion.item";

const ProjectPeople = () => {
	return (
		<section className="tw-w-full tw-h-full tw-max-h-full tw-overflow-y-auto tw-ps-[10%] tw-pt-[110px] tw-pe-4 tw-pb-[100px]">
			<ProjectPeopleAccordionItem />
			<ProjectPeopleAccordionItem />
		</section>
	);
};

export default ProjectPeople;
