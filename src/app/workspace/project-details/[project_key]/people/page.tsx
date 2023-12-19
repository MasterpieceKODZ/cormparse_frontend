import ProjectPeopleAccordionItem from "@/ui_components/workspace/project-details/people/accordion.item";
import "../../../../../styles/add.person.css";
import AddPersonLayout from "@/ui_components/workspace/project-details/people/add.person.layout";
import BtnAddPersonToProject from "@/ui_components/workspace/project-details/people/btn.add.person";

const ProjectPeople = () => {
	return (
		<section className=" tw-basis-full tw-h-full tw-max-h-full tw-overflow-y-auto tw-ps-[10%] tw-pt-[110px] tw-pe-4 tw-pb-[100px] tw-relative">
			<ProjectPeopleAccordionItem
				label="Admins"
				rank="admin"
			/>
			<ProjectPeopleAccordionItem
				label="Other Members"
				rank="member"
			/>
			<BtnAddPersonToProject />
			<AddPersonLayout />
		</section>
	);
};

export default ProjectPeople;
