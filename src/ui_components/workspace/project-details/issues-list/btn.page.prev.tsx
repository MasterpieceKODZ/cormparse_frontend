import IconArrowLeft from "@/ui_components/icons/arrow.left";
import { useRouter } from "next/navigation";

const BtnIssuesPaginationPrev = () => {
	const router = useRouter();
	return (
		<button
			className=" tw-p-4 tw-bg-transparent"
			onClick={() => {
				router.back();
			}}>
			<IconArrowLeft />
		</button>
	);
};

export default BtnIssuesPaginationPrev;
