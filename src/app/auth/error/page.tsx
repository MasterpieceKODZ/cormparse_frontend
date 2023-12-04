"use client";

import AuthNavBar from "@/components/navbar";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const AuthError = () => {
	const [error, setError] = useState("");
	const router = useRouter();
	const errParam = useSearchParams().get("error");

	if (!error && errParam) setError(errParam);
	else if (!errParam) router.back();

	return (
		<>
			{/* <AuthNavBar /> */}

			<main className=" tw-basis-full tw-shrink tw-grow tw-flex tw-justify-center tw-bg-white dark:tw-bg-gray-900">
				<div className=" tw-w-[95%] tw-min-h-[90%] tw-inline-block tw-py-3 tw-max-w-[570px]">
					<div className=" tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-px-4">
						<div>
							<p className=" tw-font-exo tw-text-[20px] tw-text-mygrey-lyt dark:tw-text-gray-400 tw-text-center">
								{errParam == "AccessDenied"
									? "Access Denied! If your are trying to sign in make sure you have an account first.\nIf your are signing in with google the email address you are trying to signing with has probably been used to create an account with credentials sign up. \n Try again with another email address"
									: `Authentication Error: ${errParam}`}
							</p>
							<Link
								href="/auth/login"
								className=" tw-w-max tw-bg-secondary tw-text-white tw-font-russo-one tw-text-center tw-px-6 tw-py-2 tw-text-[15px] tw-block tw-mx-auto tw-mt-[40px] tw-rounded-lg tw-no-underline">
								Close
							</Link>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default AuthError;
