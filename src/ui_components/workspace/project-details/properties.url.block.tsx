"use client";
import { twFormTxtInput } from "@/tailwind_classname_utils/login.page";
import { useEffect } from "react";

const ProjectPropsURLInpBlck = () => {
	useEffect(() => {
		// mark left pane people button as active
		document.querySelectorAll(".side_pane_btn_wrapper").forEach((el) => {
			el.classList.remove("active");
		});
		document
			.querySelector(".left_pane_btn_wrapper_setting")
			?.classList.add("active");
		//
	}, []);
	return (
		<div>
			<p
				className=" tw-text-start tw-font-exo tw-text-gray-800 dark:tw-text-gray-400 tw-text-[18px] tw-py-2 tw-px-5 tw-mt-[20px] tw-w-max tw-bg-gray-100 dark:tw-bg-gray-700 tw-rounded-md tw-cursor-pointer"
				onClick={(e) => {
					e.currentTarget.classList.add("tw-hidden");
					document
						.getElementById("proj_url_inp")!
						.classList.remove("tw-hidden");
				}}>
				https://www.cormparse.ddns.net
			</p>
			<input
				type="text"
				id="proj_url_inp"
				className={`${twFormTxtInput} tw-hidden`}
			/>
		</div>
	);
};

export default ProjectPropsURLInpBlck;
