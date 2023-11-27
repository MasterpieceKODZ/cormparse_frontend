"use client";

import { signInWithGoogle } from "@/ui_controllers/login.with.google";
import Image from "next/image";

const BtnSignInWithGoogle = ({ type }: { type: string }) => {
	return (
		<button
			className="tw-py-[6px] tw-w-[250px] sm:tw-w-[365px] tw-font-russo-one tw-text-[15px] tw-text-center tw-rounded-full tw-text-mygrey-default tw-border-[1px] tw-mt-[25px] tw-mx-auto tw-block tw-bg-transparent tw-shadow-[2px_2px_2px_0_rgba(0,0,0,0.5)]"
			onClick={signInWithGoogle}>
			<span className="tw-px-[5px]">
				<Image
					src="/google.png"
					alt="google"
					quality={50}
					width={40}
					height={40}
					className=" tw-w-[25px] tw-h-[25px] tw-mr-[10px] tw-inline"
				/>
			</span>
			{type} with Google
		</button>
	);
};

export default BtnSignInWithGoogle;
