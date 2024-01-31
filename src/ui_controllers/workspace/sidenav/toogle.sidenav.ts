export async function toggleSidenav() {
	document.getElementById("side_nav")?.classList.toggle("tw-hidden");
	document.getElementById("side_nav")?.classList.toggle("tw-flex");
}

export async function closeSideNav() {
	document.getElementById("side_nav")?.classList.remove("tw-flex");
	document.getElementById("side_nav")?.classList.add("tw-hidden");
}
