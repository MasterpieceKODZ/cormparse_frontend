import {
	twFormTxtInput,
	twInputLabel,
} from "@/tailwind_classname_utils/login.page";

const FormCreateProject = () => {
	return (
		<form className=" tw-mt-[90px]">
			<div className=" tw-mx-auto tw-w-max">
				<label
					htmlFor="inp_username"
					className={twInputLabel}>
					Name
				</label>
				<input
					type="text"
					id="inp_proj_name"
					maxLength={30}
					name="project_name"
					className={twFormTxtInput}
					required
				/>
			</div>
			<div className=" tw-mx-auto tw-w-max tw-mt-5">
				<label
					htmlFor="inp_pw"
					className={twInputLabel}>
					Key
				</label>
				<p className="tw-ps-2 tw-font-exo tw-text-[10px] md:tw-text-[13px] tw-text-mygrey-lyt dark:tw-text-gray-400">
					a short text that is used to prefix all issues in this project
				</p>
				<input
					type="text"
					name="key"
					maxLength={10}
					id="inp_key"
					className={`${twFormTxtInput}`}
					required
				/>
			</div>
			<div className=" tw-w-full tw-h-max tw-flex tw-justify-end tw-items-center tw-mt-[45px]">
				<button
					type="button"
					className=" tw-bg-gray-500 tw-font-russo-one tw-text-white tw-text-[14px] tw-rounded tw-px-3 tw-py-1 tw-me-6">
					CANCEL
				</button>
				<button
					type="submit"
					className=" tw-bg-blue-800 tw-font-russo-one tw-text-white tw-text-[14px] tw-rounded tw-px-3 tw-py-1">
					PROCEED
				</button>
			</div>
		</form>
	);
};

export default FormCreateProject;
