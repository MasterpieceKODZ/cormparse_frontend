export async function toggleSidenav() {
	document.getElementById("side_nav")?.classList.toggle("tw-hidden");
	document.getElementById("side_nav")?.classList.toggle("tw-flex");
}
