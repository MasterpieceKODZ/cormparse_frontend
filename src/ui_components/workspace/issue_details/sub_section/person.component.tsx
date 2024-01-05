/* eslint-disable @next/next/no-img-element */
const IssueDetailPersonComponent = ({
	fullname,
	username,
	role,
	imgUrl,
	tag,
}: {
	fullname: string;
	username: string;
	role: string;
	imgUrl: string;
	tag: string;
}) => {
	return (
		<div className=" tw-w-full tw-h-max tw-flex tw-justify-start tw-items-center">
			<img
				src={imgUrl}
				alt="user pic"
				className=" tw-w-[45px] tw-h-[45px] tw-object-cover tw-rounded-[50%] tw-border-2 tw-border-white tw-inline"
			/>
			<div className=" tw-w-full tw-h-max tw-ms-4">
				<p className=" tw-w-full tw-text-start tw-text-gray-700 dark:tw-text-gray-300 tw-font-exo tw-text-[18px] tw-font-semibold">
					{fullname}
				</p>
				<div
					id={`${tag}_un_rl`}
					className=" tw-w-full tw-h-max tw-mt-2] tw-hidden">
					<p className=" tw-w-full tw-text-start tw-text-gray-700 dark:tw-text-gray-400 tw-font-exo tw-text-[16px]">
						{username}
					</p>
					<p className=" tw-w-full tw-text-start tw-text-gray-700 dark:tw-text-gray-400 tw-font-exo tw-text-[14px]">
						{role}
					</p>
				</div>
			</div>
		</div>
	);
};

export default IssueDetailPersonComponent;
