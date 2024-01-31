import { useEffect, useState } from "react";
import PopUpIssueItem from "./issue.item";
import { Issue } from "@/db.schema.types";
import { getSession } from "next-auth/react";
import { refreshRecentPendingIssue } from "@/ui_controllers/workspace/navbar/refresh.recent.pending.issues";
import Link from "next/link";
import { closeSideNav } from "@/ui_controllers/workspace/sidenav/toogle.sidenav";

const PendingIssuesNavList = () => {
	const [recentPendingIssue, setRecentPendingIssue] = useState<
		Issue[] | "loading" | "failed"
	>("loading");

	useEffect(() => {
		(async () => {
			try {
				const session = await getSession();
				const result = await fetch("/api/recent-pending-issues", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"X-Api-Key": "kjsopdshfk46873ndsjk0388kdmdsn8y32y85xnjsd873jd7yt4f",
					},
					body: JSON.stringify({
						email: session?.user?.email,
					}),
					cache: "no-store",
				});

				if (result.ok) {
					const recentIssue = await result.json();

					setRecentPendingIssue(recentIssue);
				} else {
					setRecentPendingIssue("failed");
				}
			} catch (error) {
				setRecentPendingIssue("failed");
			}
		})();
	}, []);

	return (
		<div className=" tw-my-12">
			<p className=" tw-font-russo-one tw-text-[15px] tw-text-gray-800 dark:tw-text-gray-400">
				Pending
			</p>
			{recentPendingIssue == "loading" ? (
				<div className=" tw-h-max tw-w-full">
					<div className=" tw-w-full tw-h-[50px] tw-my-5 tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite]"></div>
					<div className=" tw-w-full tw-h-[50px] tw-my-5  tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite]"></div>
					<div className=" tw-w-full tw-h-[50px] tw-my-5 bggry tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite]"></div>
				</div>
			) : recentPendingIssue == "failed" ? (
				<div className=" tw-w-full tw-h-max">
					<p
						className=" tw-text-center tw-text-gray-700 dark:tw-text-gray-300 tw-font-exo tw-text-[16px] tw-mt-4
					6">
						failed to fetch recent issues
					</p>
					<button
						className=" tw-w-max tw-h-max tw-px-3 tw-py-1 tw-rounded-lg tw-mt-4 tw-font-russo-one tw-text-white tw-bg-blue-600 tw-block tw-mx-auto"
						onClick={() => refreshRecentPendingIssue(setRecentPendingIssue)}>
						refresh
					</button>
				</div>
			) : (
				<ul className=" tw-list-none">
					{recentPendingIssue.map((issue) => {
						return (
							<li
								className=" tw-cursor-pointer tw-mt-3"
								key={issue.id}
								onClick={() => {
									document.querySelectorAll(".popup").forEach((e) => {
										e.classList.add("tw-hidden");
									});
								}}>
								<Link
									href={`/workspace/project-details/${issue.project.key}/issue-details/${issue.key}`}
									onClick={closeSideNav}>
									<PopUpIssueItem
										summary={issue.summary}
										type={issue.type}
										issuekey={issue.key}
										project={issue.project.name}
									/>
								</Link>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default PendingIssuesNavList;
