import { closeNotification } from "@/ui_controllers/notification.bar";

const IconClose = () => {
	return (
		<div
			className=" tw-cursor-pointer"
			onClick={(e) => closeNotification()}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="24"
				fill="#ffffff"
				viewBox="0 -960 960 960"
				width="24">
				<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
			</svg>
		</div>
	);
};

export default IconClose;
