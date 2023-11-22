"use client";
import "../styles/pre.reg.email.css";
import { btnPrimaryRounded } from "@/tailwind_classname_utils/buttons";
import {
	twFormTxtInput,
	twInputLabel,
} from "@/tailwind_classname_utils/login.page";
import { preRegisterEmail } from "@/ui_controllers/submit.pre.reg.email.form";
import RadioAnimation from "./radio.animation";
import { checkEmailLength } from "@/ui_controllers/email.length";

const EmailRegForm = () => {
	return (
		<form
			className=" tw-block tw-mx-auto tw-w-[95%] tw-pt-[30px] tw-px-[auto]"
			onSubmit={preRegisterEmail}>
			<div className=" tw-mx-auto tw-w-max">
				<label
					htmlFor="inp_reg_email"
					className={twInputLabel}>
					Email
				</label>
				<input
					type="email"
					id="inp_reg_email"
					autoComplete="email"
					name="email"
					onChange={checkEmailLength}
					className={twFormTxtInput}
					required
				/>
				<p
					id="email_len_chk"
					aria-atomic="true"
					aria-relevant="all"
					aria-live="polite"
					className="tw-ps-2 tw-font-exo tw-text-[10px] md:tw-text-[13px] tw-text-secondary hide">
					email address should not be longer than 50 characters.
				</p>
			</div>
			<button
				className={`${btnPrimaryRounded} tw-min-h-[51px]`}
				type="submit">
				<span
					id="pre_nxt_btn"
					className="">
					Next
				</span>
				<RadioAnimation />
			</button>
		</form>
	);
};

export default EmailRegForm;
