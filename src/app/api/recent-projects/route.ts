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
				"Cntent-Type": "text/plain",
				"Access-Control-Allow-Origin": origin, //only respond to requests from this app's frontend
			},
		});
	}

	try {
		// fetch backend service url fron ENV of config-map file
		const crudOpsServiceURL =
			process.env.CRUD_OPS_URL ?? readFileSync("/crud_ops_url", "utf8");

		const body = await req.json();

		let recentProjsQueryResponse: Response;
		if (body.email) {
			recentProjsQueryResponse = await fetch(`${crudOpsServiceURL}`, {
				method: "POST",
				body: JSON.stringify({
					query:
						"query RecentProjects($email: String!) {" +
						"    userRecentProjects(email: $email) {" +
						"        id " +
						"        name " +
						"        key " +
						"        updatedAt " +
						"        creator{" +
						"           username" +
						"        }" +
						"    } " +
						"} ",
					operationName: "RecentProjects",
					variables: { email: body.email },
				}),
				headers: {
					"Content-Type": "application/json",
				},
				cache: "no-store",
			});

			if (recentProjsQueryResponse.ok) {
				const projectsGraphData = await recentProjsQueryResponse.json();

				if (projectsGraphData.data.userRecentProjects[0]) {
					console.log(projectsGraphData);

					return new NextResponse(
						JSON.stringify(projectsGraphData.data.userRecentProjects),
						{
							status: 200,
							headers: {
								"Access-Control-Allow-Origin": origin,
								"Content-Type": "application/json",
							},
						},
					);
				} else {
					console.log("graphql error received from recent-projects");
					console.log(projectsGraphData.errors[0]);

					return new NextResponse("FAILED", {
						status: 400,
						headers: {
							"Access-Control-Allow-Origin": origin,
							"Content-Type": "text/plain",
						},
					});
				}
			} else {
				console.log("fetch user projects failed...");
				console.error(recentProjsQueryResponse.statusText);

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
	} catch (err) {
		return new Response("ERROR", {
			status: 500,
			headers: {
				"Content-Type": "text/plain",
				"Access-Control-Allow-Origin": origin,
			},
		});
	}
}
