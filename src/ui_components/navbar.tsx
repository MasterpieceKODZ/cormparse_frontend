import NotificationBar from "./notification.bar";
import ThemeLayout from "./theme.layout";

const AuthNavBar = () => {
	return (
		<header className="tw-sticky tw-bg-white dark:tw-bg-gray-900 tw-top-0 tw-z-50">
			{/* navbar */}
			<div className=" tw-text-center xsm:tw-text-start tw-relative">
				{/*eslint-disable-next-line @next/next/no-img-element*/}
				<img
					src="/name_logo.png"
					alt="cormparse logo"
					className=" tw-h-8 smst:tw-h-[37px] xxsm:tw-h-[45px] md:tw-h-[50px] xl:tw-h-[60px] tw-my-2 xsm:tw-ms-[45px] xsm:tw-mt-[15px] tw-w-auto tw-inline-block"></img>
				<div className=" tw-absolute tw-right-0 tw-top-0 tw-h-full tw-w-max tw-flex tw-justify-start tw-items-center tw-pe-5 xsm:tw-pe-12">
					<ThemeLayout />
				</div>
			</div>
			{/* notification bar */}
			<NotificationBar />
		</header>
	);
};

export default AuthNavBar;
