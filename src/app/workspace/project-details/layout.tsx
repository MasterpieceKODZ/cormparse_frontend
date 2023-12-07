import ProjectDetailsLeftNavPane from "@/components/workspace/project-details/left.nav.pane";
import "../../../styles/project.details.css";
const ProjectDetailsLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className=" tw-w-full tw-max-h-[91.3vh] tw-h-[91.3vh] tw-flex tw-justify-start tw-items-center tw-flex-nowrap">
			<ProjectDetailsLeftNavPane name="Project Ambassadors Extraction" />
			{children}
		</section>
	);
};

export default ProjectDetailsLayout;
