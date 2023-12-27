"use client";
import IconPlus from "@/ui_components/icons/plus";
import { showNewPersonPopup } from "@/ui_controllers/workspace/people/open.close.new.person.popup";
import { useEffect } from "react";

const BtnAddPersonToProject = () => {
	useEffect(() => {
		// mark left pane people button as active
		document.querySelectorAll(".side_pane_btn_wrapper").forEach((el) => {
			el.classList.remove("active");
		});
		document
			.querySelector(".left_pane_btn_wrapper_people")
			?.classList.add("active");
		//
	});
	return (
		<button
			className=" tw-py-2 tw-px-6 tw-bg-secondary tw-text-white tw-text-[18px] tw-font-russo-one tw-absolute tw-top-[40px] tw-right-[30px] tw-rounded tw-text-center"
			onClick={showNewPersonPopup}>
			<span>
				<IconPlus stroke="tw-stroke-white" />
			</span>
			<span className=" tw-ms-4">New Person</span>
		</button>
	);
};

export default BtnAddPersonToProject;
