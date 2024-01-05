"use client";
import "../../styles/finish.email.signup.css";
import {
	twFormTxtInput,
	twInputLabel,
} from "@/tailwind_classname_utils/login.page";

import GearSpinner from "../icons/gear.spinner";
import { btnPrimaryRounded } from "@/tailwind_classname_utils/buttons";
import { submitGoogleSignUpForm } from "@/ui_controllers/submit.finish.google.siginup.form";
import { useRouter } from "next/navigation";
import { validateUsernameSyntax } from "@/ui_controllers/validate.username.syntax";

const FormFinishGoogleSignUp = ({ user }: any) => {
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
					minLength={3}
					maxLength={100}
					name="username"
					onChange={validateUsernameSyntax}
					className={twFormTxtInput}
					required
				/>
				<p
					id="txt_usr_nm_caution"
					className=" tw-max-w-[420px] tw-font-exo tw-text-red-500 tw-text-[16px] tw-text-start tw-invisible">
					user name cannot contain spaces
				</p>
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
				<GearSpinner fill="tw-fill-white" size={35}/>
			</button>
		</form>
	);
};

export default FormFinishGoogleSignUp;
