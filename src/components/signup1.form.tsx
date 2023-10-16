"use client";

import {
	twFormTxtInput,
	twInputLabel,
} from "@/tailwind_classname_utils/login.page";
import { preRegisterEmail } from "@/ui_controllers/signup1.form.submit";

const Sign1upForm = () => {
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
					className=" tw-px-10 tw-py-[8px] tw-w-[250px] sm:tw-w-[365px] tw-font-russo-one tw-text-[15px] tw-text-center tw-rounded-full tw-text-white tw-mt-7 tw-mx-auto tw-block tw-bg-primary tw-shadow-[2px_2px_2px_0_rgba(0,0,0,0.5)]"
					type="submit">
					Next
				</button>
			</form>
	);
};

export default Sign1upForm;
