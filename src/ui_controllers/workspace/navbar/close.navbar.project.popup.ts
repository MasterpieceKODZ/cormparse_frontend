export async function closeAllPopup() {
	document.querySelectorAll(".popup").forEach((e) => {
		e.classList.add("tw-hidden");
	});
}
