export async function closeCropperLayout() {
	const cropperImg = document.getElementById("cropper_img") as any;
	cropperImg.cropper.destroy();
	cropperImg.src = "/logo.png";
	document.getElementById("cropper_layout")?.classList.add("tw-hidden");
}
