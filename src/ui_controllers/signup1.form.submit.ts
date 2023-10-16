import { FormEvent } from "react";

export function preRegisterEmail(e: FormEvent<HTMLFormElement>) {
	e.preventDefault();

	window.alert("Email registered");
}
