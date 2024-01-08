/* eslint-disable @next/next/no-img-element */
"use client";

import IconLikeComment from "@/ui_components/icons/like.comment";
import IconReplyComment from "@/ui_components/icons/reply.comment";
import { useEffect, useState } from "react";

const IssueCommentItem = ({
	body,
	author,
	date,
	likes,
	unlikes,
	position,
	isReply,
	replyTo,
}: {
	body: string;
	author: { fullname: string; username: string; imgUrl: string };
	date: string;
	likes: number;
	unlikes: number;
	position: number;
	isReply?: boolean;
	replyTo?: string;
}) => {
	const [showComment, setShowComment] = useState(false);
	const [replyToUsername, setReplyToUsername] = useState("Faster_Bone");
	const [replyToId, setReplyToId] = useState("");

	useEffect(() => {
		setShowComment(true);
	}, []);

	return (
		<div
			id={`cmmt_${position}`}
			className=" tw-w-full tw-h-max tw-grid tw-grid-cols-[auto_1fr] tw-my-8">
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
							document.getElementById(
								`cmt_bdy_${position}`,
							)!.innerHTML = `<p style="margin-bottom: 15px; color: blue; cursor: pointer;">${
								isReply ? `@<strong>${replyToUsername}</strong>` : ""
							}</p> ${bdy}`;
							return "";
						})(body)
					) : (
						<></>
					)}
				</div>
				<div className=" tw-w-max tw-h-max tw-mt-7 tw-flex tw-justify-center tw-items-center">
					<button className=" tw-w-max tw-h-max tw-mx-5">
						<IconReplyComment fill="tw-fill-gray-800 dark:tw-fill-gray-400" />
					</button>
					<button className=" tw-w-max tw-h-max tw-mx-5 tw-flex tw-justify-center tw-items-center">
						<IconLikeComment fill="tw-fill-gray-800 dark:tw-fill-gray-400" />
						<span className=" tw-w-max tw-h-max tw-mx-2 tw-text-gray-700 dark:tw-text-gray-300 tw-text-[15px] tw-font-russo-one">
							{likes > 0 ? likes : ""}
						</span>
					</button>
					<button className=" tw-w-max tw-h-max tw-mx-5  tw-flex tw-justify-center tw-items-center">
						<span className="tw-rotate-180">
							<IconLikeComment fill="tw-fill-gray-800 dark:tw-fill-gray-400" />
						</span>

						<span className=" tw-w-max tw-h-max tw-mx-2 tw-text-gray-700 dark:tw-text-gray-300 tw-text-[15px] tw-font-russo-one">
							{unlikes > 0 ? likes : ""}
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default IssueCommentItem;
