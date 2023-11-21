"use client";
import "../../../styles/password.css";
import GearSpinner from "@/components/gear.spinner";
import AuthNavBar from "@/components/navbar";
import PasswordInpBlock from "@/components/password.inp.block";

import { btnPrimaryRounded } from "@/tailwind_classname_utils/buttons";
import { useState } from "react";
import { fetchEmailAddressWithKey as fetchEmailAddressWithKey } from "@/ui_controllers/fetch.email.address.sign.up";
import InfinityLoadingSpinner from "@/components/page.loading.ui";
import EmailKeyExpired from "@/components/email.key.exp";
import { resetPassword } from "@/ui_controllers/password_input/password.reset";
import { useRouter, useSearchParams } from "next/navigation";
import { getSession } from "next-auth/react";

const ResetPassword = () => {
	const [email, setEmail] = useState("");
	const router = useRouter();
	const emailKey = useSearchParams().get("key");

	// fetch email address from redis cache
	if (!email) fetchEmailAddressWithKey(setEmail, emailKey, router);

	// if user is signed in redirect to projects
	getSession().then((session: any) => {
		if (session) router.replace("/projects");
	});

	return (
		<>
			<AuthNavBar />

			<main className=" tw-basis-full tw-grow tw-flex tw-flex-col tw-justify-center tw-items-center tw-mt-[25px]">
				{email ? (
					// fetch email returned a value (either success or failure)
					<div className=" tw-w-[95%] tw-min-h-[90%] tw-inline-block tw-py-3 tw-max-w-[570px]">
						{email == "not found" ? (
							// the provided key was not found in the cache, link is probably expired, show not-found page
							<EmailKeyExpired description="This password reset link is expired click the button below to close this page." />
						) : email == "failed" ? (
							// there was an error while fetching email from cache, show not-found page
							<EmailKeyExpired description="Oops! Unable to retrieve email from cache, if you came to this page through a password reset email link refresh the page to try again or click the button below to close this page" />
						) : (
							// email successfully retrieved, show sign-up form
							<>
								<h1
									tabIndex={1}
									className=" tw-text-center tw-text-[20px] sm:tw-text-[25px] tw-mt-3 tw-font-exo tw-text-mygrey-default"
									aria-label="cormparse reset password page">
									Reset Password
								</h1>

								<div className=" tw-w-[95%] tw-max-w-[570px] tw-h-[95%] xsm:tw-h-[70%] tw-py-[20px] tw-px-[10px]  tw-shadow-sm tw-flex tw-flex-col tw-justify-center tw-items-center">
									<PasswordInpBlock
										showConfirmPassword={true}
										isNew={true}
									/>

									<button
										className={`${btnPrimaryRounded}`}
										type="button"
										onClick={() => resetPassword(email, router)}>
										Proceed
										<GearSpinner />
									</button>
								</div>
							</>
						)}
					</div>
				) : (
					// fetch email still running
					<InfinityLoadingSpinner />
				)}
				{/* <h1
					tabIndex={1}
					className=" tw-text-center tw-text-[20px] sm:tw-text-[25px] tw-mt-3 tw-font-exo tw-text-mygrey-default"
					aria-label="cormparse login page">
					Reset Password
				</h1>
				<div className=" tw-w-[95%] tw-max-w-[570px] tw-h-[95%] xsm:tw-h-[70%] tw-py-[20px] tw-px-[10px]  tw-shadow-sm tw-flex tw-flex-col tw-justify-center tw-items-center">
					<PasswordInpBlock showConfirmPassword={true} />

					<button
						className={`${btnPrimaryRounded}`}
						type="button">
						Proceed
						<GearSpinner />
					</button>
				</div> */}
			</main>
		</>
	);
};

export default ResetPassword;
