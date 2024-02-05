/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import InfinityLoadingSpinner from "@/ui_components/page.loading.ui";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DeleteUser = () => {
	const [deleteStatus, setDeleteStatus] = useState<
		"loading" | "failed" | "expired_link"
	>("loading");

	const key = useSearchParams().get("key");

	useEffect(() => {
		(async () => {
			if (key) {
				try {
					// fetch email from cache
					const cacheEmailRes = await fetch("/api/get-email-address", {
						method: "POST",
						body: JSON.stringify({
							key,
						}),
						headers: {
							"Content-Type": "application/json",
							"X-Api-Key":
								"kjsopdshfk46873ndsjk0388kdmdsn8y32y85xnjsd873jd7yt4f",
						},
						cache: "no-store",
					});

					if (cacheEmailRes.ok) {
						const email = await cacheEmailRes.text();

						if (email) {
							// delete user with cached email
							const delUserRes = await fetch("/api/delete-user", {
								method: "POST",
								body: JSON.stringify({
									email,
								}),
								headers: {
									"Content-Type": "application/json",
									"X-Api-Key":
										"kjsopdshfk46873ndsjk0388kdmdsn8y32y85xnjsd873jd7yt4f",
								},
								cache: "no-store",
							});

							if (delUserRes.ok) {
								signOut({ callbackUrl: `${location.origin}/auth/login` });
							} else {
								setDeleteStatus("failed");
							}
						} else {
							setDeleteStatus("expired_link");
						}
					} else {
						setDeleteStatus("expired_link");
					}
				} catch (error) {
					setDeleteStatus("failed");
				}
			} else {
				setDeleteStatus("expired_link");
			}
		})();
	}, []);
	return (
		<div className=" tw-w-[95%] tw-min-h-[90%] tw-py-3 tw-max-w-[570px] tw-inline-flex tw-flex-col tw-justify-center tw-items-center">
			{deleteStatus == "failed" ? (
				<div className=" tw-block tw-w-full tw-h-max tw-mx-[20px]">
					<p className=" tw-text-center tw-font-exo tw-text-[22px] tw-text-gray-700 dark:tw-text-gray-300">
						Your cormparse account could not be deleted, delete any project you
						created and if your are the lead of any project re-assign leadership
						of the project to someone else, before trying to delete your
						account.
					</p>
					<Link
						href={`/my-profile-view`}
						className=" tw-block tw-w-max tw-h-max tw-py-1 tw-px-5 tw-rounded tw-mt-[20px] tw-mx-auto tw-bg-blue-700 tw-font-russo-one tw-text-white">
						My Profile
					</Link>
				</div>
			) : deleteStatus == "expired_link" ? (
				<div className=" tw-block tw-w-full tw-h-max tw-mx-[20px]">
					<p className=" tw-text-center tw-font-exo tw-text-[22px] tw-text-gray-700 dark:tw-text-gray-300">
						This link is expired or has been used.
					</p>
					<Link
						href={`/my-profile-view`}
						className=" tw-block tw-w-max tw-h-max tw-py-1 tw-px-5 tw-rounded tw-mt-[20px] tw-mx-auto tw-bg-blue-700 tw-font-russo-one tw-text-white">
						My Profile
					</Link>
				</div>
			) : (
				<div className=" tw-block tw-w-full tw-h-max tw-mx-[20px]">
					<InfinityLoadingSpinner />
				</div>
			)}
		</div>
	);
};

export default DeleteUser;
