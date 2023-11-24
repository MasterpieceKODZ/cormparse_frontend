"use client";
import "../styles/finish.email.signup.css";
import "../styles/password.css";
import {
	twFormTxtInput,
	twInputLabel,
} from "@/tailwind_classname_utils/login.page";
import GearSpinner from "./gear.spinner";
import { btnPrimaryRounded } from "@/tailwind_classname_utils/buttons";
import PasswordInpBlock from "./password.inp.block";
import { submitEmailSignupForm } from "@/ui_controllers/submit.finish.email.signup.form";
import { useRouter } from "next/navigation";

const FinishEmailSignUpForm = ({ email }: { email: string }) => {
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
					maxLength={100}
					name="username"
					className={twFormTxtInput}
					required
				/>
			</div>
			<div className=" tw-mx-auto tw-w-max">
				<label
					htmlFor="inp_username"
					className={twInputLabel}>
					Role
				</label>
				<input
					type="text"
					id="inp_role"
					name="role"
					maxLength={50}
					className={twFormTxtInput}
					required
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

			<PasswordInpBlock
				showConfirmPassword={true}
				isNew={false}
			/>

			<button
				className={`${btnPrimaryRounded}`}
				type="submit">
				Proceed
				<GearSpinner />
			</button>
		</form>
	);
};

export default FinishEmailSignUpForm;
