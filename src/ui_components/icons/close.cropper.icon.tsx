const IconCloseCropper = ({ fill, size }: { fill: string; size: string }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={size}
			width={size}
			className={`${fill}`}
			viewBox="0 -960 960 960">
			<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
		</svg>
	);
};

export default IconCloseCropper;
