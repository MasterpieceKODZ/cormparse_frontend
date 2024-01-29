export function appendPageNumBtn(offset: string | null, projectsCount: number) {
	document.getElementById("page_num_cont")!.innerHTML = "";

	// if projects count is not a multiple of 10 add 1
	const numOfPages =
		projectsCount % 10 < 1
			? projectsCount / 10
			: Math.floor(projectsCount / 10) + 1;

	for (let i = 1; i <= numOfPages; i++) {
		if (offset) {
			if (i != parseInt(offset)) {
				const btn = document.createElement("button");

				btn.setAttribute(
					"class",
					"tw-py-1 tw-px-[5px] tw-bg-blue-600 tw-text-white tw-font-semibold tw-font-russo-one tw-rounded-sm tw-mx-2 tw-text-[12px] page_num_btn",
				);
				btn.textContent = `${i}`;
				btn.onclick = (e) => {
					if (btn.textContent == "1")
						location.assign(`/workspace/projects-list`);
					else
						location.assign(`/workspace/projects-list/page/${btn.textContent}`);
				};
				document.getElementById("page_num_cont")?.appendChild(btn);
			}
		} else {
			if (i > 1) {
				// return if offset is at last page and there is no more data left.

				const btn = document.createElement("button");

				btn.setAttribute(
					"class",
					"tw-py-1 tw-px-[5px] tw-bg-blue-600 tw-text-white tw-font-semibold tw-font-russo-one tw-rounded-sm tw-mx-2 tw-text-[12px] page_num_btn",
				);
				btn.textContent = `${i}`;
				btn.onclick = (e) => {
					if (btn.textContent == "1")
						location.assign(`/workspace/projects-list`);
					else
						location.assign(`/workspace/projects-list/page/${btn.textContent}`);
				};
				document.getElementById("page_num_cont")?.appendChild(btn);
			}
		}
	}
}
