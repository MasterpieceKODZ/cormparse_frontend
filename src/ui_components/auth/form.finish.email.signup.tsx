"use client";
import "../../styles/finish.email.signup.css";
import {
	twFormTxtInput,
	twInputLabel,
} from "@/tailwind_classname_utils/login.page";
import GearSpinner from "../icons/gear.spinner";
import { btnPrimaryRounded } from "@/tailwind_classname_utils/buttons";
import FormPasswordInpBlock from "./form.password.inp.block";
import { submitEmailSignupForm } from "@/ui_controllers/submit.finish.email.signup.form";
import { useRouter } from "next/navigation";
import { validateUsernameSyntax } from "@/ui_controllers/validate.username.syntax";

const FormFinishEmailSignUp = ({ email }: { email: string }) => {
	const router = useRouter();

	return (
		<form
			className=" tw-block tw-mx-auto tw-w-[95%] tw-py-[30px] tw-px-[auto]"
			onSubmit={(e) => submitEmailSignupForm(e, router)}>
			<div className=" tw-mx-auto tw-w-max">
				<label
					htmlFor="inp_firstname"
					className={twInputLabel}>
					Firstname
				</label>
				<input
					type="text"
					id="inp_firstname"
					autoComplete="given-name"
					name="firstname"
					maxLength={50}
					className={twFormTxtInput}
					required
				/>
			</div>
			<div className=" tw-mx-auto tw-w-max">
				<label
					htmlFor="inp_lastname"
					className={twInputLabel}>
					Lastname
				</label>
				<input
					type="text"
					id="inp_lastname"
					autoComplete="family-name"
					name="lastname"
					maxLength={50}
					className={twFormTxtInput}
					required
				/>
			</div>
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
					onChange={validateUsernameSyntax}
					name="username"
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
			<input
				type="text"
				id="email_inp"
				name="emailKey"
				value={email}
				hidden
				readOnly
			/>

			<FormPasswordInpBlock
				showConfirmPassword={true}
				isNew={false}
			/>

			<button
				className={`${btnPrimaryRounded}`}
				type="submit">
				Proceed
				<GearSpinner fill="tw-fill-white" size={35} />
			</button>
		</form>
	);
};

export default FormFinishEmailSignUp;
