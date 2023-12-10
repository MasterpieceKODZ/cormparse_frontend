const IconCloseCropper = ({ fill }: { fill: string }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="30"
			width="30"
			className={`${fill}`}
			viewBox="0 -960 960 960">
			<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
		</svg>
	);
};

export default IconCloseCropper;
