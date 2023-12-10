import { reduceBase64CodeSize } from "@/utils/reduce.image.size";
import Cropper from "cropperjs";
import { closeCropperLayout } from "./close.cropper";
export function selectImageForCropper(e) {
	return new Promise((resolve, reject) => {
		const fileReader = new FileReader();
		const file = e.target.files[0];

		fileReader.readAsDataURL(file);

		fileReader.onload = (e) => {
			document.getElementById("cropper_layout")?.classList.remove("tw-hidden");
			const cropperImg = document.getElementById("cropper_img");
			cropperImg.src = e.target?.result;

			const cropper = new Cropper(cropperImg, {
				viewMode: 1,
				dragMode: "none",
				aspectRatio: 1,
				autoCrop: true,
				autoCropArea: 0.8,
				scalable: false,
				movable: false,
				rotatable: false,
				zoomable: false,
				minCropBoxWidth: 100,
				minCropBoxHeight: 100,
				cropBoxResizable: false,
				responsive: true,
				ready() {
					resolve(this.cropper);
				},
			});
		};
	});
}

export async function cropImage(cropper, imageType) {
	const imgData = cropper.getCroppedCanvas().toDataURL(imageType);

	const compressedData = await reduceBase64CodeSize(imgData, 30, imageType);

	document.getElementById("pic_prev").src = compressedData;

	localStorage.imgData = compressedData;
	closeCropperLayout();
}
