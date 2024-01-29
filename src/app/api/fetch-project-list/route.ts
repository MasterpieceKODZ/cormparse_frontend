import { Project } from "@/db.schema.types";
import { readFileSync } from "fs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const origin =
		process.env.NODE_ENV == "production"
			? "cormparse.ddns.net"
			: "localhost:3000";

	// protect api route with API-Key
	const apiKey = req.headers.get("x-api-key");
	if (apiKey !== process.env.NEXT_API_KEY) {
		return new NextResponse("Unauthorized", {
			status: 401,
			headers: {
				"Access-Control-Allow-Origin": origin, //only respond to requests from this app's frontend
			},
		});
	}

	try {
		// fetch backend service url fron ENV of config-map file
		const crudOpsServiceURL =
			process.env.CRUD_OPS_URL ?? readFileSync("/crud_ops_url", "utf8");

		const body = await req.json();

		let userProjectsList: Response;
		if (body.email) {
			if (body.offset) {
				userProjectsList = await fetch(`${crudOpsServiceURL}`, {
					method: "POST",
					body: JSON.stringify({
						query:
							"query Projects ($email: String!,$offset: Int) {" +
							"    projects(email: $email, offset: $offset) {" +
							"        id " +
							"        name " +
							"        key " +
							"        lead {" +
							"            id " +
							"            email " +
							"            lastname " +
							"            firstname " +
							"            username " +
							"            photoUrl " +
							"            role " +
							"        } " +
							"        createdAt " +
							"        updatedAt " +
							"    } " +
							"} ",
						operationName: "Projects",
						variables: {
							email: body.email,
							offset: parseInt(body.offset) - 1,
						},
					}),
					headers: {
						"Content-Type": "application/json",
					},
					cache: "no-store",
				});
			} else {
				userProjectsList = await fetch(`${crudOpsServiceURL}`, {
					method: "POST",
					body: JSON.stringify({
						query:
							"query Projects ($email: String!) {" +
							"    projects(email: $email) {" +
							"        id " +
							"        name " +
							"        key " +
							"        lead {" +
							"            id " +
							"            email " +
							"            lastname " +
							"            firstname " +
							"            username " +
							"            photoUrl " +
							"            role " +
							"        } " +
							"        createdAt " +
							"        updatedAt " +
							"    } " +
							"} ",
						operationName: "Projects",
						variables: { email: body.email },
					}),
					headers: {
						"Content-Type": "application/json",
					},
					cache: "no-store",
				});
			}

			if (userProjectsList.ok) {
				const projectsGraphData = await userProjectsList.json();

				console.log(projectsGraphData);

				// sort projects by name
				const projects = (projectsGraphData.data.projects as Project[]).sort(
					(a, b): number => {
						const NA = a.name.toUpperCase();
						const NB = b.name.toUpperCase();

						if (NA < NB) {
							return -1;
						}

						if (NA > NB) {
							return 1;
						}

						return 0;
					},
				);

				return new NextResponse(JSON.stringify(projects), {
					status: 200,
					headers: {
						"Access-Control-Allow-Origin": origin,
						"Content-Type": "application/json",
					},
				});
			} else {
				console.log("fetch user projects failed...");
				console.error(userProjectsList.statusText);

				return new NextResponse("failed to fetch user projects...", {
					status: 404,
					headers: {
						"Access-Control-Allow-Origin": origin,
						"Content-Type": "text/plain",
					},
				});
			}
		} else {
			return new NextResponse(
				"BAD_REQUEST: expected an email field in the request body.",
				{
					status: 400,
					headers: {
						"Access-Control-Allow-Origin": origin,
						"Content-Type": "text/plain",
					},
				},
			);
		}
	} catch (error) {
		console.log("fetch user projects failed...");
		console.error(error);

		return new NextResponse("Internal Server Error", {
			status: 500,
			headers: {
				"Access-Control-Allow-Origin": origin,
				"Content-Type": "text/plain",
			},
		});
	}
}
