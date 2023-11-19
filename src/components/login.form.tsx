"use client";
import "../styles/password.css";
import {
	twFormTxtInput,
	twInputLabel,
} from "@/tailwind_classname_utils/login.page";
import GearSpinner from "./gear.spinner";
import { btnPrimaryRounded } from "@/tailwind_classname_utils/buttons";
import PasswordInpBlock from "./password.inp.block";
import { FormEvent } from "react";
import { submitSignInForm } from "@/ui_controllers/submit.signin.form";
import { useRouter } from "next/navigation";

const LoginForm = () => {
	const router = useRouter();
	return (
		<form
			className=" tw-block tw-mx-auto tw-w-[95%] tw-pt-[30px] tw-px-[auto]"
			onSubmit={(e: FormEvent<HTMLFormElement>) => {
				e.preventDefault();

				submitSignInForm().then((res: boolean) => {
					// navigate to projects page if sign in was successfull
					if (res) router.push("/projects");
				});
			}}>
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
			<PasswordInpBlock showConfirmPassword={false} />

			<button
				className={`${btnPrimaryRounded}`}
				type="submit">
				Proceed
				<GearSpinner />
			</button>
		</form>
	);
};

export default LoginForm;
