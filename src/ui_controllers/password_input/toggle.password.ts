import { MouseEvent } from "react";

export function togglePasswordVisibility(
	e: MouseEvent<HTMLInputElement>,
	setPwType: any,
) {
	//const pwInput = document.getElementById("inp_pw");
	if (e.currentTarget.checked) {
		setPwType("text");
	} else {
		setPwType("password");
	}
}
