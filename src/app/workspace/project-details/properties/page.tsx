/* eslint-disable @next/next/no-img-element */
import QuillEditor from "@/components/quill.editor";
import ProjectPropsURLInpBlck from "@/components/workspace/project-details/properties.url.block";

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
			<div className=" tw-mt-[20px]">
				<div className=" tw-flex tw-flex-nowrap tw-justify-start tw-items-center tw-h-max tw-w-max">
					<img
						src="/logo.png"
						alt="lead img"
						className=" tw-w-[40px] tw-h-[40px] tw-bg-white tw-rounded-[50%] tw-border-2 tw-border-white"
					/>
					<p className=" tw-text-start tw-text-gray-800 dark:tw-text-gray-400 tw-ms-5 tw-font-exo tw-text-[20px]">
						MasterpieceKODZ
					</p>
				</div>
			</div>
			<p className=" tw-font-exo tw-font-semibold tw-text-start tw-mt-[70px] tw-text-[14px] tw-text-gray-800 dark:tw-text-gray-400">
				Default Assignee
			</p>
			<div className=" tw-mt-[20px]">
				<div className=" tw-flex tw-flex-nowrap tw-justify-start tw-items-center tw-h-max tw-w-max">
					<img
						src="/logo.png"
						alt="lead img"
						className=" tw-w-[40px] tw-h-[40px] tw-bg-white tw-rounded-[50%] tw-border-2 tw-border-white"
					/>
					<p className=" tw-text-start tw-text-gray-800 dark:tw-text-gray-400 tw-ms-5 tw-font-exo tw-text-[20px]">
						MANofVALOR
					</p>
				</div>
			</div>
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
