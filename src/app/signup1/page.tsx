import NotificationBar from "@/components/notification.bar";
import Sign1upForm from "@/components/signup1.form";
import Image from "next/image";
import Link from "next/link";

const RegisterEmail = () => {
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
						Register Email
					</h1>

					<Sign1upForm />
					<button className="tw-py-[6px] tw-w-[250px] sm:tw-w-[365px] tw-font-russo-one tw-text-[15px] tw-text-center tw-rounded-full tw-text-mygrey-default tw-border-[1px] tw-mt-5 tw-mx-auto tw-block tw-bg-transparent tw-shadow-[2px_2px_2px_0_rgba(0,0,0,0.5)]">
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
						Sign Up with Google
					</button>

					<Link
						href="/login"
						className="tw-w-[250px] sm:tw-w-[365px] tw-font-russo-one tw-text-[15px] tw-text-center tw-rounded-full tw-text-secondary tw-mt-12 tw-mx-auto tw-block tw-bg-transparent">
						Login
					</Link>
				</div>
			</main>
		</>
	);
};

export default RegisterEmail;
