import ProjectDetailsLeftNavPane from "@/components/workspace/project-details/left.nav.pane";
import "../../../styles/project.details.css";
const ProjectDetailsLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className=" tw-w-full tw-h-full">
			<ProjectDetailsLeftNavPane name="Project Ambassadors Extraction" />
			{children}
		</section>
	);
};

export default ProjectDetailsLayout;
