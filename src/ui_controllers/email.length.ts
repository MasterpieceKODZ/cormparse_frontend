import { FormEvent } from "react";

export async function checkEmailLength(e: FormEvent<HTMLInputElement>) {
	const email = e.currentTarget.value;

	const emailLenChk = document.getElementById("email_len_chk");

	if (email.length > 50) emailLenChk?.classList.remove("hide");
	else emailLenChk?.classList.add("hide");
}
