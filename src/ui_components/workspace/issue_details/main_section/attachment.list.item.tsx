import IconDownloadCloud from "@/ui_components/icons/download.cloud";

/* eslint-disable @next/next/no-img-element */
const IssueDetailsAttachmentListItem = ({
	fileType,
	name,
	url,
}: {
	fileType: string;
	name: string;
	url: string;
}) => {
	const fileClass = fileType.split("/")[0];

	return (
		<div className=" tw-w-full tw-h-max tw-flex tw-justify-start tw-items-center  tw-border-t tw-border-t-gray-300 dark:tw-border-t-gray-600 tw-px-2 tw-py-3 tw-my-2">
			{/* file icon */}
			<div className=" tw-w-[50px] tw-h-auto tw-px-2">
				{fileClass == "image" ? (
					<img
						src="/image.file.icon.png"
						alt="file icon"
						className=" tw-w-full tw-h-full tw-object-cover"
					/>
				) : fileClass == "video" ? (
					<img
						src="/video.icon.png"
						alt="file icon"
						className=" tw-w-full tw-h-full tw-object-cover"
					/>
				) : (
					<img
						src="/doc.file.icon.png"
						alt="file icon"
						className=" tw-w-full tw-h-full tw-object-cover"
					/>
				)}
			</div>
			{/* file name */}
			<p className=" tw-basis-full tw-h-max tw-ms-3 tw-font-exo tw-text-[16px] tw-text-gray-700 dark:tw-text-gray-400">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
				ex?Lorem-ipsumdolor-sitamet-consectetur.png
			</p>
			<button className=" tw-w-max tw-h-max tw-mx-4">
				<IconDownloadCloud
					stroke="tw-stroke-gray-700 dark:tw-stroke-gray-400"
					fill="tw-fill-gray-700 dark:tw-fill-gray-400"
				/>
			</button>
		</div>
	);
};

export default IssueDetailsAttachmentListItem;
