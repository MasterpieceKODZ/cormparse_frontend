import ProjectDetailsLeftNavPane from "@/ui_components/workspace/project-details/left.nav.pane";
import "../../../../styles/project.details.css";
import "../../../../styles/new.issue.css";
import "../../../../styles/issue.detail.css";
const ProjectDetailsLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className=" tw-w-[100vw]  tw-h-full tw-grid tw-grid-cols-[auto_1fr]">
			<ProjectDetailsLeftNavPane name="Project Ambassadors Extraction" />
			{children}
		</section>
	);
};

export default ProjectDetailsLayout;
