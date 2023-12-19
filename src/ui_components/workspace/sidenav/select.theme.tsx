"use client";
import IconDownArrow from "@/ui_components/icons/down.arrow";
import { changeUITheme } from "@/ui_controllers/change.theme";
import { openCloseDropDown } from "@/ui_controllers/workspace/sidenav/show.hide.drop.down";
import { MouseEvent } from "react";

const SideNavSelectTheme = () => {
	return (
		<div className=" tw-overflow-y-hidden tw-mt-5">
			<button
				id="nav_drp_dwn_btn_theme"
				onClick={openCloseDropDown}
				className=" tw-w-max tw-bg-transparent tw-font-russo-one tw-text-gray-700 dark:tw-text-gray-400  tw-flex tw-items-center">
				<span className=" tw-mr-3">Theme</span>
				<span className="nav_drp_dwn_btn_theme_icon">
					<IconDownArrow />
				</span>
			</button>
			<div className=" tw-flex tw-max-w-full">
				<div
					id="nav_drp_dwn_layout"
					className=" tw-pl-4 tw-overflow-y-hidden nav_drp_dwn_btn_theme">
					<p
						id="select_theme_lgt"
						className="tw-my-2 tw-cursor-pointer tw-text-start tw-text-gray-800 dark:tw-text-white sidenav_theme_select theme_select"
						onClick={(e: MouseEvent) => changeUITheme(e, "light", "sidenav")}
						tabIndex={1}>
						<span>
							<svg
								fill="#000000"
								className=" tw-inline-block tw-mr-2 "
								width="20px"
								height="20px"
								viewBox="-5.5 0 32 32"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg">
								<title>light</title>
								<path
									className=" !tw-stroke-slate-950 dark:!tw-stroke-slate-50"
									d="M11.875 6v2.469c0 0.844-0.375 1.25-1.156 1.25s-1.156-0.406-1.156-1.25v-2.469c0-0.813 0.375-1.219 1.156-1.219s1.156 0.406 1.156 1.219zM14.219 9.25l1.438-2.031c0.469-0.625 1.063-0.75 1.656-0.313s0.656 1 0.188 1.688l-1.438 2c-0.469 0.688-1.031 0.75-1.656 0.313-0.594-0.438-0.656-0.969-0.188-1.656zM5.781 7.25l1.469 2c0.469 0.688 0.406 1.219-0.219 1.656-0.594 0.469-1.156 0.375-1.625-0.313l-1.469-2c-0.469-0.688-0.406-1.219 0.219-1.656 0.594-0.469 1.156-0.375 1.625 0.313zM10.719 11.125c2.688 0 4.875 2.188 4.875 4.875 0 2.656-2.188 4.813-4.875 4.813s-4.875-2.156-4.875-4.813c0-2.688 2.188-4.875 4.875-4.875zM1.594 11.813l2.375 0.75c0.781 0.25 1.063 0.719 0.813 1.469-0.219 0.75-0.75 0.969-1.563 0.719l-2.313-0.75c-0.781-0.25-1.063-0.75-0.844-1.5 0.25-0.719 0.75-0.938 1.531-0.688zM17.5 12.563l2.344-0.75c0.813-0.25 1.313-0.031 1.531 0.688 0.25 0.75-0.031 1.25-0.844 1.469l-2.313 0.781c-0.781 0.25-1.281 0.031-1.531-0.719-0.219-0.75 0.031-1.219 0.813-1.469zM10.719 18.688c1.5 0 2.719-1.219 2.719-2.688 0-1.5-1.219-2.719-2.719-2.719s-2.688 1.219-2.688 2.719c0 1.469 1.188 2.688 2.688 2.688zM0.906 17.969l2.344-0.75c0.781-0.25 1.313-0.063 1.531 0.688 0.25 0.75-0.031 1.219-0.813 1.469l-2.375 0.781c-0.781 0.25-1.281 0.031-1.531-0.719-0.219-0.75 0.063-1.219 0.844-1.469zM18.219 17.219l2.344 0.75c0.781 0.25 1.063 0.719 0.813 1.469-0.219 0.75-0.719 0.969-1.531 0.719l-2.344-0.781c-0.813-0.25-1.031-0.719-0.813-1.469 0.25-0.75 0.75-0.938 1.531-0.688zM3.938 23.344l1.469-1.969c0.469-0.688 1.031-0.781 1.625-0.313 0.625 0.438 0.688 0.969 0.219 1.656l-1.469 1.969c-0.469 0.688-1.031 0.813-1.656 0.375-0.594-0.438-0.656-1.031-0.188-1.719zM16.063 21.375l1.438 1.969c0.469 0.688 0.406 1.281-0.188 1.719s-1.188 0.281-1.656-0.344l-1.438-2c-0.469-0.688-0.406-1.219 0.188-1.656 0.625-0.438 1.188-0.375 1.656 0.313zM11.875 23.469v2.469c0 0.844-0.375 1.25-1.156 1.25s-1.156-0.406-1.156-1.25v-2.469c0-0.844 0.375-1.25 1.156-1.25s1.156 0.406 1.156 1.25z"></path>
							</svg>
						</span>{" "}
						Light
					</p>
					<p
						id="select_theme_drk"
						className="tw-my-2 tw-cursor-pointer tw-text-start tw-text-gray-800 dark:tw-text-white theme_select sidenav_theme_select"
						onClick={(e: MouseEvent) => changeUITheme(e, "dark", "sidenav")}
						tabIndex={1}>
						<span>
							<svg
								fill="#000000"
								width="20px"
								height="20px"
								className=" tw-inline-block tw-mr-2"
								viewBox="0 0 35 35"
								xmlns="http://www.w3.org/2000/svg">
								<path
									className=" !tw-stroke-slate-950 dark:!tw-stroke-slate-50"
									d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z"
								/>
							</svg>
						</span>{" "}
						Dark
					</p>
					<p
						id="select_theme_def"
						className="tw-my-2 tw-cursor-pointer tw-text-start sidenav_theme_select active tw-text-gray-800 dark:tw-text-white"
						onClick={(e: MouseEvent) => changeUITheme(e, "default", "sidenav")}
						tabIndex={1}>
						<span>
							<svg
								width="20px"
								height="20px"
								viewBox="0 0 24 24"
								fill="none"
								className=" tw-inline-block tw-mr-2"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									className=" !tw-stroke-slate-950 dark:!tw-stroke-slate-50 "
									d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V15C22 16.6569 20.6569 18 19 18H13V19H15C15.5523 19 16 19.4477 16 20C16 20.5523 15.5523 21 15 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H11V18H5C3.34315 18 2 16.6569 2 15V6ZM5 5C4.44772 5 4 5.44772 4 6V15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15V6C20 5.44772 19.5523 5 19 5H5Z"
								/>
							</svg>
						</span>{" "}
						Default
					</p>
				</div>
			</div>
		</div>
	);
};

export default SideNavSelectTheme;
