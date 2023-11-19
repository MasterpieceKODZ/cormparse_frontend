export function showRadioAnim() {
	const radioAnim = document.getElementById("radio_anim");
	const preRegNxtBtn = document.getElementById("pre_nxt_btn");

	preRegNxtBtn?.classList.add("hide_prnxt");
	radioAnim?.classList.remove("hide_radio_anim");
}

export function hideRadioAnim() {
	const radioAnim = document.getElementById("radio_anim");
	const preRegNxtBtn = document.getElementById("pre_nxt_btn");

	radioAnim?.classList.add("hide_radio_anim");
	preRegNxtBtn?.classList.remove("hide_prnxt");
}
