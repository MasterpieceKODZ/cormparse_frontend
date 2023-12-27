import IconCloseCropper from "@/ui_components/icons/close.cropper.icon";
import { Dispatch, SetStateAction } from "react";

const NewIssueAttachment = ({
	name,
	size,
	url,
	position,
	attachments,
	setAttachments,
}: {
	name: string;
	size: string;
	url: string;
	position: string;
	attachments: any[];

	setAttachments: Dispatch<SetStateAction<any[]>>;
}) => {
	return (
		<div className=" tw-w-full tw-h-max tw-border-t tw-border-t-gray-300 dark:tw-border-t-stone-600 tw-px-2 tw-py-1 tw-text-gray-700 dark:tw-text-gray-400 tw-flex tw-justify-start tw-items-center">
			<div className=" tw-basis-full tw-shrink tw-grow-0 tw-me-1">
				<p className=" tw-w-full tw-text-start tw-font-exo tw-text-[16px]">
					{name}
				</p>
				<p className="tw-w-full tw-text-end tw-font-exo tw-text-[14px] tw-mt-1">
					{size}
				</p>
			</div>
			<button className=" tw-w-max tw-h-max tw-mx-2">
				<IconCloseCropper
					fill="tw-fill-gray-600 tw-fill-gray-300"
					size="25px"
				/>
			</button>
		</div>
	);
};

export default NewIssueAttachment;
