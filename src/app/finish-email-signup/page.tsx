import FinishEmailSignUpForm from "@/components/finish.email.signup.form";
import LoginForm from "@/components/login.form";
import NotificationBar from "@/components/notification.bar";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
	return (
		<>
			<header className="tw-sticky tw-bg-white tw-top-0">
				{/* navbar */}
				<div className=" tw-text-center xsm:tw-text-start ">
					{/*eslint-disable-next-line @next/next/no-img-element*/}
					<img
						src="/logo.png"
						alt="cormparse logo"
						className=" tw-h-8 smst:tw-h-[37px] xxsm:tw-h-[45px] md:tw-h-[50px] xl:tw-h-[60px] tw-my-2 xsm:tw-ms-[45px] xsm:tw-mt-[15px] tw-w-auto tw-inline-block"></img>
				</div>
				{/* notification bar */}
				<NotificationBar />
			</header>
			<main className=" tw-basis-full tw-grow tw-flex tw-justify-center">
				<div className=" tw-w-[95%] tw-min-h-[90%] tw-inline-block tw-py-3 tw-max-w-[570px]">
					<h1
						tabIndex={1}
						className=" tw-text-center tw-text-[20px] sm:tw-text-[25px] tw-mt-3 tw-font-exo tw-text-mygrey-default"
						aria-label="cormparse login page">
						Finish Sign Up
					</h1>

					<FinishEmailSignUpForm />
				</div>
			</main>
		</>
	);
};

export default Login;
