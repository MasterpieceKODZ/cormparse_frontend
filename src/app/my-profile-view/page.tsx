"use client";
/* eslint-disable @next/next/no-img-element */
import { Issue, Project, User } from "@/db.schema.types";
import IconEmail from "@/ui_components/icons/email";
import IconWork from "@/ui_components/icons/work";
import NotificationBar from "@/ui_components/notification.bar";
import EditProfilePicBtn from "@/ui_components/profile_view/edit.pic.btn.jsx";
import ListItemProfileViewIssue from "@/ui_components/profile_view/issue.list.item";
import ProfileViewMoreOptions from "@/ui_components/profile_view/more.options";
import ListItemProfileViewProjects from "@/ui_components/profile_view/project.list.item";
import {
	hideEditProfileForm,
	showEditProfileForm,
} from "@/ui_controllers/profile_view/show.hide.edit.profile";
import { submitEditProfileForm } from "@/ui_controllers/profile_view/submit.edit.profile.form";
import { refreshRecentPendingIssue } from "@/ui_controllers/workspace/navbar/refresh.recent.pending.issues";
import { refreshRecentProjects } from "@/ui_controllers/workspace/navbar/refresh.recent.project";
import { getSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProfileView = () => {
	const [recentIssues, setRecentIssues] = useState<
		"failed" | "loading" | Issue[]
	>("loading");
	const [recentProjects, setRecentProjects] = useState<
		"failed" | "loading" | Project[]
	>("loading");

	const [userData, setUserData] = useState<User | "loading" | "failed">(
		"loading",
	);

	useEffect(() => {
		// **************************** load recent issues *********************//
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

					setRecentIssues(recentIssue);
				} else {
					setRecentIssues("failed");
				}
			} catch (error) {
				setRecentIssues("failed");
			}
		})();

		// **************************** load recent projects *********************//
		(async () => {
			try {
				const session = await getSession();
				const result = await fetch("/api/recent-projects", {
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
					const recentProjects = await result.json();

					setRecentProjects(recentProjects);
				} else {
					setRecentProjects("failed");
				}
			} catch (error) {
				setRecentProjects("failed");
			}
		})();

		// **************************** load recent issues *********************//
		(async () => {
			try {
				const session = await getSession();
				const result = await fetch("/api/get-user-graphql", {
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
					const userObj = await result.json();

					setUserData(userObj);
				} else {
					setRecentIssues("failed");
				}
			} catch (error) {
				setRecentIssues("failed");
			}
		})();
	}, []);
	return (
		<main className=" tw-w-screen tw-max-w-[100%] tw-flex tw-flex-col tw-justify-start tw-items-center tw-bg-white dark:tw-bg-gray-900 tw-relative">
			<div className=" tw-w-full tw-h-max tw-absolute tw-top-0 tw-right-0 tw-z-50">
				<NotificationBar />
			</div>

			<div className="tw-w-full tw-min-h-[16vh] tw-h-[16vh] tw-bg-gradient-to-b tw-from-secondary tw-to-60% tw-to-primary tw-py-4 tw-text-start">
				<Link
					href="/workspace/projects-list"
					className=" tw-w-max tw-h-max tw-font-lond-out tw-ms-5 tw-no-underline tw-text-[40px] tw-font-semibold tw-text-white tw-opacity-60">
					CORMPARSE
				</Link>
			</div>
			<div className=" tw-w-full tw-max-w-[100vw] tw-basis-full tw-shrink tw-grow tw-relative">
				<div className=" tw-w-full tw-grid tw-grid-rows-[auto_auto] lwmd:tw-grid-cols-[auto_1fr] tw-px-5 lwmd:tw-px-0 tw-pb-10 lwmd:tw-pb-0">
					{/* about me block */}
					<div className="tw-w-full lwmd:tw-min-w-[320px]  lwmd:tw-w-[25%] lwmd:tw-max-w-[350px] lwmd:tw-ms-[5%] tw-h-max lwmd:tw-min-h-[95%] tw-inline-flex tw-flex-col tw-items-center">
						<div className=" tw-w-max tw-h-max tw-flex tw-flex-col tw-justify-start tw-items-center tw-translate-y-[-60px] tw-z-50">
							<div className=" tw-w-max tw-h-max tw-flex tw-justify-start tw-items-end tw-flex-nowrap tw-z-50">
								{userData == "failed" || userData == "loading" ? (
									<></>
								) : (
									<>
										{userData?.photoUrl ? (
											<img
												id="pic_prev"
												src={`${userData.photoUrl}`}
												alt="profile image"
												className=" tw-w-[130px] tw-h-[130px] tw-object-cover tw-bg-white tw-rounded-[50%] tw-border-white tw-border-2"
											/>
										) : (
											<div className=" tw-inline-flex tw-items-center tw-justify-center tw-bg-blue-200 dark:tw-bg-blue-800 tw-border-2 tw-border-blue-500 dark:tw-border-blue-300 tw-w-[130px] tw-h-[130px] tw-rounded-[50%] tw-mr-6">
												<p className=" tw-w-full tw-text-center tw-text-blue-500 dark:tw-text-blue-300 tw-font-exo tw-text-[65px] tw-font-bold">
													{`${userData?.firstname.split("")[0]}${
														userData?.lastname.split("")[0]
													}`.toUpperCase()}
												</p>
											</div>
										)}
										<EditProfilePicBtn setUserData={setUserData} />
									</>
								)}
							</div>

							<h4 className=" tw-font-exo tw-font-bold tw-text-[30px] tw-mt-3 tw-text-gray-800 dark:tw-text-gray-400">
								{(userData as User)?.firstname
									? `${(userData as User).firstname.toUpperCase()} ${(
											userData as User
									  ).lastname.toUpperCase()}`
									: ""}
							</h4>
							<p className=" tw-font-exo tw-text-[15px] tw-mt-1  tw-text-gray-800 dark:tw-text-gray-400">
								{(userData as User)?.username
									? `${(userData as User).username}`
									: ""}
							</p>
						</div>
						<div className=" tw-w-full tw-min-h-[50vh] tw-basis-full tw-shrink tw-grow-0 tw-border-2 tw-border-gray-300 dark:tw-border-gray-700 tw-rounded-lg tw-ps-7 tw-pe-2 tw-flex tw-flex-col tw-items-start tw-justify-start tw-relative tw-overflow-hidden">
							<p className=" tw-font-exo tw-font-bold tw-text-[14px] tw-text-start tw-mt-8 tw-text-gray-800 dark:tw-text-gray-400">
								Role
							</p>
							<p className=" tw-font-exo tw-text-[16px] tw-font-semibold tw-mt-3 tw-text-gray-800 dark:tw-text-gray-400">
								<span className=" tw-mr-3">
									<IconWork />
								</span>{" "}
								{(userData as User)?.role ? `${(userData as User).role}` : ""}
							</p>
							<p className=" tw-font-exo tw-font-bold tw-text-[14px] tw-text-start tw-mt-8 tw-text-gray-800 dark:tw-text-gray-400">
								Email
							</p>
							<p className=" tw-font-exo tw-text-[16px] tw-font-semibold tw-mt-3 tw-text-gray-800 dark:tw-text-gray-400">
								<span className=" tw-mr-3">
									<IconEmail />
								</span>{" "}
								{(userData as User)?.email ? `${(userData as User).email}` : ""}
							</p>

							<button
								id="btn_edit_profile"
								className=" tw-font-exo tw-text-red-700 tw-text-[15px] tw-font-semibold tw-absolute tw-bottom-3 tw-z-20 tw-right-[50%] tw-translate-x-[50%]"
								onClick={showEditProfileForm}>
								Edit Profile
							</button>
							{/* edit profile form */}
							<div
								id="edt_profile_popout"
								className=" tw-bg-white dark:tw-bg-gray-900 tw-w-full tw-z-30 tw-h-full tw-absolute tw-top-0 tw-left-0 tw-hidden">
								<form
									className=" tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-start tw-items-center"
									onSubmit={(e) => submitEditProfileForm(e, setUserData)}>
									<p className="tw-font-exo tw-text-[16px] tw-text-center tw-font-semibold tw-mt-4 tw-text-gray-800 dark:tw-text-gray-400">
										Edit Profile
									</p>
									<label className="tw-block tw-font-exo tw-text-[13px] md:tw-text-[15px] tw-mt-[30px] tw-text-mygrey-default dark:tw-text-gray-400 tw-self-start tw-ms-5">
										username
									</label>
									<input
										id="edt_prof_usnm_inp"
										type="text"
										name="username"
										minLength={3}
										maxLength={100}
										className="tw-block tw-font-exo tw-text-mygrey-default dark:tw-text-gray-400 tw-max-w-[450px] tw-w-[90%] tw-h-[30px] tw-border-[1px] tw-rounded tw-border-mygrey-v-lyt dark:tw-border-gray-500 tw-px-2 tw-text-[17px] dark:tw-bg-gray-800 focus:tw-outline focus:tw-outline-blue-300 focus:tw-outline-1"
									/>
									<label className="tw-block tw-font-exo tw-text-[13px] md:tw-text-[15px] tw-mt-[20px] tw-text-mygrey-default dark:tw-text-gray-400  tw-self-start tw-ms-5">
										role
									</label>
									<input
										id="edt_prof_role_inp"
										type="text"
										name="role"
										maxLength={50}
										className="tw-block tw-font-exo tw-text-mygrey-default dark:tw-text-gray-400 tw-max-w-[450px] tw-w-[90%] tw-h-[30px] tw-border-[1px] tw-rounded tw-border-mygrey-v-lyt dark:tw-border-gray-500 tw-px-2 tw-text-[17px] dark:tw-bg-gray-800 focus:tw-outline focus:tw-outline-blue-300 focus:tw-outline-1"
									/>

									<button
										className=" tw-w-max tw-h-max tw-py-1 tw-px-2 tw-text-[15px] tw-font-russo-one tw-text-white tw-text-center tw-bg-blue-700 tw-rounded-lg tw-mt-9 tw-block tw-mx-auto"
										type="submit">
										Apply Changes
									</button>
									<button
										className=" tw-w-max tw-h-max tw-py-1 tw-px-2 tw-text-[15px] tw-font-russo-one tw-text-white tw-text-center tw-bg-red-700 tw-rounded-lg tw-mt-9 tw-block tw-mx-auto"
										type="submit"
										onClick={hideEditProfileForm}>
										Cancel
									</button>
								</form>
							</div>
						</div>
					</div>
					{/* my work block */}
					<div className="tw-w-full lwmd:tw-min-w-[510px] lg:tw-min-w-[630px] tw-h-max  lwmd:tw-w-[45%] lwmd:tw-max-w-[600px] lwmd:tw-ms-[10%] tw-mt-2 lwmd:tw-min-h-[80vh] tw-inline-block tw-ps-3 tw-pe-4">
						<p
							className=" tw-font-exo tw-font-semibold tw-text-[16px] tw-text-gray-800 dark:tw-text-gray-400 tw-my-4
						">
							Recent Issues
						</p>
						<div className="tw-w-full tw-border-2 tw-border-gray-300 dark:tw-border-gray-700 tw-rounded-lg tw-h-[35vh] tw-px-5 tw-overflow-y-auto">
							{recentIssues == "loading" ? (
								<div className=" tw-h-max tw-w-full">
									<div className=" tw-w-full tw-h-[50px] tw-my-5 tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite]"></div>
									<div className=" tw-w-full tw-h-[50px] tw-my-5  tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite]"></div>
									<div className=" tw-w-full tw-h-[50px] tw-my-5 bggry tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite]"></div>
								</div>
							) : recentIssues == "failed" ? (
								<div className=" tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-flex-col">
									<p className=" tw-text-center tw-text-gray-700 dark:tw-text-gray-300 tw-font-exo tw-text-[16px] tw-block tw-mt-4">
										failed to fetch recent issues
									</p>
									<button
										className=" tw-w-max tw-h-max tw-px-3 tw-py-1 tw-rounded-lg tw-mt-4 tw-font-russo-one tw-text-white tw-bg-blue-600 tw-block tw-mx-auto"
										onClick={() => refreshRecentPendingIssue(setRecentIssues)}>
										refresh
									</button>
								</div>
							) : (
								recentIssues.map((iss, index) => {
									return (
										<Link
											href={`/workspace/project-details/${iss.project.key}/issue-details/${iss.key}`}
											key={iss.id}>
											<ListItemProfileViewIssue
												issueSum={iss.summary}
												type={iss.type}
												projectName={iss.project.name}
												dateUpdated={`${new Date(
													iss.updatedAt,
												).getDate()}-${new Date(
													iss.updatedAt,
												).getMonth()}-${new Date().getFullYear()}`}
												topBorder={index < 1}
											/>
										</Link>
									);
								})
							)}
						</div>
						<div className=" tw-flex tw-justify-between tw-py-4  tw-mt-4">
							<p className=" tw-font-exo tw-font-semibold tw-text-[16px] tw-text-gray-800 dark:tw-text-gray-400 tw-inline">
								My Projects
							</p>
							<Link
								href={`/workspace/projects-list`}
								className=" tw-font-exo tw-text-[16px] tw-text-blue-600 tw-no-underline">
								See all
							</Link>
						</div>
						<div className="tw-w-full tw-border-2 tw-border-gray-300 dark:tw-border-gray-700 tw-rounded-lg tw-h-[32vh] tw-px-5 tw-overflow-y-auto">
							{recentProjects == "loading" ? (
								<div className=" tw-h-max tw-w-full">
									<div className=" tw-w-full tw-h-[50px] tw-my-5 tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite]"></div>
									<div className=" tw-w-full tw-h-[50px] tw-my-5  tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite]"></div>
									<div className=" tw-w-full tw-h-[50px] tw-my-5 bggry tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite]"></div>
								</div>
							) : recentProjects == "failed" ? (
								<div className=" tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center">
									<p className=" tw-text-center tw-text-gray-700 dark:tw-text-gray-300 tw-font-exo tw-text-[16px] tw-mt-4">
										failed to fetch recent projects
									</p>
									<button
										className=" tw-w-max tw-h-max tw-px-3 tw-py-1 tw-rounded-lg tw-mt-4 tw-font-russo-one tw-text-white tw-bg-blue-600 tw-block tw-mx-auto"
										onClick={() => refreshRecentProjects(setRecentProjects)}>
										refresh
									</button>
								</div>
							) : (
								recentProjects.map((proj, index) => {
									return (
										<Link
											href={`/workspace/project-details/${proj.key}`}
											key={proj.id}
											passHref>
											<ListItemProfileViewProjects
												creator={proj.creator.username}
												projectName={proj.name}
												dateUpdated={`${new Date(
													proj.updatedAt,
												).getDate()}-${new Date(
													proj.updatedAt,
												).getMonth()}-${new Date(
													proj.updatedAt,
												).getFullYear()}`}
												topBorder={index < 1}
											/>
										</Link>
									);
								})
							)}
						</div>
					</div>
				</div>
				{/* more options */}
				<ProfileViewMoreOptions />
			</div>
		</main>
	);
};

export default ProfileView;
