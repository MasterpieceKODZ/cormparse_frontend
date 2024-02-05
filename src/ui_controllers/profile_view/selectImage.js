import { reduceBase64CodeSize } from "@/utils/reduce.image.size";
import Cropper from "cropperjs";
import { closeCropperLayout } from "./close.cropper";
import { closeNotification, showNotificationBar } from "../notification.bar";
import { getSession } from "next-auth/react";
import { storage } from "../../../firebase.config.js";
import {
	deleteObject,
	getDownloadURL,
	ref,
	uploadString,
} from "firebase/storage";
export function selectImageForCropper(e) {
	return new Promise((resolve, reject) => {
		const fileReader = new FileReader();
		const file = e.target.files[0];

		if (file) {
			fileReader.readAsDataURL(file);

			fileReader.onload = (e) => {
				document
					.getElementById("cropper_layout")
					?.classList.remove("tw-hidden");
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
		}
	});
}

export async function cropImage(cropper, imageType, setUserData) {
	showNotificationBar("uploading image...", "info");
	const imgData = cropper.getCroppedCanvas().toDataURL(imageType);

	const compressedData = await reduceBase64CodeSize(imgData, 30, imageType);

	const session = await getSession();

	const photoName = session.user.email.split("@").join(".");

	const photoStorageRef = ref(storage, `user_profile_pic/${photoName}`);

	// delete any previous image

	deleteObject(photoStorageRef).catch((e) => {});

	// upload compressed base64 data-url to firebase storage
	const snapshot = await uploadString(
		photoStorageRef,
		compressedData,
		"data_url",
	);

	// fetch image url
	const photoUrl = await getDownloadURL(snapshot.ref);
	showNotificationBar("image uploaded sucessfully", "success");

	//  update user data photoUrl
	const updateUserRes = await fetch("/api/update-user", {
		method: "POST",
		body: JSON.stringify({
			email: session.user.email,
			photoUrl,
		}),
		headers: {
			"Content-Type": "application/json",
			"X-Api-Key": "kjsopdshfk46873ndsjk0388kdmdsn8y32y85xnjsd873jd7yt4f",
		},
		cache: "no-store",
	});

	if (updateUserRes.ok) {
		const newUser = await updateUserRes.json();

		// update userData state
		setUserData(newUser);
	} else {
		showNotificationBar(
			"unable to upload image, check your nect work and try again.",
		);
	}

	closeCropperLayout();
	closeNotification();
}
