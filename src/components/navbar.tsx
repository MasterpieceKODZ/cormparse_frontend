import NotificationBar from "./notification.bar";

const NavBar = () => {
	return (
		<header className="tw-sticky tw-bg-white tw-top-0">
			{/* navbar */}
			<div className=" tw-text-center xsm:tw-text-start ">
				{/*eslint-disable-next-line @next/next/no-img-element*/}
				<img
					src="/logo.png"
					alt="cormparse logo"
					className=" tw-h-8 smst:tw-h-[37px] xxsm:tw-h-[45px] md:tw-h-[50px] xl:tw-h-[60px] tw-my-2 xsm:tw-ms-[45px] xsm:tw-mt-[15px] tw-w-auto tw-inline-block"></img>
			</div>
			{/* notification bar */}
			<NotificationBar />
		</header>
	);
};

export default NavBar;
