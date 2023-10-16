"use client";
import "../styles/login.css";
import {
	twFormTxtInput,
	twInputLabel,
} from "@/tailwind_classname_utils/login.page";
import { submitLoginForm } from "@/ui_controllers/login.form.submit";
import { validatePasswordSyntax } from "@/ui_controllers/password_input/validate.password";
import { togglePasswordVisibility } from "@/ui_controllers/password_input/toggle.password";
import { useState } from "react";
import BtnSpinner from "./spinner.btn";

const LoginForm = () => {
	const [pwType, setPwType] = useState("password");

	return (
		<form
			className=" tw-block tw-mx-auto tw-w-[95%] tw-pt-[30px] tw-px-[auto]"
			onSubmit={submitLoginForm}>
			<div className=" tw-mx-auto tw-w-max">
				<label
					htmlFor="inp_lgn_email"
					className={twInputLabel}>
					Email
				</label>
				<input
					type="email"
					id="inp_lgn_email"
					autoComplete="email"
					name="email"
					className={twFormTxtInput}
					required
				/>
			</div>
			<div className=" tw-mx-auto tw-w-max">
				<label
					htmlFor="inp_lgn_pw"
					className={twInputLabel}>
					Password
				</label>
				<input
					id="inp_pw"
					name="password"
					type={pwType}
					className={`${twFormTxtInput}`}
					onChange={validatePasswordSyntax}
					required
				/>
				<p
					id="pw_req"
					aria-atomic="true"
					aria-relevant="all"
					aria-live="polite"
					className="tw-ps-2 tw-font-exo tw-text-[10px] md:tw-text-[13px] tw-text-mygrey-lyt ">
					{"min 8|max 32|a-z|A-Z|0-9|[!@$%&*+-.<>]"}
				</p>
				{/* password toggle */}
				<div className=" tw-w-max tw-mt-[2px]">
					<input
						type="checkbox"
						id="pw_tgl"
						className="tw-accent-primary-blue-lyt tw-cursor-pointer"
						onClick={(e) => togglePasswordVisibility(e, setPwType)}
					/>

					<p className=" tw-inline tw-ps-2 tw-font-exo tw-text-[12px] md:tw-text-[15px] tw-text-primary-blue-lyt tw-font-bold">
						show password
					</p>
				</div>
			</div>

			<button
				className=" tw-px-10 tw-py-[8px] tw-w-[250px] sm:tw-w-[365px] tw-font-russo-one tw-text-[15px] tw-text-center tw-rounded-full tw-text-white tw-mt-7 tw-mx-auto tw-block tw-bg-primary tw-shadow-[2px_2px_2px_0_rgba(0,0,0,0.5)] tw-relative"
				type="submit">
				Proceed
				<BtnSpinner />
			</button>
		</form>
	);
};

export default LoginForm;
