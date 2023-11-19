export async function toggleSpinner() {
	const loadingSpinner = document.getElementById("loading_spinner");

	loadingSpinner?.classList.toggle("hide_spinner");
}
