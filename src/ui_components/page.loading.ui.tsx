const InfinityLoadingSpinner = () => {
	return (
		<div className=" tw-w-full tw-h-full tw-min-h-[85vh] tw-flex tw-justify-center tw-items-center tw-bg-white dark:tw-bg-gray-900">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="tw-w-[150px] tw-h-[150px] "
				style={{
					margin: "auto",
					background: "transparent",
					display: "block",
					shapeRendering: "auto",
				}}
				width="257px"
				height="257px"
				viewBox="0 0 100 100"
				preserveAspectRatio="xMidYMid">
				<path
					fill="none"
					stroke="#0c9ee9"
					strokeWidth="2"
					strokeDasharray="164.2169140625 92.37201416015625"
					d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
					strokeLinecap="round"
					style={{ transform: "scale(1);transform-origin:50px 50px" }}>
					<animate
						attributeName="stroke-dashoffset"
						repeatCount="indefinite"
						dur="1.0204081632653061s"
						keyTimes="0;1"
						values="0;256.58892822265625"></animate>
				</path>
			</svg>
		</div>
	);
};

export default InfinityLoadingSpinner;
