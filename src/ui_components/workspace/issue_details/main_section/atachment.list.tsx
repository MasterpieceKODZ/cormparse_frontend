import IssueDetailsAttachmentListItem from "./attachment.list.item";

const IssueDetailsAttachmentList = () => {
	return (
		<div className=" tw-w-full tw-h-max tw-mt-4">
			<label className=" tw-text-start tw-text-[16px] tw-font-semibold tw-font-exo tw-text-gray-700 dark:tw-text-gray-400">
				Attachments
			</label>
			<div className="tw-w-full tw-h-max tw-max-h-[400px] tw-mt-6 tw-overflow-y-auto">
				<IssueDetailsAttachmentListItem
					name="host.from.china.with.mascot.from.nigeria.jpeg"
					fileType="image/jpeg"
					url="ggg.com"
				/>
				<IssueDetailsAttachmentListItem
					name="host.from.china.with.mascot.from.nigeria.jpeg"
					fileType="video/mp4"
					url="ggg.com"
				/>
				<IssueDetailsAttachmentListItem
					name="host.from.china.with.mascot.from.nigeria.jpeg"
					fileType="application/pdf"
					url="ggg.com"
				/>
				<IssueDetailsAttachmentListItem
					name="host.from.china.with.mascot.from.nigeria.jpeg"
					fileType="image/jpeg"
					url="ggg.com"
				/>
				<IssueDetailsAttachmentListItem
					name="host.from.china.with.mascot.from.nigeria.jpeg"
					fileType="video/mp4"
					url="ggg.com"
				/>
				<IssueDetailsAttachmentListItem
					name="host.from.china.with.mascot.from.nigeria.jpeg"
					fileType="application/pdf"
					url="ggg.com"
				/>
				<IssueDetailsAttachmentListItem
					name="host.from.china.with.mascot.from.nigeria.jpeg"
					fileType="image/jpeg"
					url="ggg.com"
				/>
				<IssueDetailsAttachmentListItem
					name="host.from.china.with.mascot.from.nigeria.jpeg"
					fileType="video/mp4"
					url="ggg.com"
				/>
				<IssueDetailsAttachmentListItem
					name="host.from.china.with.mascot.from.nigeria.jpeg"
					fileType="application/pdf"
					url="ggg.com"
				/>
			</div>
		</div>
	);
};

export default IssueDetailsAttachmentList;
