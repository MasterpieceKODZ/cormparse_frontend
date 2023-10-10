import { FormEvent } from "react";

export default function submitForm(e: FormEvent<HTMLFormElement>) {
	e.preventDefault();

	const inpQut = document.getElementById("inp-qut") as HTMLInputElement;

	document.getElementById("p-show-qut")!.textContent = inpQut.value as string;
}
