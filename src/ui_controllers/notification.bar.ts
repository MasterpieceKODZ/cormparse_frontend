export function toggleNotificationBar(
	msg?: string,
	type?: "info" | "error" | "success",
) {
	const noteBar = document.getElementById("notification_bar");
	const noteMsg = document.getElementById("notification_msg");

	noteBar?.classList.remove("error", "info", "success");
	noteBar?.classList.add(type as string);

	if (noteBar?.classList.contains("hide")) {
		noteBar.classList.remove("hide");

		noteMsg!.textContent = msg as string;

		setTimeout(() => {
			closeNotification()
		}, 3000);
	}
}

// when closing the notification bar with the toggleNotificationBar function, the background is removed before the layout is hidden, to avoid this close notification bar with the closeNotification function
export function closeNotification() {
	const noteBar = document.getElementById("notification_bar");

	noteBar?.classList.add("hide")
}
