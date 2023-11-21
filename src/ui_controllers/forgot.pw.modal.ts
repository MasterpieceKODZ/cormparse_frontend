export function toggleForgotPWmodal() {
	console.log("i Clicked... %$");

	const forgotPwModal = document.getElementById("fgt_pw_mdl");

	forgotPwModal?.classList.toggle("hide");
}
