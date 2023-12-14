import { ChangeEvent } from "react";

export async function showEditProjectDefaultAssigneePopup() {
	document
		.getElementById("btn_edt_prjct_def_assign")
		?.classList.add("tw-hidden");
	document
		.getElementById("btn_cls_edt_prjct_def_assign")
		?.classList.remove("tw-hidden");
	document
		.getElementById("edt_prjct_def_assign_layt")
		?.classList.remove("tw-hidden");
}

export async function hideEditProjectDefaultAssigneePopup() {
	document
		.getElementById("btn_cls_edt_prjct_def_assign")
		?.classList.add("tw-hidden");
	document
		.getElementById("btn_edt_prjct_def_assign")
		?.classList.remove("tw-hidden");
	document
		.getElementById("edt_prjct_def_assign_sugest_lay")
		?.classList.add("tw-hidden");
	document
		.getElementById("edt_prjct_def_assign_layt")
		?.classList.add("tw-hidden");
}

export async function showEditProjectDefaultAssigneeSuggestLayout(
	e: ChangeEvent,
) {
	const value = (e.currentTarget as HTMLInputElement).value;

	if (value.trim())
		document
			.getElementById("edt_prjct_def_assign_sugest_lay")
			?.classList.remove("tw-hidden");
}
