"use client";

import {
	deleteProject,
	hideDeleteProjectPopup,
	showDeleteProjectPopup,
} from "@/ui_controllers/workspace/projects/details/delete.project";

const BtnDeleteProject = () => {
	return (
		<div className=" tw-w-max tw-h-max tw-max-w-[350px] tw-absolute tw-top-[40px] tw-right-[50px]">
			<button
				className=" tw-w-max tw-h-max tw-py-2 tw-px-5 tw-rounded tw-font-russo-one tw-text-white tw-text-[18px] tw-bg-red-700"
				onClick={showDeleteProjectPopup}>
				Delete
			</button>
			<div
				id="btn_del_prj"
				className=" tw-w-max tw-h-max tw-rounded tw-py-3 tw-px-4 tw-bg-red-100 dark:tw-bg-red-950 tw-absolute tw-top-0 tw-right-[110%] tw-hidden">
				<p className=" tw-font-exo tw-text-[18px] tw-text-center tw-font-semibold tw-text-gray-700 dark:tw-text-gray-100">
					Are you sure you want to delete this project?
				</p>
				<div className=" tw-w-full tw-h-max tw-my-5 tw-flex tw-items-center tw-justify-around">
					<button
						className=" tw-w-max tw-h-max tw-py-1 tw-px-4 tw-font-russo-one tw-text-[17px] tw-text-white tw-bg-gray-600 dark:tw-bg-black tw-rounded"
						onClick={hideDeleteProjectPopup}>
						cancel
					</button>
					<button
						className=" tw-w-max tw-h-max tw-py-1 tw-px-4 tw-font-russo-one tw-text-[17px] tw-text-white tw-bg-green-600 dark:tw-bg-green-800 tw-rounded"
						onClick={deleteProject}>
						proceed
					</button>
				</div>
			</div>
		</div>
	);
};

export default BtnDeleteProject;
