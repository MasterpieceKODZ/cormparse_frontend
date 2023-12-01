"use client";
import HamburgerIcon from "@/components/hamburger.icon";
import { toggleSidenav } from "@/ui_controllers/workspace/sidenav/toogle.sidenav";

const HambugerButton = () => {
	return (
		<button
			className=" tw-inline-block tw-bg-transparent smmd:tw-hidden tw-mr-4"
			onClick={toggleSidenav}>
			<HamburgerIcon />
		</button>
	);
};

export default HambugerButton;
