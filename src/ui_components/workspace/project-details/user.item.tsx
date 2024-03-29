"use client";
import {
	hideUserPopup,
	showUserPopup,
} from "@/ui_controllers/workspace/projects/details/show.hide.user.popup";

/* eslint-disable @next/next/no-img-element */
const ProjectMemberItem = ({
	img,
	username,
	fullname,
	role,
	showPopup,
	dir, // position of the popup
}: {
	img: string;
	username: string;
	fullname: string;
	role: string;
	showPopup: boolean;
	dir: "up" | "down"; //position of the popup
}) => {
	return (
		<div
			className=" tw-relative tw-cursor-pointer tw-my-4  tw-w-full tw-max-w-[100%]"
			onMouseEnter={showPopup ? showUserPopup : () => {}}
			onMouseLeave={showPopup ? hideUserPopup : () => {}}>
			<div className="tw-h-max tw-w-full tw-grid tw-grid-cols-[auto_1fr] tw-items-center ">
				{img !== "no_pic" ? (
					<img
						src={img}
						alt="lead img"
						className=" tw-w-[40px] tw-h-[40px] tw-bg-white tw-rounded-[50%] tw-border tw-border-gray-500 dark:tw-border-gray-200"
					/>
				) : (
					<div className=" tw-inline-flex tw-items-center tw-justify-center tw-w-[45px] tw-h-[45px] tw-bg-blue-200 dark:tw-bg-blue-800 tw-rounded-[50%] tw-border-2 tw-border-blue-500 dark:tw-border-blue-300 ">
						<p className=" tw-w-full tw-text-center tw-text-blue-500 dark:tw-text-blue-300 tw-font-exo tw-text-[18px] tw-font-semibold">
							{`${fullname.split(" ")[0].split("")[0]}${
								fullname.split(" ")[1].split("")[0]
							}`.toUpperCase()}
						</p>
					</div>
				)}

				<p className=" tw-max-w-full tw-text-start tw-text-gray-800 dark:tw-text-gray-400 tw-ms-3 tw-font-exo tw-text-[16px] tw-truncate">
					{username}
				</p>
			</div>
			{showPopup ? (
				<div
					className={`tw-absolute ${
						dir == "up" ? "tw-bottom-[102%]" : "tw-top-[102%]"
					}  tw-z-50 tw-border-2 tw-border-slate-300 dark:tw-border-slate-700 tw-w-[70%] tw-min-w-[350px] tw-rounded-lg tw-overflow-hidden tw-hidden user_popup`}>
					<div className=" tw-w-full tw-h-[120px]  tw-relative tw-bg-gradient-to-b tw-from-secondary tw-to-60% tw-to-primary tw-py-5 tw-px-7 tw-flex tw-justify-start tw-items-start tw-flex-nowrap">
						{img !== "no_pic" ? (
							<img
								src={img}
								alt="user img"
								className=" tw-w-[80px] tw-h-[80px] tw-rounded-[50%] tw-mr-4 tw-bg-white tw-border-2 tw-border-gray-500 dark:tw-border-gray-200"
							/>
						) : (
							<div className=" tw-inline-flex tw-items-center tw-justify-center tw-w-[95px] tw-h-[80px] tw-bg-blue-200 dark:tw-bg-blue-800 tw-rounded-[50%] tw-border-2 tw-border-blue-500 dark:tw-border-blue-300 ">
								<p className=" tw-w-full tw-text-center tw-text-blue-500 dark:tw-text-blue-300 tw-font-exo tw-text-[30px] tw-font-bold">
									{`${fullname.split(" ")[0].split("")[0]}${
										fullname.split(" ")[1].split("")[0]
									}`.toUpperCase()}
								</p>
							</div>
						)}
						<div className=" tw-basis-full tw-shrink tw-grow-0">
							<p className=" tw-text-[16px] tw-font-russo-one tw-text-white tw-text-end">
								{fullname}
							</p>
							<p className=" tw-font-exo tw-text-[12px] tw-mt-3 tw-text-end tw-text-white">
								{role}
							</p>
						</div>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default ProjectMemberItem;
