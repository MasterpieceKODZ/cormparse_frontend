/* eslint-disable @next/next/no-img-element */

import { User } from "@/db.schema.types";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

const SideNavHeader = () => {
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
		<div className=" tw-h-[25%] tw-w-full ">
			<div className=" tw-w-full tw-h-[70%] tw-relative tw-bg-gradient-to-b tw-from-secondary tw-to-60% tw-to-primary tw-py-7 tw-text-right">
				<p
					id="side_nav_username"
					className="tw-font-russo-one tw-text-[20px] xsm:tw-text-[25px] tw-text-white tw-pr-3 xsm:tw-pr-5">
					{user?.username ?? ""}
				</p>
				<p
					id="side_nav_role"
					className=" tw-text-white tw-font-exo tw-text-[13px] xsm:tw-text-[15px] tw-mr-3 xsm:tw-mr-5 tw-mt-1">
					{user?.role ?? ""}
				</p>

				{user?.photoUrl ? (
					<img
						src={user.photoUrl}
						alt="user profile pic"
						className=" tw-w-[100px] tw-h-[100px] xsm:tw-w-[130px] xsm:tw-h-[130px] tw-absolute tw-left-[15px] tw-bottom-[-40%] tw-rounded-[15px] tw-object-cover tw-bg-white tw-border-white tw-border-2"
					/>
				) : (
					<div className=" tw-inline-flex tw-items-center tw-justify-center tw-w-[100px] tw-h-[100px] tw-bg-blue-200 dark:tw-bg-blue-800 tw-border-2 tw-border-blue-500 dark:tw-border-blue-300  xsm:tw-w-[130px] xsm:tw-h-[130px] tw-absolute tw-left-[15px] tw-bottom-[-40%] tw-rounded-[15px] ">
						<p className=" tw-w-full tw-text-center tw-text-blue-500 dark:tw-text-blue-300 tw-font-exo tw-text-[68px] tw-font-bold">
							{`${user?.firstname.split("")[0]}${
								user?.lastname.split("")[0]
							}`.toUpperCase()}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default SideNavHeader;
