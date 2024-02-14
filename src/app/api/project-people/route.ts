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
				"Content-Type": "text/plain",
				"Access-Control-Allow-Origin": origin, //only respond to requests from this app's frontend
			},
		});
	}

	try {
		// fetch backend service url fron ENV of config-map file
		const crudOpsServiceURL =
			process.env.CRUD_OPS_URL ?? readFileSync("/crud_ops_url", "utf8");

		const body = await req.json();

		if (body.username) {
			// filter project people by username

			const peopleRes = await fetch(crudOpsServiceURL, {
				method: "POST",
				body: JSON.stringify({
					query:
						"query ProjectPeople ($email: String!, $projectKey: String!, $username: String){" +
						"   projectPeople(email: $email, projectKey: $projectKey, username: $username){" +
						"        id " +
						"        email " +
						"        firstname " +
						"        lastname " +
						"        username " +
						"        role " +
						"        photoUrl " +
						"   }" +
						"}",
					opreationName: "ProjectPeople",
					variables: {
						email: body.email,
						projectKey: body.projectKey,
						username: body.username,
					},
				}),
				headers: {
					"Content-Type": "application/json",
				},
				cache: "no-store",
			});

			if (peopleRes.ok) {
				const result = await peopleRes.json();

				if (result.data.projectPeople) {
					return new NextResponse(JSON.stringify(result.data.projectPeople), {
						status: 200,
						headers: {
							"Content-Type": "application/json",
							"Access-Control-Allow-Origin": origin,
						},
					});
				} else {
					return new NextResponse("FIND_ASSIGNEE_FAILED", {
						status: 500,
						headers: {
							"Content-Type": "text/plain",
							"Access-Control-Allow-Origin": origin,
						},
					});
				}
			} else {
				return new NextResponse("FIND_ASSIGNEE_FAILED", {
					status: 500,
					headers: {
						"Content-Type": "text/plain",
						"Access-Control-Allow-Origin": origin,
					},
				});
			}
		} else {
			const peopleRes = await fetch(crudOpsServiceURL, {
				method: "POST",
				body: JSON.stringify({
					query:
						"query ProjectPeople ($email: String!, $projectKey: String!){" +
						"   projectPeople(email: $email, projectKey: $projectKey){" +
						"        id " +
						"        email " +
						"        firstname " +
						"        lastname " +
						"        username " +
						"        role " +
						"        photoUrl " +
						"   }" +
						"}",
					opreationName: "ProjectPeople",
					variables: {
						email: body.email,
						projectKey: body.projectKey,
					},
				}),
				headers: {
					"Content-Type": "application/json",
				},
				cache: "no-store",
			});

			if (peopleRes.ok) {
				const result = await peopleRes.json();

				if (result.data.projectPeople) {
					return new NextResponse(JSON.stringify(result.data.projectPeople), {
						status: 200,
						headers: {
							"Content-Type": "application/json",
							"Access-Control-Allow-Origin": origin,
						},
					});
				} else {
					return new NextResponse("FIND_ASSIGNEE_FAILED", {
						status: 500,
						headers: {
							"Content-Type": "text/plain",
							"Access-Control-Allow-Origin": origin,
						},
					});
				}
			} else {
				return new NextResponse("FIND_ASSIGNEE_FAILED", {
					status: 500,
					headers: {
						"Content-Type": "text/plain",
						"Access-Control-Allow-Origin": origin,
					},
				});
			}
		}
	} catch (err) {
		console.log("error on find issue assignee by username.");
		console.error(err);

		return new NextResponse("FIND_ASSIGNEE_FAILED", {
			status: 500,
			headers: {
				"Content-Type": "text/plain",
				"Access-Control-Allow-Origin": origin,
			},
		});
	}
}
