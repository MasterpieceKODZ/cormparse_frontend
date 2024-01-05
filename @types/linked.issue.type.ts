export type Issue = {
	type: "bug" | "task" | "sub_task" | "feature" | "improvement";
	summary: string;
	key: string;
};

export type LinkedIssue = {
	relation: "parent" | "child" | "";
	issue: Issue;
};
