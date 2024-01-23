import IconArrowRight from "@/ui_components/icons/arrow.right";
import { useRouter } from "next/navigation";

const BtnProjectsPaginationNext = () => {
	const router = useRouter();
	return (
		<button
			title="next page"
			className=" tw-w-max tw-h-max tw-p-4 tw-bg-transparent"
			onClick={() => {
				const offset = parseInt(location.pathname.split("/")[4]);

				console.log(offset);

				if (offset) router.push(`/workspace/projects-list/page/${offset + 1}`);
				else router.push("/workspace/projects-list/page/2");
			}}>
			<IconArrowRight />
		</button>
	);
};

export default BtnProjectsPaginationNext;
