/* eslint-disable @next/next/no-img-element */
"use client";
import {
	cropImage,
	selectImageForCropper,
} from "@/ui_controllers/profile_view/selectImage.js";
import IconCloseCropper from "../icons/close.cropper.icon";
import IconEdit from "../icons/edit";
import { closeCropperLayout } from "@/ui_controllers/profile_view/close.cropper";

const EditProfilePicBtn = () => {
	let cropper;
	let imageType;
	return (
		<div className=" tw-w-max tw-h-max tw-relative">
			<input
				type="file"
				name="pic"
				id="dp_file"
				accept="image/*"
				onChange={async (e) => {
					cropper = await selectImageForCropper(e);
					imageType = e.target.files[0].type;
				}}
				className=" tw-w-0 tw-h-0 tw-invisible"
			/>
			<button
				className=" tw-ms-3"
				onClick={(e) => {
					document.getElementById("dp_file")?.click();
				}}>
				<IconEdit fill="tw-fill-gray-700 dark:tw-fill-gray-500" />
			</button>
			<div
				id="cropper_layout"
				className=" tw-w-[300px] tw-h-[400px] tw-border-2 tw-rounded-lg  tw-border-gray-500 tw-bg-gray-200 dark:tw-bg-gray-700 tw-py-5 tw-px-2 tw-absolute tw-top-[110%] tw-left-[-100px] tw-hidden">
				<div className=" tw-w-[230px] tw-h-[230px] tw-bg-white tw-mx-auto tw-mt-[55px]">
					<img
						id="cropper_img"
						src="/logo.png"
						alt="cropper image"
						className=" tw-w-full tw-h-full tw-object-cover tw-block tw-mx-auto"
					/>
				</div>
				<button
					className=" tw-font-russo-one tw-text-[18px] tw-mt-[30px] tw-px-5 tw-py-2 tw-rounded tw-block tw-mx-auto tw-text-white tw-bg-blue-800"
					onClick={(e) => cropImage(cropper, imageType)}>
					Crop
				</button>
				<button
					className=" tw-w-max tw-h-max tw-absolute tw-top-[10px] tw-right-[10px]"
					onClick={closeCropperLayout}>
					<IconCloseCropper fill="tw-fill-red-800" />
				</button>
			</div>
		</div>
	);
};

export default EditProfilePicBtn;
