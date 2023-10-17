"use client";
import "../styles/finish.email.signup.css";
import "../styles/password.css";
import {
	twFormTxtInput,
	twInputLabel,
} from "@/tailwind_classname_utils/login.page";
import { submitLoginForm } from "@/ui_controllers/login.form.submit";

import BtnSpinner from "./spinner.btn";
import { validateUsername } from "@/ui_controllers/validate.username";

const FinishGoogleSignUpForm = () => {
	return (
		<form
			className=" tw-block tw-mx-auto tw-w-[95%] tw-py-[30px] tw-px-[auto]"
			onSubmit={submitLoginForm}>
			<div className=" tw-mx-auto tw-w-max">
				<label
					htmlFor="inp_username"
					className={twInputLabel}>
					Username
				</label>
				<input
					type="text"
					id="inp_username"
					name="username"
					onChange={validateUsername}
					className={twFormTxtInput}
					required
				/>
				<p
					id="username_check"
					aria-atomic="true"
					aria-relevant="all"
					aria-live="polite"
					className="tw-ps-2 tw-font-exo tw-text-[10px] md:tw-text-[13px] un_open">
					{"username is available."}
				</p>
			</div>
			<div className=" tw-mx-auto tw-w-max">
				<label
					htmlFor="inp_username"
					className={twInputLabel}>
					Role
				</label>
				<input
					type="text"
					id="inp_username"
					name="role"
					className={twFormTxtInput}
					required
				/>
			</div>

			<button
				className=" tw-px-10 tw-py-[8px] tw-w-[250px] sm:tw-w-[365px] tw-font-russo-one tw-text-[15px] tw-text-center tw-rounded-full tw-text-white tw-mt-7 tw-mx-auto tw-block tw-bg-primary tw-shadow-[2px_2px_2px_0_rgba(0,0,0,0.5)] tw-relative"
				type="submit">
				Finish
				<BtnSpinner />
			</button>
		</form>
	);
};

export default FinishGoogleSignUpForm;
