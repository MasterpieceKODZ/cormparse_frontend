import FinishGoogleSignUpForm from "@/components/finish.google.signup.form";
import NavBar from "@/components/navbar";

const FinishGoogleSignUp = () => {
	return (
		<>
			<NavBar />
			<main className=" tw-basis-full tw-grow tw-flex tw-justify-center">
				<div className=" tw-w-[95%] tw-min-h-[90%] tw-inline-block tw-py-3 tw-max-w-[570px]">
					<h1
						tabIndex={1}
						className=" tw-text-center tw-text-[20px] sm:tw-text-[25px] tw-mt-3 tw-font-exo tw-text-mygrey-default"
						aria-label="cormparse login page">
						Finish Sign Up
					</h1>

					<FinishGoogleSignUpForm />
				</div>
			</main>
		</>
	);
};

export default FinishGoogleSignUp;
