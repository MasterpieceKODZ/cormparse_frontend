const IconPlus = ({ stroke }: { stroke: string }) => {
	return (
		<svg
			className=" tw-w-[25px] tw-h-[25px] tw-inline-block"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M6 12H18M12 6V18"
				className={`${stroke}`}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default IconPlus;
