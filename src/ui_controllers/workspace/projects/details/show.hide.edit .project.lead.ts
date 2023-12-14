import { ChangeEvent } from "react";

export async function showEditProjectLeadPopup() {
	document.getElementById("btn_edt_prjct_lead")?.classList.add("tw-hidden");
	document
		.getElementById("btn_cls_edt_prjct_lead")
		?.classList.remove("tw-hidden");
	document.getElementById("edt_prjct_lead_layt")?.classList.remove("tw-hidden");
}

export async function hideEditProjectLeadPopup() {
	document.getElementById("btn_cls_edt_prjct_lead")?.classList.add("tw-hidden");
	document.getElementById("btn_edt_prjct_lead")?.classList.remove("tw-hidden");
	document
		.getElementById("edt_prjct_lead_sugest_lay")
		?.classList.add("tw-hidden");
	document.getElementById("edt_prjct_lead_layt")?.classList.add("tw-hidden");
}

export async function showEditProjectLeadSuggestLayout(e: ChangeEvent) {
	const value = (e.currentTarget as HTMLInputElement).value;

	if (value.trim())
		document
			.getElementById("edt_prjct_lead_sugest_lay")
			?.classList.remove("tw-hidden");
}
