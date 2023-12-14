export async function toggleNewPersonRank() {
	document
		.querySelector(".drop_dwn_prjct_person_rank")
		?.classList.toggle("open");

	document
		.getElementById("icn_arrw_nw_prsn_rank")
		?.classList.toggle("tw-rotate-180");
}
