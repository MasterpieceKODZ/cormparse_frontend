import { MouseEvent } from "react";

export async function projectsDetailsLeftpaneButtonClick(e: MouseEvent) {
	document.querySelectorAll(".side_pane_btn_wrapper").forEach((el) => {
		el.classList.remove("active");
	});
	e.currentTarget.parentElement?.classList.toggle("active");
}
