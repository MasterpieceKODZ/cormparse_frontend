import { MouseEvent } from "react";

export function togglePasswordVisibility(e: MouseEvent<HTMLInputElement>) {
	const pwInput = document.getElementById("inp_lgn_pw");
	if (e.currentTarget.checked) {
		pwInput?.setAttribute("type", "text");
	} else {
		pwInput?.setAttribute("type", "password");
	}
}
