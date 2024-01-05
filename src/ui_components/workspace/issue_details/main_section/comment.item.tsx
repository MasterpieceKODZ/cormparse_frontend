/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

const IssueCommentItem = ({
	body,
	author,
	date,
	position,
}: {
	body: string;
	author: { fullname: string; username: string; imgUrl: string };
	date: string;
	position: number;
}) => {
	const [showComment, setShowComment] = useState(false);

	useEffect(() => {
		setShowComment(true);
	}, []);

	return (
		<div className=" tw-w-full tw-h-max tw-grid tw-grid-cols-[auto_1fr] tw-my-8">
			<img
				src={author.imgUrl}
				alt="author pic"
				className=" tw-w-[70px] tw-h-[70px] tw-object-cover tw-rounded-lg tw-mx-5"
			/>
			<div className=" tw-w-full tw-h-max">
				<p className=" tw-w-max tw-h-max tw-text-gray-700 dark:tw-text-gray-300 tw-bg-gray-200 dark:tw-bg-gray-700 tw-px-2 tw-py-1 tw-mx-4 tw-font-exo tw-text-[14px] tw-mt-4">
					comment
				</p>
				<div className=" tw-w-full tw-h-max tw-mt-4 tw-flex tw-justify-start tw-items-center tw-text-gray-700 dark:tw-text-gray-300 tw-font-exo">
					<p className=" tw-text-[20px] tw-font-semibold tw-mx-4">
						{author.fullname}
					</p>
					<p className="tw-text-[18px] tw-font-semibold">&bull;</p>
					<p className="tw-text-[20px] tw-mx-4">{author.username}</p>
				</div>
				<p className=" tw-font-exo tw-text-[14px] tw-mx-4 tw-text-gray-400 dark:tw-text-gray-600">
					{date}
				</p>
				<div
					id={`cmt_bdy_${position}`}
					className=" tw-w-full tw-h-max tw-mt-5 tw-px-4 tw-text-gray-700 dark:tw-text-gray-300 "></div>
				<div>
					{showComment ? (
						((bdy: string): string => {
							document.getElementById(`cmt_bdy_${position}`)!.innerHTML = bdy;
							return "";
						})(body)
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	);
};

export default IssueCommentItem;
