import BtnCreateNewTeam from "@/components/workspace/project-details/btn.new.team";
import CreateNewTeamLayout from "@/components/workspace/project-details/new.team.layout";
import ProjectTeamAccordion from "@/components/workspace/project-details/team.accordion.item";

const ProjectTeams = () => {
	return (
		<section className="tw-w-full tw-h-full tw-max-h-full tw-overflow-y-auto tw-ps-[10%] tw-pt-[110px] tw-pe-4 tw-pb-[100px] tw-relative">
			<ProjectTeamAccordion />
			<ProjectTeamAccordion />
			<ProjectTeamAccordion />
			<BtnCreateNewTeam />
			<CreateNewTeamLayout />
		</section>
	);
};

export default ProjectTeams;
