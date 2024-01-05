export async function togglePersonCompUsernameNrole(tag: string) {
	document.getElementById(`${tag}_un_rl`)?.classList.toggle("tw-hidden");
}
