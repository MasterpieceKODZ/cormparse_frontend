export async function showHideLeftPaneIssueOptions() {
	document.querySelectorAll(".side_pane_opts").forEach((el) => {
		el.classList.toggle("tw-translate-x-[-100%]");
	});
}
