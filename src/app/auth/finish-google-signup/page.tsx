import FinishGoogleSignUpForm from "@/components/finish.google.signup.form";

import AuthNavBar from "@/components/navbar";
import { NEXT_AUTH_OPTION } from "@/utils/auth.option";
import { getUserBySession } from "@/utils/get.user.by.session";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

const FinishGoogleSignUp = async () => {
	// check if user already has an account
	const session = await getServerSession(NEXT_AUTH_OPTION as any);

	if (session) {
		const isUser = await getUserBySession({ ...session, expires: "" });

		// user exists in DB
		if (isUser) redirect(`${process.env.NEXTAUTH_URL ?? ""}/projects`);
	} else {
		redirect(`${process.env.NEXTAUTH_URL ?? ""}/auth/login`);
	}

	return (
		<>
			<AuthNavBar />

			<main className=" tw-basis-full tw-grow tw-flex tw-justify-center">
				<div className=" tw-w-[95%] tw-min-h-[90%] tw-inline-block tw-py-3 tw-max-w-[570px]">
					<h1
						tabIndex={1}
						className=" tw-text-center tw-text-[20px] sm:tw-text-[25px] tw-mt-3 tw-font-exo tw-text-mygrey-default"
						aria-label="cormparse login page">
						Finish Sign Up
					</h1>

					<FinishGoogleSignUpForm user={(session as any)?.user} />
				</div>
			</main>
		</>
	);
};

export default FinishGoogleSignUp;
