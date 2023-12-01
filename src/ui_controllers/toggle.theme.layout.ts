export async function toggleThemeLayout() {
	if (
		document.getElementById("theme_layout")?.classList.contains("tw-hidden")
	) {
		document.querySelectorAll(".popup").forEach((e) => {
			e.classList.add("tw-hidden");
		});
	}
	(document.getElementById("theme_layout") as HTMLElement).classList.toggle(
		"tw-hidden",
	);
}
