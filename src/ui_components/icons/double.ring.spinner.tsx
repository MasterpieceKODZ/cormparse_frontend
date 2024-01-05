const DoubleRingSpinner = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			style={{
				margin: "auto",
				background: "transparent",
				display: "block",
				shapeRendering: "auto",
			}}
			width="100px"
			height="100px"
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid">
			<circle
				cx="50"
				cy="50"
				r="35"
				strokeWidth="6"
				stroke="#00599e"
				strokeDasharray="54.97787143782138 54.97787143782138"
				fill="none"
				strokeLinecap="round">
				<animateTransform
					attributeName="transform"
					type="rotate"
					dur="1.4492753623188404s"
					repeatCount="indefinite"
					keyTimes="0;1"
					values="0 50 50;360 50 50"></animateTransform>
			</circle>
			<circle
				cx="50"
				cy="50"
				r="28"
				strokeWidth="6"
				stroke="#e71717"
				strokeDasharray="43.982297150257104 43.982297150257104"
				strokeDashoffset="43.982297150257104"
				fill="none"
				strokeLinecap="round">
				<animateTransform
					attributeName="transform"
					type="rotate"
					dur="1.4492753623188404s"
					repeatCount="indefinite"
					keyTimes="0;1"
					values="0 50 50;-360 50 50"></animateTransform>
			</circle>
		</svg>
	);
};

export default DoubleRingSpinner;
