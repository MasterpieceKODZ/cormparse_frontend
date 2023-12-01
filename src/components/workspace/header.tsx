import Image from "next/image";
import NotificationBar from "../notification.bar";
import ThemeLayout from "../theme.layout";
import NavMyWorkBtn from "./workspace_nav_bar/my_work/navbar.btn";
import NavProjectsBtn from "./workspace_nav_bar/projects/navbar.btn";
import HambugerButton from "./workspace_nav_bar/humburger.btn";

const WorkSpaceHeader = () => {
	return (
		<header className="tw-sticky tw-bg-white dark:tw-bg-gray-900 tw-top-0 tw-z-20">
			<div className="tw-relative tw-flex tw-justify-center tw-items-center">
				{/*eslint-disable-next-line @next/next/no-img-element*/}
				<img
					src="/name_logo.png"
					alt="cormparse logo"
					className=" tw-h-8 smst:tw-h-[37px] xxsm:tw-h-[45px] md:tw-h-[50px] xl:tw-h-[60px] tw-my-2 tw-ms-3 xsm:tw-ms-[25px] md:tw-ms-[45px] xsm:tw-mt-[15px] tw-w-auto tw-inline-block"></img>
				<div className=" tw-basis-full tw-shrink tw-grow tw-flex tw-items-center tw-justify-end">
					<div className="tw-items-center tw-justify-end tw-hidden smmd:tw-flex ">
						<div className=" tw-w-max tw-h-full md:tw-mr-5 tw-inline-flex tw-items-center">
							<NavMyWorkBtn />
							<NavProjectsBtn />
						</div>
						<div className="tw-h-full tw-w-max tw-inline-flex tw-justify-start tw-items-center tw-pe-5 xsm:tw-pe-12">
							<ThemeLayout />
						</div>
						<Image
							src="/logo.png"
							width={40}
							height={40}
							alt="user display picture"
							className=" tw-inline-block tw-w-[40px] tw-h-[40px] tw-object-cover tw-object-center tw-rounded-[50%] tw-mr-6"
						/>
					</div>
				</div>
				<HambugerButton />
			</div>
			{/* notification bar */}
			<NotificationBar />
		</header>
	);
};

export default WorkSpaceHeader;
