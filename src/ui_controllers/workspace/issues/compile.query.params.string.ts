import { ReadonlyURLSearchParams } from "next/navigation";

export async function compileIssuesProps(
	readURLQuery: ReadonlyURLSearchParams,
): Promise<any> {
	let queryObj = {};

	if (readURLQuery.get("type")) {
		queryObj = { ...queryObj, type: readURLQuery.get("type") };
	}

	if (readURLQuery.get("status")) {
		queryObj = { ...queryObj, status: readURLQuery.get("status") };
	}

	if (readURLQuery.get("assignee")) {
		queryObj = { ...queryObj, assignee: readURLQuery.get("assignee") };
	}

	if (readURLQuery.get("dueDate")) {
		queryObj = { ...queryObj, dueDate: readURLQuery.get("dueDate") };
	}

	return queryObj;
}
