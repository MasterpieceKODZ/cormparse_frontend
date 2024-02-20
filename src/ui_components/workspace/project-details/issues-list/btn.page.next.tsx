import IconArrowRight from "@/ui_components/icons/arrow.right";
import { useRouter, useSearchParams } from "next/navigation";

const BtnIssuePaginationNext = ({
	page,
	projectKey,
	category,
}: {
	page: number;
	projectKey: string;
	category: string;
}) => {
	const urlQueries = useSearchParams();
	const router = useRouter();

	return (
		<button
			className=" tw-py-1 tw-px-2 tw-bg-transparent"
			onClick={() => {
				router.push(
					`/workspace/project-details/${projectKey}/issues-list/${category}/${
						page + 1
					}${urlQueries.get("type") ? "?type" + urlQueries.get("type") : ""}${
						urlQueries.get("status") ? "&status" + urlQueries.get("status") : ""
					}${
						urlQueries.get("assignee")
							? "&assignee" + urlQueries.get("assignee")
							: ""
					}${
						urlQueries.get("dueDate")
							? "&dueDate" + urlQueries.get("dueDate")
							: ""
					}`,
				);
			}}>
			<IconArrowRight />
		</button>
	);
};

export default BtnIssuePaginationNext;
