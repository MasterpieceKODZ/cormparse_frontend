"use client";
import QuillEditor from "@/ui_components/quill.editor";
import {
	hideIssueDetailDescriptionEditor,
	saveIssueDetailDescription,
	showIssueDetailDescriptionEditor,
} from "@/ui_controllers/workspace/issue_details/show.hide.desc.editor";

const IssueDetailDescription = () => {
	return (
		<div className=" tw-w-full tw-h-max tw-mt-7 tw-pe-2 tw-py-3">
			<label className=" tw-text-start tw-text-[16px] tw-font-semibold tw-font-exo tw-text-gray-700 dark:tw-text-gray-400">
				Description
			</label>
			<div
				id="iss_dtl_desc"
				className=" tw-w-full tw-h-max tw-text-start tw-mt-4 tw-text-gray-700 dark:tw-text-gray-400 tw-font-exo  tw-border tw-border-gray-300 dark:tw-border-gray-500 tw-rounded tw-p-5"
				onClick={showIssueDetailDescriptionEditor}>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
					officia dolorem nostrum doloremque quibusdam officiis eaque iusto
					voluptates neque ab laboriosam ut sed sapiente numquam incidunt
					laborum sunt, quia tenetur!
				</p>
			</div>

			<div
				id="iss_dtl_desc_edt"
				className=" tw-w-full tw-h-max tw-hidden">
				<QuillEditor />
				<div className=" tw-w-max tw-h-max tw-flex tw-justify-start tw-items-center">
					<button
						onClick={saveIssueDetailDescription}
						className="tw-w-max tw-h-max tw-px-7 tw-me-3 tw-py-1 tw-bg-blue-800 tw-text-white tw-text-[16px] tw-font-exo tw-font-semibold tw-rounded-lg">
						save
					</button>
					<button
						onClick={hideIssueDetailDescriptionEditor}
						className="tw-w-max tw-h-max tw-px-7 tw-ms-3 tw-py-1 tw-bg-red-700 tw-text-white tw-text-[16px] tw-font-exo tw-font-semibold tw-rounded-lg">
						cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default IssueDetailDescription;
