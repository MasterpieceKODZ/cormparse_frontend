"use client";
import { toggleSignOutOptions } from "@/ui_controllers/profile_view/toggle.sign.out.options";
import IconSignOutOptions from "../icons/sign.out.options";
import { signOut } from "next-auth/react";
import {
	deleteAccount,
	toggleConfirmDeleteAccountPopup,
} from "@/ui_controllers/profile_view/show.hide.confirm.delete.acct";

const ProfileViewMoreOptions = () => {
	return (
		<div className=" tw-w-max tw-h-max tw-absolute tw-top-[50px] tw-right-[50px]">
			<button
				className=" tw-w-max tw-h-max"
				title="sign-out"
				onClick={toggleSignOutOptions}>
				<IconSignOutOptions />
			</button>
			<div
				id="prf_vw_opt_popup"
				className=" tw-w-max tw-h-max tw-absolute tw-top-0 tw-z-50 tw-right-[105%] tw-border tw-border-gray-500 tw-rounded tw-py-4 tw-bg-slate-200 dark:tw-bg-slate-700 tw-hidden popup">
				<button
					className=" tw-w-full tw-h-max tw-block tw-px-4 tw-pt-1 tw-pb-2 tw-border-b tw-border-b-gray-500 tw-font-russo-one  tw-text-[16px] tw-text-gray-700 dark:tw-text-gray-300"
					onClick={() =>
						signOut({ callbackUrl: `${location.origin}/auth/login` })
					}>
					Sign-Out
				</button>
				<button
					className=" tw-w-max tw-h-max tw-block tw-px-4 tw-py-1 tw-mt-2 tw-font-russo-one  tw-text-[16px] tw-text-red-600"
					onClick={toggleConfirmDeleteAccountPopup}>
					Delete My Account
				</button>
			</div>
			{/* confirm delete account */}
			<div
				id="cont_del_acct_popup"
				className=" tw-w-max tw-h-max tw-max-w-[350px] tw-absolute tw-top-0 tw-z-50 tw-right-[105%] tw-border tw-border-gray-500 tw-rounded tw-py-4 tw-bg-slate-200 dark:tw-bg-slate-700 tw-hidden popup">
				<p className=" tw-font-exo tw-text-gray-700 dark:tw-text-gray-300 tw-mb-4 tw-px-3 tw-text-[17px] tw-text-center">
					Are you sure you want to delete your cormparse account? all your data
					will be deleted permanently too.
				</p>
				<div className=" tw-w-full tw-h-max tw-flex tw-justify-around tw-items-center tw-mt-5">
					<button
						className=" tw-w-max tw-h-max tw-py-1 tw-px-5 tw-rounded tw-bg-green-600 tw-text-white tw-font-russo-one"
						onClick={toggleConfirmDeleteAccountPopup}>
						No
					</button>
					<button
						className=" tw-w-max tw-h-max tw-py-1 tw-px-5 tw-rounded tw-bg-red-600 tw-text-white tw-font-russo-one"
						onClick={deleteAccount}>
						Yes
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProfileViewMoreOptions;
