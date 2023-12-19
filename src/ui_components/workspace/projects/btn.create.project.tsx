import IconPlus from "@/ui_components/icons/plus";
import Link from "next/link";

const ButtonCreateNewProject = () => {
	return (
		<Link
			href={`/workspace/create-new-project`}
			className=" tw-bg-secondary tw-no-underline tw-rounded-lg tw-py-1.5 tw-px-5">
			<span className=" tw-mr-2">
				<IconPlus stroke="tw-stroke-white" />
			</span>
			<span className=" tw-font-russo-one tw-text-[15px] tw-text-white">
				New Project
			</span>
		</Link>
	);
};

export default ButtonCreateNewProject;
