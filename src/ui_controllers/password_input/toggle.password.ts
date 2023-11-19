import { MouseEvent } from "react";

export async function togglePasswordVisibility(
	e: MouseEvent<HTMLInputElement>,
) {
	const pwInp = document.getElementById("inp_pw") as HTMLInputElement;
	const pwInpPrev = document.getElementById("pw_prev");

	pwInpPrev!.textContent = pwInp.value;
	pwInpPrev?.classList.toggle("hide");

	const confirmPwInp = document.getElementById(
		"inp_confirm_pw",
	) as HTMLInputElement;

	if (confirmPwInp) {
		const confirmPwPrev = document.getElementById("confirm_pw_prev");

		confirmPwPrev!.textContent = confirmPwInp.value;
		confirmPwPrev!.classList.toggle("hide");
	}
}
