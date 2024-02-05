"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import NotificationBar from "../notification.bar";
import ThemeLayout from "../theme.layout";
import BtnNavMyWork from "./workspace_nav_bar/my_work/btn.navbar";
import BtnNavProjects from "./workspace_nav_bar/projects/btn.navbar";
import ButtonHambuger from "./workspace_nav_bar/btn.humburger";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { User } from "@/db.schema.types";

const WorkSpaceHeader = () => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		(async () => {
			try {
				const session = await getSession();

				const userDataRes = await fetch("/api/get-user-graphql", {
					method: "POST",
					body: JSON.stringify({
						email: session?.user?.email,
					}),
					headers: {
						"Content-Type": "application/json",
						"X-Api-Key": "kjsopdshfk46873ndsjk0388kdmdsn8y32y85xnjsd873jd7yt4f",
					},
					cache: "no-store",
				});

				if (userDataRes.ok) {
					const userData = await userDataRes.json();

					setUser(userData);
				} else {
					setUser(null);
				}
			} catch (error) {
				setUser(null);
			}
		})();
	}, []);
	return (
		<header className="tw-sticky tw-bg-white dark:tw-bg-gray-900 tw-top-0 tw-z-40 tw-border-b-[1px] tw-border-b-gray-300 dark:tw-border-b-gray-700">
			<div className="tw-relative tw-flex tw-justify-center tw-items-center">
				<Link
					href={"/"}
					passHref
					className=" tw-my-2 tw-ms-3 xsm:tw-ms-[25px] md:tw-ms-[45px] xsm:tw-mt-[15px] tw-inline-block">
					<img
						src="/name_logo.png"
						alt="cormparse logo"
						className=" tw-h-8 smst:tw-h-[37px] xxsm:tw-h-[45px] md:tw-h-[50px] xl:tw-h-[60px] tw-w-auto "
					/>
				</Link>

				<div className=" tw-basis-full tw-shrink tw-grow tw-flex tw-items-center tw-justify-end">
					<div className="tw-items-center tw-justify-end tw-hidden smmd:tw-flex ">
						<div className=" tw-w-max tw-h-full md:tw-mr-5 tw-inline-flex tw-items-center">
							<BtnNavMyWork />
							<BtnNavProjects />
						</div>
						<div className="tw-h-full tw-w-max tw-inline-flex tw-justify-start tw-items-center tw-pe-5 xsm:tw-pe-12">
							<ThemeLayout />
						</div>
						{user?.firstname ? (
							<Link
								href="/my-profile-view"
								passHref>
								{user?.photoUrl ? (
									<img
										src={user.photoUrl}
										alt="user display picture"
										className=" tw-inline-block tw-w-[40px] tw-h-[40px] tw-object-cover tw-object-center tw-rounded-[50%] tw-mr-6"
									/>
								) : (
									<div className=" tw-inline-flex tw-items-center tw-justify-center tw-bg-blue-200 dark:tw-bg-blue-800 tw-border-2 tw-border-blue-500 dark:tw-border-blue-300 tw-w-[50px] tw-h-[50px] tw-rounded-[50%] tw-mr-6">
										<p className=" tw-w-full tw-text-center tw-text-blue-500 dark:tw-text-blue-300 tw-font-exo tw-text-[25px] tw-font-bold">
											{`${user?.firstname.split("")[0]}${
												user?.lastname.split("")[0]
											}`.toUpperCase()}
										</p>
									</div>
								)}
							</Link>
						) : (
							<></>
						)}
					</div>
				</div>
				<ButtonHambuger />
			</div>
			{/* notification bar */}
			<NotificationBar />
		</header>
	);
};

export default WorkSpaceHeader;
