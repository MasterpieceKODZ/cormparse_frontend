import PopUpIssueItem from "./issue.item";

const InprogressIssuesNavList = () => {
	return (
		<div className="tw-mt-5">
			<p className=" tw-font-russo-one tw-text-[15px] tw-text-gray-800 dark:tw-text-gray-400">
				In-Progress
			</p>
			<ul className=" tw-list-none">
				<li>
					<PopUpIssueItem
						summary="This is a summay of the issues i just created from my brain, initiate a hostile takeover in the company befor you start braging. "
						type="task"
						issuekey="DBUG-2"
						project="Project Catfish Pond"
					/>
				</li>
				<li>
					<PopUpIssueItem
						summary="This is a summay of the issues i just created from my brain, initiate a hostile takeover in the company befor you start braging. "
						type="feature"
						issuekey="DBUG-2"
						project="Project Catfish Pond"
					/>
				</li>
				<li>
					<PopUpIssueItem
						summary="This is a summay of the issues i just created from my brain, initiate a hostile takeover in the company befor you start braging. "
						type="bug"
						issuekey="DBUG-2"
						project="Project Catfish Pond"
					/>
				</li>
				<li>
					<PopUpIssueItem
						summary="This is a summay of the issues i just created from my brain, initiate a hostile takeover in the company befor you start braging. "
						type="improvement"
						issuekey="DBUG-2"
						project="Project Catfish Pond"
					/>
				</li>
				<li>
					<PopUpIssueItem
						summary="This is a summay of the issues i just created from my brain, initiate a hostile takeover in the company befor you start braging. "
						type="sub_task"
						issuekey="DBUG-2"
						project="Project Catfish Pond"
					/>
				</li>
			</ul>
		</div>
	);
};

export default InprogressIssuesNavList;
