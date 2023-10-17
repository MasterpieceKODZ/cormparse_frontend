import { ChangeEvent } from "react";

export function validateUsername(e: ChangeEvent<HTMLInputElement>) {
	const username = e.currentTarget.value;

	const usrNameCheck = document.getElementById("username_check");

	usrNameCheck!.textContent = "username is taken";
	usrNameCheck?.classList.add("un_closed");
}
