const PulseAnim = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			style={{
				background: "transparent",
				display: "block",
				shapeRendering: "auto",
			}}
			width="397px"
			height="397px"
			className=" tw-w-[150px] tw-h-[100px] tw-mx-auto tw-mt-8 hide_pulse_anim"
			viewBox="0 0 100 100"
			id="pulse_anim"
			preserveAspectRatio="xMidYMid">
			<rect
				x="19"
				y="30"
				width="12"
				height="40"
				fill="#00aeec">
				<animate
					attributeName="y"
					repeatCount="indefinite"
					dur="0.9174311926605504s"
					calcMode="spline"
					keyTimes="0;0.5;1"
					values="16;30;30"
					keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
					begin="-0.1834862385321101s"></animate>
				<animate
					attributeName="height"
					repeatCount="indefinite"
					dur="0.9174311926605504s"
					calcMode="spline"
					keyTimes="0;0.5;1"
					values="68;40;40"
					keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
					begin="-0.1834862385321101s"></animate>
			</rect>
			<rect
				x="44"
				y="30"
				width="12"
				height="40"
				fill="#e63030">
				<animate
					attributeName="y"
					repeatCount="indefinite"
					dur="0.9174311926605504s"
					calcMode="spline"
					keyTimes="0;0.5;1"
					values="19.499999999999996;30;30"
					keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
					begin="-0.09174311926605505s"></animate>
				<animate
					attributeName="height"
					repeatCount="indefinite"
					dur="0.9174311926605504s"
					calcMode="spline"
					keyTimes="0;0.5;1"
					values="61.00000000000001;40;40"
					keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
					begin="-0.09174311926605505s"></animate>
			</rect>
			<rect
				x="69"
				y="30"
				width="12"
				height="40"
				fill="#262470">
				<animate
					attributeName="y"
					repeatCount="indefinite"
					dur="0.9174311926605504s"
					calcMode="spline"
					keyTimes="0;0.5;1"
					values="19.499999999999996;30;30"
					keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
				<animate
					attributeName="height"
					repeatCount="indefinite"
					dur="0.9174311926605504s"
					calcMode="spline"
					keyTimes="0;0.5;1"
					values="61.00000000000001;40;40"
					keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
			</rect>
		</svg>
	);
};

export default PulseAnim;
