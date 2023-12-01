"use client";
import "../styles/finish.email.signup.css";
import "../styles/password.css";
import {
	twFormTxtInput,
	twInputLabel,
} from "@/tailwind_classname_utils/login.page";

import GearSpinner from "./gear.spinner";
import { btnPrimaryRounded } from "@/tailwind_classname_utils/buttons";
import { submitGoogleSignUpForm } from "@/ui_controllers/submit.finish.google.siginup.form";
import { useRouter } from "next/navigation";

const FinishGoogleSignUpForm = ({ user }: any) => {
	const router = useRouter();

	return (
		<form
			className=" tw-block tw-mx-auto tw-w-[95%] tw-py-[30px] tw-px-[auto]"
			onSubmit={(e) => {
				e.preventDefault();
				submitGoogleSignUpForm(user, router);
			}}>
			<div className=" tw-mx-auto tw-w-max">
				<label
					htmlFor="inp_username"
					className={twInputLabel}>
					Username
				</label>
				<input
					type="text"
					id="inp_username"
					maxLength={100}
					name="username"
					className={twFormTxtInput}
					required
				/>
			</div>
			<div className=" tw-mx-auto tw-w-max">
				<label
					htmlFor="inp_username"
					className={twInputLabel}>
					Role (Optional)
				</label>
				<input
					type="text"
					id="inp_role"
					name="role"
					maxLength={50}
					className={twFormTxtInput}
				/>
			</div>

			<button
				className={`${btnPrimaryRounded}`}
				type="submit">
				Finish
				<GearSpinner />
			</button>
		</form>
	);
};

export default FinishGoogleSignUpForm;
