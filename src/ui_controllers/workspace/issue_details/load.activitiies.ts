import { Dispatch, MouseEvent, SetStateAction } from "react";

export async function loadActivities(
	e: MouseEvent,
	type: string,
	setActivitiyFilter: Dispatch<SetStateAction<string>>,
) {
	document.querySelectorAll(".actv_btn").forEach((el) => {
		el.classList.remove(
			"tw-bg-blue-200",
			"dark:tw-bg-blue-900",
			"tw-text-blue-700",
			"dark:tw-text-blue-200",
		);

		el.classList.add(
			"tw-text-gray-700",
			"dark:tw-text-gray-300",
			"tw-bg-gray-200",
			"dark:tw-bg-gray-700",
		);
	});

	e.currentTarget.classList.remove(
		"tw-text-gray-700",
		"dark:tw-text-gray-300",
		"tw-bg-gray-200",
		"dark:tw-bg-gray-700",
	);

	e.currentTarget.classList.add(
		"tw-bg-blue-200",
		"dark:tw-bg-blue-900",
		"tw-text-blue-700",
		"dark:tw-text-blue-200",
	);

	setActivitiyFilter(type);
}
