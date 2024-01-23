"use client";
import ModalForgotPassword from "@/ui_components/auth/modal.forgot.pw";
import FormLogin from "@/ui_components/auth/form.login";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import BtnSignInWithGoogle from "@/ui_components/auth/btn.signin.with.google";
import { getSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { showNotificationBar } from "@/ui_controllers/notification.bar";
import InfinityLoadingSpinner from "@/ui_components/page.loading.ui";
import { getUserBySession } from "@/utils/get.user.by.session";

const Login = () => {
	const router = useRouter();
	const [authCheck, setAuthCheck] = useState(false);

	// check if this page was opened due to a next-auth sign-in error
	const nextError = useSearchParams().get("error");

	//  if user is signed in navigate to projects
	getSession().then((ses) => {
		if (ses) {
			// check that a user account with session email address exists in DB
			getUserBySession(ses).then((result) => {
				// there is an account with the session email
				if (result) {
					router.push("/workspace/projects-list");
				} else {
					signOut({ callbackUrl: `${location.origin}/auth/login` });
				}
			});
		} else {
			setAuthCheck(true);
		}
	});

	useEffect(() => {
		// sign-in error
		if (nextError)
			showNotificationBar(
				"Authentication error! check your network or try again later...",
				"error",
			);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{authCheck ? (
				// if user is not signed in show login form
				<>
					<div className=" tw-w-[95%] tw-min-h-[90%] tw-inline-block tw-py-3 tw-max-w-[570px]">
						<h1
							tabIndex={1}
							className=" tw-text-center tw-text-[20px] sm:tw-text-[25px] tw-mt-3 tw-font-exo tw-text-mygrey-default dark:tw-text-gray-400"
							aria-label="login">
							Login
						</h1>

						<FormLogin />

						<BtnSignInWithGoogle type="Login" />

						<Link
							href="/auth/pre-register-email"
							className="tw-w-[250px] sm:tw-w-[365px] tw-font-russo-one tw-text-[15px] tw-text-center tw-rounded-full tw-text-secondary tw-mt-12 tw-mx-auto tw-block tw-bg-transparent">
							Create Account
						</Link>
					</div>

					<ModalForgotPassword />
				</>
			) : (
				// show spinner while checking user authentication state
				<InfinityLoadingSpinner />
			)}
		</>
	);
};

export default Login;
