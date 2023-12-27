"use client";
/* eslint-disable @next/next/no-img-element */
import IconCloseCropper from "@/ui_components/icons/close.cropper.icon";
import IconEdit from "@/ui_components/icons/edit";
import QuillEditor from "@/ui_components/quill.editor";
import ProjectPropsURLInpBlck from "@/ui_components/workspace/project-details/properties.url.block";
import BtnDeleteProject from "@/ui_components/workspace/project-details/setting/delete.project";
import ProjectMemberItem from "@/ui_components/workspace/project-details/user.item";
import {
	hideEditProjectLeadPopup,
	showEditProjectLeadPopup,
	showEditProjectLeadSuggestLayout,
} from "@/ui_controllers/workspace/projects/details/show.hide.edit .project.lead";
import {
	hideEditProjectDefaultAssigneePopup,
	showEditProjectDefaultAssigneePopup,
	showEditProjectDefaultAssigneeSuggestLayout,
} from "@/ui_controllers/workspace/projects/details/show.hide.edit.project.default.assignee";

const ProjectProperties = () => {
	return (
		<section className=" tw-basis-full tw-h-full tw-max-h-full tw-relative tw-overflow-y-auto tw-ps-[20%] tw-pt-[65px] tw-pe-4 tw-pb-[100px]">
			<p className=" tw-font-exo tw-font-semibold tw-text-start tw-mt-[70px] tw-text-[14px] tw-text-gray-800 dark:tw-text-gray-400">
				Name
			</p>
			<p className=" tw-font-exo tw-mt-[20px] tw-text-[20px] tw-text-gray-800 dark:tw-text-gray-400">
				Project Massive Turn-Out
			</p>
			<p className=" tw-font-exo tw-font-semibold tw-text-start tw-mt-[70px] tw-text-[14px] tw-text-gray-800 dark:tw-text-gray-400">
				Key
			</p>
			<p className=" tw-font-exo tw-mt-[20px] tw-text-[20px] tw-text-gray-800 dark:tw-text-gray-400">
				PMT-2215
			</p>
			<p className=" tw-font-exo tw-font-semibold tw-text-start tw-mt-[70px] tw-text-[14px] tw-text-gray-800 dark:tw-text-gray-400">
				URL
			</p>
			<p className=" tw-font-exo tw-text-start tw-mt-[3px] tw-text-[12px] tw-text-blue-500">
				click to edit
			</p>
			<ProjectPropsURLInpBlck />

			<p className=" tw-font-exo tw-font-semibold tw-text-start tw-mt-[70px] tw-text-[14px] tw-text-gray-800 dark:tw-text-gray-400">
				Description
			</p>
			<div className=" tw-mb-[90px]">
				<QuillEditor />
			</div>

			<p className=" tw-font-exo tw-font-semibold tw-text-start tw-mt-[70px] tw-text-[14px] tw-text-gray-800 dark:tw-text-gray-400">
				Lead
			</p>
			<div className=" tw-w-full tw-h-max tw-max-w-[500px] tw-relative">
				<div className=" tw-w-full tw-h-max tw-flex tw-justify-start tw-items-center">
					<div className=" tw-basis-full tw-shrink tw-grow-0">
						<ProjectMemberItem
							fullname="MasterpieceKODZ"
							username="Elija Benson"
							img="/logo.png"
							role="Data Analyst"
							dir="up"
							showPopup={true}
						/>
					</div>
					<button
						id="btn_edt_prjct_lead"
						className=" tw-w-max tw-h-max tw-mx-5"
						onClick={showEditProjectLeadPopup}>
						<IconEdit fill="tw-fill-gray-800 dark:tw-fill-gray-400" />
					</button>
					<button
						id="btn_cls_edt_prjct_lead"
						className=" tw-w-max tw-h-max tw-mx-5 tw-hidden"
						onClick={hideEditProjectLeadPopup}>
						<IconCloseCropper fill="tw-fill-gray-800 dark:tw-fill-gray-400" size="25px"/>
					</button>
				</div>

				<div
					id="edt_prjct_lead_layt"
					className=" tw-w-full tw-h-max tw-absolute tw-top-[110%] tw-z-40 tw-left-0 tw-hidden popup">
					<input
						type="text"
						id="inp_edt_prjct_lead"
						placeholder="type username..."
						onChange={showEditProjectLeadSuggestLayout}
						className=" tw-w-full tw-font-exo tw-text-mygrey-default dark:tw-text-gray-400 tw-h-[45px] tw-border-[1px] tw-rounded tw-border-mygrey-v-lyt dark:tw-border-gray-500 tw-px-2 tw-text-xl dark:tw-bg-gray-800 focus:tw-outline focus:tw-outline-blue-300 focus:tw-outline-1 tw-block"
					/>
					<div
						id="edt_prjct_lead_sugest_lay"
						className=" tw-w-full tw-h-max tw-max-h-[25vh] tw-absolute tw-bg-blue-200 dark:tw-bg-blue-950 tw-border-2 tw-border-t-0 tw-py-2 tw-px-3 tw-border-blue-300 dark:tw-border-blue-800 tw-rounded-b tw-top-[105%] tw-z-40 tw-left-0 tw-overflow-y-auto tw-hidden">
						<div
							className=" tw-my-3 tw-w-full tw-cursor-pointer"
							onClick={hideEditProjectLeadPopup}>
							<ProjectMemberItem
								username="ManOfValor"
								fullname="Daniel"
								role="Cloud Architect"
								img="/logo.png"
								dir="up"
								showPopup={false}
							/>
						</div>
						<div
							className=" tw-my-3 tw-w-full tw-cursor-pointer"
							onClick={hideEditProjectLeadPopup}>
							<ProjectMemberItem
								username="ManOfValor"
								fullname="Daniel"
								role="Cloud Architect"
								img="/logo.png"
								dir="up"
								showPopup={false}
							/>
						</div>
						<div
							className=" tw-my-3 tw-w-full tw-cursor-pointer"
							onClick={hideEditProjectLeadPopup}>
							<ProjectMemberItem
								username="ManOfValor"
								fullname="Daniel"
								role="Cloud Architect"
								img="/logo.png"
								dir="up"
								showPopup={false}
							/>
						</div>
						<div
							className=" tw-my-3 tw-w-full tw-cursor-pointer"
							onClick={hideEditProjectLeadPopup}>
							<ProjectMemberItem
								username="ManOfValor"
								fullname="Daniel"
								role="Cloud Architect"
								img="/logo.png"
								dir="up"
								showPopup={false}
							/>
						</div>
						<div
							className=" tw-my-3 tw-w-full tw-cursor-pointer"
							onClick={hideEditProjectLeadPopup}>
							<ProjectMemberItem
								username="ManOfValor"
								fullname="Daniel"
								role="Cloud Architect"
								img="/logo.png"
								dir="up"
								showPopup={false}
							/>
						</div>
						<div
							className=" tw-my-3 tw-w-full tw-cursor-pointer"
							onClick={hideEditProjectLeadPopup}>
							<ProjectMemberItem
								username="ManOfValor"
								fullname="Daniel"
								role="Cloud Architect"
								img="/logo.png"
								dir="up"
								showPopup={false}
							/>
						</div>
						<div
							className=" tw-my-3 tw-w-full tw-cursor-pointer"
							onClick={hideEditProjectLeadPopup}>
							<ProjectMemberItem
								username="ManOfValor"
								fullname="Daniel"
								role="Cloud Architect"
								img="/logo.png"
								dir="up"
								showPopup={false}
							/>
						</div>
					</div>
				</div>
			</div>

			<p className=" tw-font-exo tw-font-semibold tw-text-start tw-mt-[70px] tw-text-[14px] tw-text-gray-800 dark:tw-text-gray-400">
				Default Assignee
			</p>
			<div className=" tw-w-full tw-h-max tw-max-w-[500px] tw-relative">
				<div className=" tw-w-full tw-h-max tw-flex tw-justify-start tw-items-center">
					<div className=" tw-basis-full tw-shrink tw-grow-0">
						<ProjectMemberItem
							username="MasterpieceKODZ"
							fullname="Maximo Lopez"
							img="/logo.png"
							dir="up"
							role="Data Analyst"
							showPopup={true}
						/>
					</div>
					<button
						id="btn_edt_prjct_def_assign"
						className=" tw-w-max tw-h-max tw-mx-5"
						onClick={showEditProjectDefaultAssigneePopup}>
						<IconEdit fill="tw-fill-gray-800 dark:tw-fill-gray-400" />
					</button>
					<button
						id="btn_cls_edt_prjct_def_assign"
						className=" tw-w-max tw-h-max tw-mx-5 tw-hidden"
						onClick={hideEditProjectDefaultAssigneePopup}>
						<IconCloseCropper fill="tw-fill-gray-800 dark:tw-fill-gray-400" size="25px"/>
					</button>
				</div>

				<div
					id="edt_prjct_def_assign_layt"
					className=" tw-w-full tw-h-max tw-absolute tw-top-[110%] tw-z-40 tw-left-0 tw-hidden popup">
					<input
						type="text"
						id="inp_edt_prjct_def_assign"
						placeholder="type username..."
						onChange={showEditProjectDefaultAssigneeSuggestLayout}
						className=" tw-w-full tw-font-exo tw-text-mygrey-default dark:tw-text-gray-400 tw-h-[45px] tw-border-[1px] tw-rounded tw-border-mygrey-v-lyt dark:tw-border-gray-500 tw-px-2 tw-text-xl dark:tw-bg-gray-800 focus:tw-outline focus:tw-outline-blue-300 focus:tw-outline-1 tw-block"
					/>
					<div
						id="edt_prjct_def_assign_sugest_lay"
						className=" tw-w-full tw-h-max tw-max-h-[25vh] tw-absolute tw-bg-blue-200 dark:tw-bg-blue-950 tw-border-2 tw-border-t-0 tw-py-2 tw-px-3 tw-border-blue-300 dark:tw-border-blue-800 tw-rounded-b tw-top-[105%] tw-z-40 tw-left-0 tw-overflow-y-auto tw-hidden">
						<div
							className=" tw-my-3 tw-w-full tw-cursor-pointer"
							onClick={hideEditProjectDefaultAssigneePopup}>
							<ProjectMemberItem
								username="ManOfValor"
								fullname="Gideon Faith"
								role="Cloud Architect"
								img="/logo.png"
								dir="up"
								showPopup={false}
							/>
						</div>
						<div
							className=" tw-my-3 tw-w-full tw-cursor-pointer"
							onClick={hideEditProjectDefaultAssigneePopup}>
							<ProjectMemberItem
								username="ManOfValor"
								fullname="Gideon Faith"
								role="Cloud Architect"
								img="/logo.png"
								dir="up"
								showPopup={false}
							/>
						</div>
						<div
							className=" tw-my-3 tw-w-full tw-cursor-pointer"
							onClick={hideEditProjectDefaultAssigneePopup}>
							<ProjectMemberItem
								username="ManOfValor"
								fullname="Gideon Faith"
								role="Cloud Architect"
								img="/logo.png"
								dir="up"
								showPopup={false}
							/>
						</div>
						<div
							className=" tw-my-3 tw-w-full tw-cursor-pointer"
							onClick={hideEditProjectDefaultAssigneePopup}>
							<ProjectMemberItem
								username="ManOfValor"
								fullname="Gideon Faith"
								role="Cloud Architect"
								img="/logo.png"
								dir="up"
								showPopup={false}
							/>
						</div>
						<div
							className=" tw-my-3 tw-w-full tw-cursor-pointer"
							onClick={hideEditProjectDefaultAssigneePopup}>
							<ProjectMemberItem
								username="ManOfValor"
								fullname="Gideon Faith"
								role="Cloud Architect"
								img="/logo.png"
								dir="up"
								showPopup={false}
							/>
						</div>
						<div
							className=" tw-my-3 tw-w-full tw-cursor-pointer"
							onClick={hideEditProjectDefaultAssigneePopup}>
							<ProjectMemberItem
								username="ManOfValor"
								fullname="Gideon Faith"
								role="Cloud Architect"
								img="/logo.png"
								dir="up"
								showPopup={false}
							/>
						</div>

						<div
							className=" tw-my-3 tw-w-full tw-cursor-pointer"
							onClick={hideEditProjectDefaultAssigneePopup}>
							<ProjectMemberItem
								username="ManOfValorhideEditProjectLeadPopup"
								fullname="Gideon Faith"
								role="Cloud Architect"
								img="/logo.png"
								dir="up"
								showPopup={false}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className=" tw-w-max tw-h-max tw-mt-[100px] tw-flex tw-justify-center tw-items-center ">
				<button className=" tw-w-max tw-h-max tw-px-5 tw-py-[4px] tw-rounded tw-bg-blue-800 tw-text-white tw-font-russo-one tw-text-center tw-mr-7">
					Save Changes
				</button>
				<button className=" tw-w-max tw-h-max tw-px-5 tw-py-[4px] tw-rounded tw-bg-secondary tw-text-white tw-font-russo-one tw-text-center tw-ml-7">
					Close
				</button>
			</div>
			<BtnDeleteProject />
		</section>
	);
};

export default ProjectProperties;
export const dynamic = "force-dynamic";
