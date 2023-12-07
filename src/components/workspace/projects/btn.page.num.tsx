const BtnProjectPaginationNum = ({ pageNum }: { pageNum: string }) => {
	return (
		<button className=" tw-p-2 tw-bg-blue-600 tw-text-white tw-font-russo-one tw-rounded-sm tw-mx-2 tw-text-[13px]">
			{pageNum}
		</button>
	);
};

export default BtnProjectPaginationNum;
