import { ChangeEvent, Dispatch, SetStateAction } from "react";

export async function issueDetailSetLinkIssueRelation(
	setRelation: Dispatch<SetStateAction<"parent" | "child" | "">>,
	e: ChangeEvent<HTMLInputElement>,
) {
	const relation = e.currentTarget.value as "parent" | "child";
	setRelation(relation);
}
