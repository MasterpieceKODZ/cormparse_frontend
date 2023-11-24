import ForgotPasswordModal from "@/components/forgot.pw.modal";
import LoginForm from "@/components/login.form";
import AuthNavBar from "@/components/navbar";

import Image from "next/image";
import Link from "next/link";
import { NEXT_AUTH_OPTION } from "../../utils/auth.option";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

const Login = async () => {
	// redirect to projects if user is signed in
	const nextAuthOption = NEXT_AUTH_OPTION as any;
	const sessionObj = await getServerSession(nextAuthOption);

	console.log(sessionObj);
	

	if (sessionObj) {
		redirect("/projects");
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
						Login
					</h1>

					<LoginForm />

					<button className="tw-py-[6px] tw-w-[250px] sm:tw-w-[365px] tw-font-russo-one tw-text-[15px] tw-text-center tw-rounded-full tw-text-mygrey-default tw-border-[1px] tw-mt-[25px] tw-mx-auto tw-block tw-bg-transparent tw-shadow-[2px_2px_2px_0_rgba(0,0,0,0.5)]">
						<span className="tw-px-[5px]">
							<Image
								src="/google.png"
								alt="google"
								quality={50}
								width={40}
								height={40}
								className=" tw-w-[25px] tw-h-[25px] tw-mr-[10px] tw-inline"
							/>
						</span>
						Login with Google
					</button>

					<Link
						href="/auth/pre-register-email"
						className="tw-w-[250px] sm:tw-w-[365px] tw-font-russo-one tw-text-[15px] tw-text-center tw-rounded-full tw-text-secondary tw-mt-12 tw-mx-auto tw-block tw-bg-transparent">
						Create Account
					</Link>
				</div>

				<ForgotPasswordModal />
			</main>
		</>
	);
};

export default Login;
