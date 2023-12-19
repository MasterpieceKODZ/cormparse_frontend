import BtnCreateNewTeam from "@/ui_components/workspace/project-details/teams/btn.new.team";
import CreateNewTeamLayout from "@/ui_components/workspace/project-details/teams/new.team.layout";
import ProjectTeamAccordion from "@/ui_components/workspace/project-details/teams/team.accordion.item";

const ProjectTeams = () => {
	return (
		<section className=" tw-basis-full tw-h-full tw-max-h-full tw-overflow-y-auto tw-ps-[10%] tw-pt-[110px] tw-pe-4 tw-pb-[100px] tw-relative">
			<ProjectTeamAccordion index="1" />
			<ProjectTeamAccordion index="2" />
			<ProjectTeamAccordion index="3" />
			<BtnCreateNewTeam />
			<CreateNewTeamLayout />
		</section>
	);
};

export default ProjectTeams;
