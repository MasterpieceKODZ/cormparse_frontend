import SearchIcon from "../../icons/search";

const ProjectSearchForm = () => {
	return (
		<form className=" tw-w-max tw-h-max tw-me-3 tw-inline-flex tw-justify-center tw-items-center">
			<input
				type="text"
				name="project_search_name"
				id="project_srch_inp"
				className=" tw-w-[250px] tw-h-[35px] tw-text-[15px] tw-inline tw-font-exo tw-text-mygrey-default dark:tw-text-gray-400 tw-max-w-[450px] tw-me-5 tw-border-[1.5px] tw-rounded tw-border-mygrey-v-lyt dark:tw-border-gray-500 focus:tw-outline focus:tw-outline-blue-300 focus:tw-outline-1 tw-px-2 tw-text-xl dark:tw-bg-gray-800"
			/>
			<button
				aria-label="start project search by name"
				className=" tw-inline-block">
				<SearchIcon />
			</button>
		</form>
	);
};

export default ProjectSearchForm;
