"use client";

import Link from "next/link";

const EmailKeyExpired = ({ description }: { description: string }) => {
	return (
		<div className=" tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-px-4">
			<div>
				<p className=" tw-font-exo tw-text-[20px] tw-text-mygrey-lyt tw-text-center">
					{description}
				</p>
				<Link
					href="/auth/login"
					className=" tw-w-max tw-bg-secondary tw-text-white tw-font-russo-one tw-text-center tw-px-6 tw-py-2 tw-text-[15px] tw-block tw-mx-auto tw-mt-[40px] tw-rounded-lg tw-no-underline">
					Close
				</Link>
			</div>
		</div>
	);
};

export default EmailKeyExpired;
