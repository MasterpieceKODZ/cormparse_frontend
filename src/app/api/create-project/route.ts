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
		return new NextResponse("UNAUTHORIZED", {
			status: 401,
			headers: {
				"Content-Type": "text/plain",
				"Access-Control-Allow-Origin": origin, //only respond to requests from this app's frontend
			},
		});
	}

	const body = await req.json();

	// fetch backend service url fron ENV of config-map file
	const crudOpsServiceURL =
		process.env.CRUD_OPS_URL ?? readFileSync("/crud_ops_url", "utf8");

	try {
		const projectRes = await fetch(crudOpsServiceURL, {
			method: "POST",
			body: JSON.stringify({
				query:
					"mutation createNewProject($email: String!, $name: String!, $key: String!){" +
					"createProject(email: $email, name: $name, key: $key){" +
					"id name key " +
					"}" +
					"}",
				variables: { email: body.email, name: body.name, key: body.key },
				operationName: "createNewProject",
			}),
			headers: {
				"Content-Type": "application/json",
			},
			cache: "no-store",
		});

		if (projectRes.ok) {
			const projectGraph = await projectRes.json();

			console.log(projectGraph);

			if (projectGraph.data.createProject) {
				return new NextResponse(
					JSON.stringify(projectGraph.data.createProject),
					{
						status: 200,
						headers: {
							"Access-Control-Allow-Origin": origin,
							"Content-Type": "application/json",
						},
					},
				);
			} else if (projectGraph.errors[0].message == "DUPLICATE_KEY_OR_NAME") {
				// the user already has a project with the same name or key
				return new NextResponse("DUPLICATCE_KEY_OR_NAME", {
					status: 400,
					headers: {
						"Access-Control-Allow-Origin": origin,
						"Content-Type": "text/plain",
					},
				});
			} else if (projectGraph.errors[0].message == "UNKNOWN_CREATOR") {
				// provided email not found
				return new NextResponse("UNKNOWN_CREATOR", {
					status: 400,
					headers: {
						"Access-Control-Allow-Origin": origin,
						"Content-Type": "text/plain",
					},
				});
			} else {
				return new NextResponse("UNKNOWN_ERROR", {
					// other errors
					status: 500,
					headers: {
						"Access-Control-Allow-Origin": origin,
						"Content-Type": "text/plain",
					},
				});
			}
		} else {
			console.log("project creation failed");

			return new NextResponse("failed", {
				status: 500,
				headers: {
					"Access-Control-Allow-Origin": origin,
					"Content-Type": "text/plain",
				},
			});
		}
	} catch (err) {
		console.log("error in create new project next API.");
		console.error(err);

		return new NextResponse("INTERNAL SERVER ERROR", {
			status: 500,
			headers: {
				"Access-Control-Allow-Origin": origin,
				"Content-Type": "text/plain",
			},
		});
	}
}
