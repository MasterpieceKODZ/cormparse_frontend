"use client";

import {
	twFormTxtInput,
	twInputLabel,
} from "@/tailwind_classname_utils/login.page";
import { togglePasswordVisibility } from "@/ui_controllers/password_input/toggle.password";
import {
	checkPwMatch,
	isPasswordSyntaxValid,
} from "@/ui_controllers/password_input/validate.password";

// isNew prop indicates that the password input block is being used to set a new password
const FormPasswordInpBlock = ({
	showConfirmPassword,
	isNew,
}: {
	showConfirmPassword: boolean;
	isNew: boolean;
}) => {
	return (
		<div className=" tw-mx-auto tw-w-max">
			<label
				htmlFor="inp_pw"
				className={twInputLabel}>
				{isNew ? "New" : ""} Password
			</label>
			<p
				id="pw_req"
				aria-atomic="true"
				aria-relevant="all"
				aria-live="polite"
				className="tw-ps-2 tw-font-exo tw-text-[10px] md:tw-text-[13px] tw-text-mygrey-lyt dark:tw-text-gray-400">
				{"min 8/max 32/a-z/A-Z/0-9/[!@$%&*+-.<>]"}
			</p>
			<input
				type="password"
				name="password"
				maxLength={32}
				id="inp_pw"
				onChange={isPasswordSyntaxValid}
				className={`${twFormTxtInput}`}
				required
			/>
			<p
				id="pw_prev"
				className="tw-ps-2 tw-py-2 tw-min-h-[45px] tw-font-exo tw-text-[12px] md:tw-text-[14px] tw-border-[1px] tw-rounded-[2px] hide tw-text-gray-800 dark:tw-text-gray-300"></p>

			{showConfirmPassword ? (
				<>
					<label
						htmlFor="inp_pw"
						className={twInputLabel}>
						Confirm {isNew ? "New" : ""} Password
					</label>
					<input
						type="password"
						name="password"
						maxLength={32}
						id="inp_confirm_pw"
						onChange={checkPwMatch}
						className={`${twFormTxtInput}`}
						required
					/>
					<p
						id="confirm_pw_prev"
						className="tw-ps-2 tw-py-2 tw-min-h-[45px] tw-font-exo tw-text-[12px] md:tw-text-[14px] tw-border-[1px] tw-rounded-[2px] hide tw-text-gray-800 dark:tw-text-gray-300"></p>
					<p
						id="pw_check"
						aria-atomic="true"
						aria-relevant="all"
						aria-live="polite"
						className="tw-ps-2 tw-font-exo tw-text-[10px] md:tw-text-[13px] tw-text-secondary hide">
						passwords do not match.
					</p>
				</>
			) : (
				<></>
			)}
			{/* password toggle */}
			<div className=" tw-w-max tw-mt-[2px]">
				<input
					type="checkbox"
					id="pw_tgl"
					className="tw-accent-primary-blue-lyt tw-cursor-pointer"
					onClick={togglePasswordVisibility}
				/>

				<p className=" tw-inline tw-ps-2 tw-font-exo tw-text-[12px] md:tw-text-[15px] tw-text-primary-blue-lyt tw-font-bold">
					show password
				</p>
			</div>
		</div>
	);
};

export default FormPasswordInpBlock;
