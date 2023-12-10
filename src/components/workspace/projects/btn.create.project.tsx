import IconPlus from "@/components/icons/plus";

const ButtonCreateNewProject = () => {
	return (
		<button className=" tw-bg-secondary tw-rounded-lg tw-py-1.5 tw-px-5">
			<span className=" tw-mr-2">
				<IconPlus stroke="tw-stroke-white" />
			</span>
			<span className=" tw-font-russo-one tw-text-[15px] tw-text-white">
				New Project
			</span>
		</button>
	);
};

export default ButtonCreateNewProject;
