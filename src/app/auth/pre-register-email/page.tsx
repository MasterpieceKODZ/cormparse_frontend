import Link from "next/link";
import { NEXT_AUTH_OPTION } from "../../../utils/auth.option.js";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import FormEmailReg from "@/ui_components/auth/form.pre.reg.email";
import BtnSignInWithGoogle from "@/ui_components/auth/btn.signin.with.google";

const RegisterEmail = async () => {
	// redirect to projects if user is signed in
	const sessionObj = await getServerSession(NEXT_AUTH_OPTION as any);

	if (sessionObj) {
		redirect("/workspace/projects-list");
	}
	return (
		<div className=" tw-w-[95%] tw-min-h-[90%] tw-inline-block tw-py-3 tw-max-w-[570px]">
			<h1
				tabIndex={1}
				className=" tw-text-center tw-text-[20px] sm:tw-text-[25px] tw-mt-3 tw-font-exo tw-text-mygrey-default dark:tw-text-gray-400"
				aria-label="register email">
				Register Email
			</h1>

			<FormEmailReg />

			<BtnSignInWithGoogle type="Sign Up" />

			<Link
				href="/auth/login"
				className="tw-w-[250px] sm:tw-w-[365px] tw-font-russo-one tw-text-[15px] tw-text-center tw-rounded-full tw-text-secondary tw-mt-12 tw-mx-auto tw-block tw-bg-transparent">
				Login
			</Link>
		</div>
	);
};

export default RegisterEmail;
