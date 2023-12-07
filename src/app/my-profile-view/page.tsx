/* eslint-disable @next/next/no-img-element */
import IconEmail from "@/components/icons/email";
import IconWork from "@/components/icons/work";
import ListItemProfileViewIssue from "@/components/profile_view/issue.list.item";
import ListItemProfileViewProjects from "@/components/profile_view/project.list.item";
import Link from "next/link";

const ProfileView = () => {
	return (
		<main className=" tw-basis-full tw-shrink tw-grow tw-flex tw-flex-col tw-justify-start tw-items-center tw-bg-white dark:tw-bg-gray-900">
			<div className="tw-w-full tw-min-h-[16vh] tw-h-[16vh] tw-bg-gradient-to-b tw-from-secondary tw-to-60% tw-to-primary tw-py-4 tw-text-start">
				<Link
					href="/workspace/projects-list"
					className=" tw-w-max tw-h-max tw-font-lond-out tw-ms-5 tw-no-underline tw-text-[40px] tw-font-semibold tw-text-white tw-opacity-60">
					CORMPARSE
				</Link>
			</div>
			<div className=" tw-w-full tw-basis-full tw-shrink tw-grow tw-flex tw-flex-wrap tw-items-start tw-justify-start">
				<div className="tw-min-w-[320px] tw-w-[25%] tw-max-w-[350px] tw-ms-[5%] tw-min-h-[95%] tw-inline-flex tw-flex-col tw-items-center">
					<div className=" tw-w-max tw-h-max tw-flex tw-flex-col tw-justify-start tw-items-center tw-translate-y-[-60px]">
						<img
							src="/logo.png"
							alt="profile image"
							className=" tw-w-[130px] tw-h-[130px] tw-object-cover tw-bg-white tw-rounded-[50%] tw-border-white tw-border-2"
						/>
						<h4 className=" tw-font-exo tw-font-bold tw-text-[30px] tw-mt-3 tw-text-gray-800 dark:tw-text-gray-400">
							Gideon Faith Omorodion
						</h4>
						<p className=" tw-font-exo tw-text-[15px] tw-mt-1  tw-text-gray-800 dark:tw-text-gray-400">
							MasterpieceKODZ
						</p>
					</div>
					<div className=" tw-w-full tw-min-h-[50vh] tw-basis-full tw-shrink tw-grow-0 tw-border-2 tw-border-gray-300 dark:tw-border-gray-700 tw-rounded-lg tw-ps-7 tw-pe-2 tw-flex tw-flex-col tw-items-start tw-justify-start">
						<p className=" tw-font-exo tw-font-bold tw-text-[14px] tw-text-start tw-mt-8 tw-text-gray-800 dark:tw-text-gray-400">
							About
						</p>
						<p className=" tw-font-exo tw-text-[16px] tw-font-semibold tw-mt-3 tw-text-gray-800 dark:tw-text-gray-400">
							<span className=" tw-mr-3">
								<IconWork />
							</span>{" "}
							Fullstack Developer
						</p>
						<p className=" tw-font-exo tw-font-bold tw-text-[14px] tw-text-start tw-mt-8 tw-text-gray-800 dark:tw-text-gray-400">
							Contact
						</p>
						<p className=" tw-font-exo tw-text-[16px] tw-font-semibold tw-mt-3 tw-text-gray-800 dark:tw-text-gray-400">
							<span className=" tw-mr-3">
								<IconEmail />
							</span>{" "}
							grail.masterpiece@gmail.com
						</p>
					</div>
				</div>
				<div className="tw-min-w-[320px] tw-w-[45%] tw-max-w-[600px] tw-ms-[10%] tw-mt-2 tw-min-h-[80vh] tw-inline-block tw-ps-3 tw-pe-4">
					<p
						className=" tw-font-exo tw-font-semibold tw-text-[16px] tw-text-gray-800 dark:tw-text-gray-400 tw-my-4
						">
						Recent Issues
					</p>
					<div className="tw-w-full tw-border-2 tw-border-gray-300 dark:tw-border-gray-700 tw-rounded-lg tw-h-[35vh] tw-px-5 tw-overflow-y-auto">
						<ListItemProfileViewIssue
							issueSum="Fix this bug i just found lurking in the shadows of the code"
							type="bug"
							projectName="Project Anaconda Sprint Scrum Team Quick Sleep"
							dateUpdated="23-03-2034"
							topBorder={false}
						/>
						<ListItemProfileViewIssue
							issueSum="Fix this bug i just found lurking in the shadows of the code"
							type="improvement"
							projectName="Project Anaconda Sprint Scrum Team Quick Sleep"
							dateUpdated="23-03-2034"
							topBorder={true}
						/>
						<ListItemProfileViewIssue
							issueSum="Fix this bug i just found lurking in the shadows of the code"
							type="sub_task"
							projectName="Project Anaconda Sprint Scrum Team Quick Sleep"
							dateUpdated="23-03-2034"
							topBorder={true}
						/>
						<ListItemProfileViewIssue
							issueSum="Fix this bug i just found lurking in the shadows of the code"
							type="feature"
							projectName="Project Anaconda Sprint Scrum Team Quick Sleep"
							dateUpdated="23-03-2034"
							topBorder={true}
						/>
					</div>
					<div className=" tw-flex tw-justify-between tw-py-4  tw-mt-4">
						<p className=" tw-font-exo tw-font-semibold tw-text-[16px] tw-text-gray-800 dark:tw-text-gray-400 tw-inline">
							My Projects
						</p>
						<button className=" tw-font-exo tw-text-[16px] tw-text-blue-600">
							See all
						</button>
					</div>
					<div className="tw-w-full tw-border-2 tw-border-gray-300 dark:tw-border-gray-700 tw-rounded-lg tw-h-[35vh] tw-px-5 tw-overflow-y-auto">
						<ListItemProfileViewProjects
							creator="MasterpieceKODZ"
							projectName="Project Anaconda Sprint Scrum Team Quick Sleep"
							dateUpdated="23-03-2034"
							topBorder={false}
						/>
						<ListItemProfileViewProjects
							creator="MasterpieceKODZ"
							projectName="Project Anaconda Sprint Scrum Team Quick Sleep"
							dateUpdated="23-03-2034"
							topBorder={true}
						/>
						<ListItemProfileViewProjects
							creator="MasterpieceKODZ"
							projectName="Project Anaconda Sprint Scrum Team Quick Sleep"
							dateUpdated="23-03-2034"
							topBorder={true}
						/>
					</div>
				</div>
			</div>
		</main>
	);
};

export default ProfileView;
