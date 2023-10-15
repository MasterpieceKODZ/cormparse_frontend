import {
	twAppName,
	twBtnGetStarted,
	twIntroTest,
} from "@/tailwind_classname_utils/landing.page.tw";
import Link from "next/link";

const LandingPage = () => {
	return (
		<main className="tw-bg-gradient-to-b tw-from-secondary tw-to-60% tw-to-primary tw-w-screen tw-min-h-screen tw-flex tw-justify-center tw-items-center">
			<div className=" tw-text-center">
				<p className={`${twIntroTest} `}>Manage Your Project With</p>
				<h1 className={twAppName}>CORMPARSE</h1>
				<p className={`${twIntroTest}`}>Simple And Effective Issue Tracker</p>
				<Link
					href="/login"
					className={`${twBtnGetStarted}`}>
					GET STARTED
				</Link>
			</div>
		</main>
	);
};

export default LandingPage;
