"use client";
import IconHamburger from "@/components/icons/hamburger.icon";
import { toggleSidenav } from "@/ui_controllers/workspace/sidenav/toogle.sidenav";

const ButtonHambuger = () => {
	return (
		<button
			aria-label="open side navigation pane"
			className=" tw-inline-block tw-bg-transparent smmd:tw-hidden tw-mr-4"
			onClick={toggleSidenav}>
			<IconHamburger />
		</button>
	);
};

export default ButtonHambuger;
