export async function appendIssuesPaginationBtns(
	page: number,
	count: number,
	props: any,
	projectKey: string,
	category: string,
) {
	document.getElementById("page_num_cont")!.innerHTML = "";

	// if projects count is not a multiple of 10 add 1
	const numOfPages = count % 10 < 1 ? count / 10 : Math.floor(count / 10) + 1;

	const pageBtnCount = numOfPages > 6 ? 6 : numOfPages;

	let addLastBtn = true; // append last page button

	if (page > 1) {
		// append page 1 button if offset is greater than one
		const btn = document.createElement("button");

		btn.setAttribute(
			"class",
			"tw-py-1 tw-px-[5px] tw-bg-blue-600 tw-text-white tw-font-semibold tw-font-russo-one tw-rounded-sm tw-mx-2 tw-text-[12px] page_num_btn",
		);
		btn.textContent = `${1}`;
		btn.onclick = (e) => {
			// if (btn.textContent == "1")
			location.assign(
				`/workspace/project-details/${projectKey}/issues-list/${category}${
					props.type ? "?type" + props.type : ""
				}${props.status ? "&status" + props.status : ""}${
					props.assignee ? "&assignee" + props.assignee : ""
				}${props.dueDate ? "&dueDate" + props.dueDate : ""}`,
			);
			// else
			// 	location.assign(
			// 		`/workspace/project-details/${projectKey}/issues-list/${category}/${
			// 			btn.textContent
			// 		}${props.type ? "?type" + props.type : ""}${
			// 			props.status ? "&status" + props.status : ""
			// 		}${props.assignee ? "&assignee" + props.assignee : ""}${
			// 			props.dueDate ? "&dueDate" + props.dueDate : ""
			// 		}`,
			// 	);
		};
		document.getElementById("page_num_cont")?.appendChild(btn);
		// append prev 3 pages buttons
		for (let j = 3; j > 0; j--) {
			if (page - j > 0) {
				// skip page 1 button
				if (page - j != 1) {
					const btn = document.createElement("button");

					btn.setAttribute(
						"class",
						"tw-py-1 tw-px-[5px] tw-bg-blue-600 tw-text-white tw-font-semibold tw-font-russo-one tw-rounded-sm tw-mx-2 tw-text-[12px] page_num_btn",
					);
					btn.textContent = `${page - j}`;
					btn.onclick = (e) => {
						if (btn.textContent == "1")
							location.assign(
								`/workspace/project-details/${projectKey}/issues-list/${category}${
									page + 1
								}${props.type ? "?type" + props.type : ""}${
									props.status ? "&status" + props.status : ""
								}${props.assignee ? "&assignee" + props.assignee : ""}${
									props.dueDate ? "&dueDate" + props.dueDate : ""
								}`,
							);
						else
							location.assign(
								`/workspace/project-details/${projectKey}/issues-list/${category}/${
									btn.textContent
								}${props.type ? "?type" + props.type : ""}${
									props.status ? "&status" + props.status : ""
								}${props.assignee ? "&assignee" + props.assignee : ""}${
									props.dueDate ? "&dueDate" + props.dueDate : ""
								}`,
							);
					};
					document.getElementById("page_num_cont")?.appendChild(btn);
				}
			}
		}

		// append next 3 pages buttons
		for (let j = 1; j <= 3; j++) {
			if (page + j <= numOfPages) {
				if (page + j == numOfPages) {
					addLastBtn = false; //do not append last page button again
				}
				const btn = document.createElement("button");

				btn.setAttribute(
					"class",
					"tw-py-1 tw-px-[5px] tw-bg-blue-600 tw-text-white tw-font-semibold tw-font-russo-one tw-rounded-sm tw-mx-2 tw-text-[12px] page_num_btn",
				);
				btn.textContent = `${page + j}`;
				btn.onclick = (e) => {
					if (btn.textContent == "1")
						location.assign(
							`/workspace/project-details/${projectKey}/issues-list/${category}${
								page + 1
							}${props.type ? "?type" + props.type : ""}${
								props.status ? "&status" + props.status : ""
							}${props.assignee ? "&assignee" + props.assignee : ""}${
								props.dueDate ? "&dueDate" + props.dueDate : ""
							}`,
						);
					else
						location.assign(
							`/workspace/project-details/${projectKey}/issues-list/${category}/${
								btn.textContent
							}${props.type ? "?type" + props.type : ""}${
								props.status ? "&status" + props.status : ""
							}${props.assignee ? "&assignee" + props.assignee : ""}${
								props.dueDate ? "&dueDate" + props.dueDate : ""
							}`,
						);
				};
				document.getElementById("page_num_cont")?.appendChild(btn);
			}
		}
	} else {
		// append first 7 pages buttons
		for (let i = 1; i <= pageBtnCount; i++) {
			if (i > 1) {
				if (i == numOfPages) {
					addLastBtn = false; //do not append last page button again
				}
				const btn = document.createElement("button");

				btn.setAttribute(
					"class",
					"tw-py-1 tw-px-[5px] tw-bg-blue-600 tw-text-white tw-font-semibold tw-font-russo-one tw-rounded-sm tw-mx-2 tw-text-[12px] page_num_btn",
				);
				btn.textContent = `${i}`;
				btn.onclick = (e) => {
					if (btn.textContent == "1")
						location.assign(
							`/workspace/project-details/${projectKey}/issues-list/${category}${
								page + 1
							}${props.type ? "?type" + props.type : ""}${
								props.status ? "&status" + props.status : ""
							}${props.assignee ? "&assignee" + props.assignee : ""}${
								props.dueDate ? "&dueDate" + props.dueDate : ""
							}`,
						);
					else
						location.assign(
							`/workspace/project-details/${projectKey}/issues-list/${category}/${
								btn.textContent
							}${props.type ? "?type" + props.type : ""}${
								props.status ? "&status" + props.status : ""
							}${props.assignee ? "&assignee" + props.assignee : ""}${
								props.dueDate ? "&dueDate" + props.dueDate : ""
							}`,
						);
				};
				document.getElementById("page_num_cont")?.appendChild(btn);
			}
		}
	}

	// append last page buttons
	if (addLastBtn && numOfPages > 6 && page < numOfPages) {
		const btn = document.createElement("button");

		btn.setAttribute(
			"class",
			"tw-py-1 tw-px-[5px] tw-bg-blue-600 tw-text-white tw-font-semibold tw-font-russo-one tw-rounded-sm tw-mx-2 tw-text-[12px] page_num_btn",
		);
		btn.textContent = `${numOfPages}`;
		btn.onclick = (e) => {
			if (btn.textContent == "1")
				location.assign(
					`/workspace/project-details/${projectKey}/issues-list/${category}${
						page + 1
					}${props.type ? "?type" + props.type : ""}${
						props.status ? "&status" + props.status : ""
					}${props.assignee ? "&assignee" + props.assignee : ""}${
						props.dueDate ? "&dueDate" + props.dueDate : ""
					}`,
				);
			else
				location.assign(
					`/workspace/project-details/${projectKey}/issues-list/${category}/${
						btn.textContent
					}${props.type ? "?type" + props.type : ""}${
						props.status ? "&status" + props.status : ""
					}${props.assignee ? "&assignee" + props.assignee : ""}${
						props.dueDate ? "&dueDate" + props.dueDate : ""
					}`,
				);
		};
		document.getElementById("page_num_cont")?.appendChild(btn);
	}
}
