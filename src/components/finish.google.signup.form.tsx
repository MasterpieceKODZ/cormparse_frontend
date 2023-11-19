"use client";
import "../styles/finish.email.signup.css";
import "../styles/password.css";
import {
	twFormTxtInput,
	twInputLabel,
} from "@/tailwind_classname_utils/login.page";

import GearSpinner from "./gear.spinner";
import { btnPrimaryRounded } from "@/tailwind_classname_utils/buttons";
import { toggleSpinner } from "@/ui_controllers/toggle.gear.spinner";

const FinishGoogleSignUpForm = () => {
	return (
		<form className=" tw-block tw-mx-auto tw-w-[95%] tw-py-[30px] tw-px-[auto]">
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
				className={`${btnPrimaryRounded}`}
				onClick={toggleSpinner}
				type="submit">
				Finish
				<GearSpinner />
			</button>
		</form>
	);
};

export default FinishGoogleSignUpForm;
