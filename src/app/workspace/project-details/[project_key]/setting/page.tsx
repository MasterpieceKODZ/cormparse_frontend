/* eslint-disable @next/next/no-img-element */
import QuillEditor from "@/components/quill.editor";
import ProjectPropsURLInpBlck from "@/components/workspace/project-details/properties.url.block";
import ProjectMemberItem from "@/components/workspace/project-details/user.item";

const ProjectProperties = () => {
	return (
		<section className=" tw-w-full tw-h-full tw-max-h-full tw-overflow-y-auto tw-ps-[20%] tw-pt-[65px] tw-pe-4 tw-pb-[100px]">
			<p className=" tw-font-exo tw-font-semibold tw-text-start tw-mt-[70px] tw-text-[14px] tw-text-gray-800 dark:tw-text-gray-400">
				Name
			</p>
			<p className=" tw-font-exo tw-mt-[20px] tw-text-[20px] tw-text-gray-800 dark:tw-text-gray-400">
				Project Massive Turn-Out
			</p>
			<p className=" tw-font-exo tw-font-semibold tw-text-start tw-mt-[70px] tw-text-[14px] tw-text-gray-800 dark:tw-text-gray-400">
				Key
			</p>
			<p className=" tw-font-exo tw-mt-[20px] tw-text-[20px] tw-text-gray-800 dark:tw-text-gray-400">
				PMT-2215
			</p>
			<p className=" tw-font-exo tw-font-semibold tw-text-start tw-mt-[70px] tw-text-[14px] tw-text-gray-800 dark:tw-text-gray-400">
				URL
			</p>
			<ProjectPropsURLInpBlck />

			<p className=" tw-font-exo tw-font-semibold tw-text-start tw-mt-[70px] tw-text-[14px] tw-text-gray-800 dark:tw-text-gray-400">
				Description
			</p>
			<div className=" tw-mb-[90px]">
				<QuillEditor />
			</div>

			<p className=" tw-font-exo tw-font-semibold tw-text-start tw-mt-[70px] tw-text-[14px] tw-text-gray-800 dark:tw-text-gray-400">
				Lead
			</p>
			<ProjectMemberItem
				name="MasterpieceKODZ"
				img="/logo.png"
				role="Data Analyst"
				showPopup={true}
			/>
			<p className=" tw-font-exo tw-font-semibold tw-text-start tw-mt-[70px] tw-text-[14px] tw-text-gray-800 dark:tw-text-gray-400">
				Default Assignee
			</p>
			<ProjectMemberItem
				name="MANofVALOR"
				img="/logo.png"
				role="Fullstack Developer"
				showPopup={true}
			/>
			<div className=" tw-w-max tw-h-max tw-mt-[100px] tw-flex tw-justify-center tw-items-center ">
				<button className=" tw-w-max tw-h-max tw-px-5 tw-py-[4px] tw-rounded tw-bg-blue-800 tw-text-white tw-font-russo-one tw-text-center tw-mr-7">
					Save Changes
				</button>
				<button className=" tw-w-max tw-h-max tw-px-5 tw-py-[4px] tw-rounded tw-bg-secondary tw-text-white tw-font-russo-one tw-text-center tw-ml-7">
					Close
				</button>
			</div>
		</section>
	);
};

export default ProjectProperties;
export const dynamic = "force-dynamic";
