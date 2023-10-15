"use client";

import {
	twFormTxtInput,
	twInputLabel,
} from "@/tailwind_classname_utils/login.page";
import { togglePasswordVisibility } from "@/ui_controllers/toggle.password";

const LoginForm = () => {
	return (
		<form className=" tw-block tw-mx-auto tw-w-[95%] tw-pt-[30px] tw-px-[auto]">
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
					className={twFormTxtInput}
				/>
			</div>
			<div className=" tw-mx-auto tw-w-max">
				<label
					htmlFor="inp_lgn_pw"
					className={twInputLabel}>
					Password
				</label>
				<input
					type="password"
					id="inp_lgn_pw"
					className={`${twFormTxtInput}`}
				/>
				{/* password toggle */}
				<div className=" tw-w-max tw-mt-1">
					<input
						type="checkbox"
						id="pw-tgl"
						className="tw-accent-primary-blue-lyt tw-cursor-pointer"
						onClick={togglePasswordVisibility}
					/>
					<p className=" tw-inline tw-ps-2 tw-font-exo tw-text-[12px] md:tw-text-[15px] tw-text-primary-blue-lyt tw-font-bold">
						show password
					</p>
				</div>
			</div>

			<button
				className=" tw-px-10 tw-py-[8px] tw-w-[250px] sm:tw-w-[365px] tw-font-russo-one tw-text-[15px] tw-text-center tw-rounded-full tw-text-white tw-mt-7 tw-mx-auto tw-block tw-bg-primary tw-shadow-[2px_2px_2px_0_rgba(0,0,0,0.5)]"
				type="submit">
				Proceed
			</button>
		</form>
	);
};

export default LoginForm;
