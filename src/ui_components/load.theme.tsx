/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect } from "react";

// a dummy component used to apply theme when the website loads, this is to avoid making the main layout a client component because that will make all the pages of this project render as client components.
export default function LoadTheme() {
	useEffect(() => {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.remove(
				"tw-dark",
				"tw-light",
				"tw-default",
			);
			document.documentElement.classList.add("tw-dark");

			document.querySelectorAll(".theme_select").forEach((el) => {
				el.classList.remove("active");
			});
			document.getElementById("select_theme_drk")?.classList.add("active");
		} else if (localStorage.theme) {
			document.documentElement.classList.add(`tw-${localStorage.theme}`);
			document.querySelectorAll(".theme_select").forEach((el) => {
				el.classList.remove("active");
			});

			document.getElementById("select_theme_lgt")?.classList.add("active");
		} else {
			document.documentElement.classList.remove("tw-dark", "tw-light");
			document.getElementById("select_theme_def")?.classList.add("active");
		}
	});
	return <p className=" tw-w-0 tw-h-0">Load</p>;
}
