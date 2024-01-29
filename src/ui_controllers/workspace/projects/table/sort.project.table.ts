import { Project } from "@/db.schema.types";

export async function sortProjects(
	sortBy: string,
	order: "asc" | "desc",
	projects: Project[],
): Promise<Project[]> {
	let sortedProjects;

	switch (sortBy.toLocaleLowerCase()) {
		case "name":
			sortedProjects = projects.sort((a, b): number => {
				const NA = a.name.toUpperCase();
				const NB = b.name.toUpperCase();

				if (NA < NB) {
					return order == "asc" ? -1 : 1;
				}

				if (NA > NB) {
					return order == "asc" ? 1 : -1;
				}

				return 0;
			});

			return sortedProjects;
		case "key":
			sortedProjects = projects.sort((a, b): number => {
				const KA = a.key.toUpperCase();
				const KB = b.key.toUpperCase();

				if (KA < KB) {
					return order == "asc" ? -1 : 1;
				}

				if (KA > KB) {
					return order == "asc" ? 1 : -1;
				}

				return 0;
			});

			return sortedProjects;
		case "lead":
			sortedProjects = projects.sort((a, b): number => {
				const LA = a.lead.username.toUpperCase();
				const LB = b.lead.username.toUpperCase();

				if (LA < LB) {
					return order == "asc" ? -1 : 1;
				}

				if (LA > LB) {
					return order == "asc" ? 1 : -1;
				}

				return 0;
			});

			return sortedProjects;
		case "date created":
			sortedProjects = projects.sort((a, b): number => {
				const DCA = new Date(a.createdAt).getTime();
				const DCB = new Date(b.createdAt).getTime();

				if (DCA < DCB) {
					return order == "asc" ? -1 : 1;
				}

				if (DCA > DCB) {
					return order == "asc" ? 1 : -1;
				}

				return 0;
			});

			return sortedProjects;
		case "date updated":
			sortedProjects = projects.sort((a, b): number => {
				const DCA = new Date(a.updatedAt).getTime();
				const DCB = new Date(b.updatedAt).getTime();

				if (DCA < DCB) {
					return order == "asc" ? -1 : 1;
				}

				if (DCA > DCB) {
					return order == "asc" ? 1 : -1;
				}

				return 0;
			});

			return sortedProjects;
		default:
			return [];
	}
}
