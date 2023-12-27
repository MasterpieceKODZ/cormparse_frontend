/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import ReactQuill from "react-quill";

const QuillEditor = () => {
	const modules = {
		toolbar: [
			[{ header: [1, 2, 3, 4, 5, 6, false] }],
			["bold", "italic", "underline", "strike", "blockquote", "code-block"],
			[
				{ list: "ordered" },
				{ list: "bullet" },
				{ indent: "-1" },
				{ indent: "+1" },
			],
			["link"],
			["clean"],
		],
	};

	const formats = [
		"header",
		"bold",
		"italic",
		"underline",
		"strike",
		"code-block",
		"block-code",
		"list",
		"bullet",
		"indent",
		"link",
		"image",
	];

	return (
		<div className=" tw-w-full tw-h-[400px] tw-max-w-[600px] tw-mt-[30px] tw-overflow-hidden">
			<ReactQuill
				theme="snow"
				modules={modules}
				formats={formats}
				defaultValue={`<p>Write your project description here</p>
				<p>😌💚💛❤️‍🔥</p>
				<p>
					<br />
				</p>
				<p>show me what you got!!🫵🏾</p>`}>
				<div
					id="quill_editor_cont"
					className=" tw-w-full tw-text-gray-800 dark:tw-text-gray-400 tw-h-full tw-max-h-[300px] tw-overflow-y-auto"></div>
			</ReactQuill>
		</div>
	);
};

export default QuillEditor;
