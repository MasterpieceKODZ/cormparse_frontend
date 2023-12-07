"use client";
import { useEffect } from "react";
import Quill from "../../quill.conf";

const QuillEditor = () => {
	useEffect(() => {
		const quill = new Quill("#quill_editor_cont", {
			modules: {
				toolbar: [
					[{ header: [1, 2, false] }],
					["bold", "italic", "underline"],
					["image", "code-block"],
				],
			},
			placeholder: "Compose an epic...",
			theme: "snow", // or 'bubble'
		});
	});

	return (
		<div id="quill_editor_cont">
			<p>Write your project description here</p>
			<p>😌💚💛❤️‍🔥</p>
			<p>
				<br />
			</p>
			<p>show me what you got!!🫵🏾</p>
		</div>
	);
};

export default QuillEditor;
