"use client";
import EmailKeyExpired from "@/components/email.key.exp";
import FinishEmailSignUpForm from "@/components/finish.email.signup.form";
import NavBar from "@/components/navbar";
import InfinityLoadingSpinner from "@/components/page.loading.ui";
import { useFetchEmailAddressWithKey } from "@/ui_controllers/fetch.email.address.sign.up";
import { useState } from "react";

const FinishEmailSignUp = () => {
	const [email, setEmail] = useState("");

	// fetch email address from redis cache
	useFetchEmailAddressWithKey(setEmail);

	return (
		<>
			<NavBar />
			<main className=" tw-basis-full tw-grow tw-flex tw-justify-center">
				{email ? (
					// fetch email returned a value (either success or failure)
					<div className=" tw-w-[95%] tw-min-h-[90%] tw-inline-block tw-py-3 tw-max-w-[570px]">
						{email == "not found" ? (
							// the provided key was not found in the cache, link is probably expired, show not-found page
							<EmailKeyExpired description="This verification link is expired click the button below to go back to pre-register email page." />
						) : email == "failed" ? (
							// there was an error while fetching email from cache, show not-found page
							<EmailKeyExpired description="Oops! Unable to retrieve email from cache, if your came to this page through a verification email refresh the page to try again or click the button below to go back to the pre-register email page" />
						) : (
							// email successfully retrieved, show sign-up form
							<>
								<h1
									tabIndex={1}
									className=" tw-text-center tw-text-[20px] sm:tw-text-[25px] tw-mt-3 tw-font-exo tw-text-mygrey-default"
									aria-label="cormparse login page">
									Finish Sign Up
								</h1>

								<FinishEmailSignUpForm email={email} />
							</>
						)}
					</div>
				) : (
					// fetch email still running
					<InfinityLoadingSpinner />
				)}
			</main>
		</>
	);
};

export default FinishEmailSignUp;
