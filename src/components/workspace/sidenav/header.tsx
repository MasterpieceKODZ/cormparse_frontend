/* eslint-disable @next/next/no-img-element */

const SideNavHeader = () => {
	return (
		<div className=" tw-h-[25%] tw-w-full ">
			<div className=" tw-w-full tw-h-[70%] tw-relative tw-bg-gradient-to-b tw-from-secondary tw-to-60% tw-to-primary tw-py-7 tw-text-right">
				<p
					id="side_nav_username"
					className="tw-font-russo-one tw-text-[20px] xsm:tw-text-[25px] tw-text-white tw-pr-3 xsm:tw-pr-5">
					MasterpieceKODZ
				</p>
				<p
					id="side_nav_role"
					className=" tw-text-white tw-font-exo tw-text-[13px] xsm:tw-text-[15px] tw-mr-3 xsm:tw-mr-5 tw-mt-1">
					Fullstack Developer
				</p>
				<img
					src="/logo.png"
					alt="user profile pic"
					className=" tw-w-[100px] tw-h-[100px] xsm:tw-w-[130px] xsm:tw-h-[130px] tw-absolute tw-left-[15px] tw-bottom-[-40%] tw-rounded-[15px] tw-object-cover tw-bg-white tw-border-white tw-border-2"
				/>
			</div>
		</div>
	);
};

export default SideNavHeader;
