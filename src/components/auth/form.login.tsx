"use client";
import "../../styles/password.css";
import {
	twFormTxtInput,
	twInputLabel,
} from "@/tailwind_classname_utils/login.page";
import GearSpinner from "../icons/gear.spinner";
import { btnPrimaryRounded } from "@/tailwind_classname_utils/buttons";
import FormPasswordInpBlock from "./form.password.inp.block";
import { FormEvent } from "react";
import { submitSignInForm } from "@/ui_controllers/submit.signin.form";
import { useRouter } from "next/navigation";

import { openForgotPwdModal } from "@/ui_controllers/forgot.pw";

const FormLogin = () => {
	const router = useRouter();
	return (
		<form
			className=" tw-block tw-mx-auto tw-w-[95%] tw-pt-[30px] tw-px-[auto]"
			onSubmit={(e: FormEvent<HTMLFormElement>) => {
				e.preventDefault();

				submitSignInForm().then((res: boolean) => {
					// navigate to projects page if sign in was successfull
					if (res) router.push("/workspace/projects-list");
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

			<FormPasswordInpBlock
				showConfirmPassword={false}
				isNew={false}
			/>
			<div className=" tw-max-w-[450px] tw-w-[80vw] tw-mx-auto tw-h-max tw-flex tw-justify-end tw-items-center">
				<button
					type="button"
					className=" tw-w-max tw-font-russo-one tw-text-[15px] tw-text-center tw-rounded-full tw-text-mygrey-lyt dark:tw-text-gray-400 tw-mt-2 tw-block tw-bg-transparent hover:tw-text-secondary dark:hover:tw-text-secondary"
					onClick={openForgotPwdModal}>
					Forgot Password
				</button>
			</div>

			<button
				className={`${btnPrimaryRounded}`}
				type="submit">
				Proceed
				<GearSpinner />
			</button>
		</form>
	);
};

export default FormLogin;
