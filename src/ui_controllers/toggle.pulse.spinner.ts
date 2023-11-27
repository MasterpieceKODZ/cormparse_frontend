export async function togglePulseSpinner() {
	const loadingSpinner = document.getElementById("pulse_anim");

	loadingSpinner?.classList.toggle("hide_pulse_anim");
}
