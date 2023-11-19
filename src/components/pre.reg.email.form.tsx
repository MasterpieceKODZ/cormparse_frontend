"use client";
import "../styles/pre.reg.email.css";
import { btnPrimaryRounded } from "@/tailwind_classname_utils/buttons";
import {
	twFormTxtInput,
	twInputLabel,
} from "@/tailwind_classname_utils/login.page";
import { preRegisterEmail } from "@/ui_controllers/submit.pre.reg.email.form";
import RadioAnimation from "./radio.animation";

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
					className={twFormTxtInput}
					required
				/>
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
