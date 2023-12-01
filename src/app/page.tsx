import {
	twAppName,
	twBtnGetStarted,
	twIntroTest,
} from "@/tailwind_classname_utils/landing.page.tw";
import { NEXT_AUTH_OPTION } from "@/utils/auth.option";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const LandingPage = async () => {
	// redirect to projects if user is signed in
	const sessionObj = await getServerSession(NEXT_AUTH_OPTION as any);

	if (sessionObj) {
		redirect("/workspace/projects");
	}
	return (
		<main className="tw-bg-gradient-to-b tw-from-secondary tw-to-60% tw-to-primary tw-w-screen tw-min-h-screen tw-flex tw-justify-center tw-items-center">
			<div className=" tw-text-center">
				<p className={`${twIntroTest} `}>Manage Your Project With</p>
				<h1 className={twAppName}>CORMPARSE</h1>
				<p className={`${twIntroTest}`}>Simple And Effective Issue Tracker</p>
				<Link
					href="/auth/login"
					className={`${twBtnGetStarted}`}>
					GET STARTED
				</Link>
			</div>
		</main>
	);
};

export default LandingPage;
