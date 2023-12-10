"use client";
import "../styles/notification.bar.css";
import IconClose from "./icons/close.notification.icon";

const NotificationBar = () => {
	return (
		<div
			id="notification_bar"
			className="hide tw-w-[100%] tw-p-[8px] tw-flex tw-justify-start tw-items-center tw-absolute tw-z-50 tw-left-0 tw-top-[100%]">
			<p
				id="notification_msg"
				className=" tw-text-white tw-font-exo tw-basis-[100%] tw-shrink tw-grow tw-mr-[15px]">
				This is a notification to remind you of an event you are supposed to
				attend
			</p>

			<IconClose />
		</div>
	);
};

export default NotificationBar;
