"use client";
import { sendForgotPwdLink } from "@/ui_controllers/forgot.pw";
import { toggleForgotPWmodal } from "@/ui_controllers/forgot.pw.modal";

const ForgotPasswordModal = () => {
	return (
		<div
			id="fgt_pw_mdl"
			className="tw-w-full tw-h-full tw-bg-white tw-absolute tw-z-10 tw-flex tw-justify-center tw-items-center hide">
			<div className=" tw-w-[95%] tw-max-w-[570px] tw-h-[95%] xsm:tw-h-[70%] tw-py-[20px] tw-px-[10px] tw-rounded-lg tw-border-[1px] tw-border-mygrey-lyt tw-shadow-sm tw-flex tw-flex-col tw-justify-center tw-items-center">
				<p className=" tw-font-exo tw-text-[22px] tw-text-center">
					A password reset link will be sent to the provided email address, to
					receive the email click the button below
				</p>
				<div className=" tw-flex tw-justify-center tw-items-center tw-mt-[45px]">
					<button
						className=" tw-w-max tw-py-1 tw-px-5 tw-mr-[25px] tw-rounded tw-font-russo-one tw-text-white tw-bg-secondary"
						onClick={toggleForgotPWmodal}>
						CLOSE
					</button>
					<button
						className=" tw-w-max tw-py-1 tw-px-5 tw-ml-[25px] tw-rounded tw-font-russo-one tw-text-white tw-bg-primary"
						onClick={sendForgotPwdLink}>
						SEND EMAIL
					</button>
				</div>
			</div>
		</div>
	);
};

export default ForgotPasswordModal;