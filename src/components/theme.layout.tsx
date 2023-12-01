"use client";
import { changeUITheme } from "@/ui_controllers/change.theme";
import { toggleThemeLayout } from "@/ui_controllers/toggle.theme.layout";
import { MouseEvent } from "react";

const ThemeLayout = () => {
	return (
		<div className=" tw-w-min tw-h-min tw-relative">
			<button
				id="theme_toggle_btn"
				aria-label="select theme"
				className=" tw-block"
				onClick={toggleThemeLayout}>
				<svg
					width="24px"
					height="24px"
					className=" xsm:tw-h-[29px] xsm:tw-w-[29px]"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M10.8468 21.9342C5.86713 21.3624 2 17.1328 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.1565 18.7173 16.7325 15.9135 16.3703C14.2964 16.1614 12.8386 15.9731 12.2619 16.888C11.8674 17.5136 12.2938 18.2938 12.8168 18.8168C13.4703 19.4703 13.4703 20.5297 12.8168 21.1832C12.2938 21.7062 11.5816 22.0186 10.8468 21.9342ZM11.085 6.99976C11.085 7.82818 10.4134 8.49976 9.585 8.49976C8.75658 8.49976 8.085 7.82818 8.085 6.99976C8.085 6.17133 8.75658 5.49976 9.585 5.49976C10.4134 5.49976 11.085 6.17133 11.085 6.99976ZM6.5 13C7.32843 13 8 12.3284 8 11.5C8 10.6716 7.32843 9.99998 6.5 9.99998C5.67157 9.99998 5 10.6716 5 11.5C5 12.3284 5.67157 13 6.5 13ZM17.5 13C18.3284 13 19 12.3284 19 11.5C19 10.6716 18.3284 9.99998 17.5 9.99998C16.6716 9.99998 16 10.6716 16 11.5C16 12.3284 16.6716 13 17.5 13ZM14.5 8.49998C15.3284 8.49998 16 7.82841 16 6.99998C16 6.17156 15.3284 5.49998 14.5 5.49998C13.6716 5.49998 13 6.17156 13 6.99998C13 7.82841 13.6716 8.49998 14.5 8.49998Z"
						className=" tw-fill-slate-900 dark:tw-fill-slate-400"
					/>
				</svg>
			</button>

			<div
				id="theme_layout"
				className="dark:tw-bg-gray-800 tw-bg-gray-100 tw-absolute tw-top-[140%] tw-right-0 tw-w-max tw-py-3 tw-px-5 tw-border-2 tw-border-gray-900 tw-rounded-[10px] tw-hidden popup">
				<p
					id="select_theme_lgt"
					className="tw-my-2 tw-cursor-pointer tw-text-start tw-text-gray-800 dark:tw-text-white theme_select"
					onClick={(e: MouseEvent) => changeUITheme(e, "light", "header")}
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
					className="tw-my-2 tw-cursor-pointer tw-text-start tw-text-gray-800 dark:tw-text-white theme_select"
					onClick={(e: MouseEvent) => changeUITheme(e, "dark", "header")}
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
					className="tw-my-2 tw-cursor-pointer tw-text-start theme_select active tw-text-gray-800 dark:tw-text-white"
					onClick={(e: MouseEvent) => changeUITheme(e, "default", "header")}
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
	);
};

export default ThemeLayout;
