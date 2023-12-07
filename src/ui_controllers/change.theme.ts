import { MouseEvent } from "react";
import { toggleThemeLayoutOnClick } from "./toggle.theme.layout";

export function changeUITheme(
	e: MouseEvent,
	theme: "dark" | "light" | "default",
	from: "sidenav" | "header",
) {
	localStorage.theme = theme;
	document.documentElement.classList.remove(
		"tw-dark",
		"tw-light",
		"tw-default",
	);
	document.documentElement.classList.add(`tw-${theme}`);

	// Whenever the user explicitly chooses to respect the OS preference
	if (theme == "default") {
		localStorage.removeItem("theme");
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			document.documentElement.classList.add("tw-dark");
		}
	}

	if (from == "header") {
		document.querySelectorAll(".theme_select").forEach((el) => {
			el.classList.remove("active");
		});
	} else {
		document.querySelectorAll(".sidenav_theme_select").forEach((el) => {
			el.classList.remove("active");
		});
	}

	e.currentTarget.classList.add("active");

	if (from == "header") toggleThemeLayoutOnClick();
}
