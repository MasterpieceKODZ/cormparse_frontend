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

		const projectsQueryRes = await fetch(`${crudOpsServiceURL}`, {
			method: "POST",
			body: JSON.stringify({
				query:
					"query ProjectIssues ($email: String!,$projectKey: String!, $category: String!, $props: String, $offset: String) {" +
					"    projectIssues(email: $email, projectKey: $projectKey, category: $category, props: $props, offset: $offset) {" +
					"        id " +
					"        summary " +
					"        key " +
					"        status " +
					"        type " +
					"        priority " +
					"        reporter {" +
					"            id " +
					"            email " +
					"            lastname " +
					"            firstname " +
					"            username " +
					"            photoUrl " +
					"            role " +
					"        } " +
					"        assignee {" +
					"            id " +
					"            email " +
					"            lastname " +
					"            firstname " +
					"            username " +
					"            photoUrl " +
					"            role " +
					"        } " +
					"        project {" +
					"            key " +
					"        } " +
					"        reportedAt " +
					"        updatedAt " +
					"        dueDate " +
					"    } " +
					"} ",
				operationName: "ProjectIssues",
				variables: {
					email: body.email,
					projectKey: body.projectKey.toUpperCase(),
					category: body.category,
					props: body.props ?? null,
					offset: body.offset,
				},
			}),
			headers: {
				"Content-Type": "application/json",
			},
			cache: "no-store",
		});

		if (projectsQueryRes.ok) {
			const projectsQueryJson = await projectsQueryRes.json();

			console.log("response from project issues graphql...");
			console.log(projectsQueryJson);

			if (projectsQueryJson.data.projectIssues) {
				return new NextResponse(
					JSON.stringify(projectsQueryJson.data.projectIssues),
					{
						status: 200,
						headers: {
							"Access-Control-Allow-Origin": origin,
							"Content-Type": "application/json",
						},
					},
				);
			} else {
				return new NextResponse("FAILED", {
					status: 500,
					headers: {
						"Access-Control-Allow-Origin": origin,
						"Content-Type": "text/plain",
					},
				});
			}
		} else {
			return new NextResponse("FAILED", {
				status: 500,
				headers: {
					"Access-Control-Allow-Origin": origin,
					"Content-Type": "text/plain",
				},
			});
		}
	} catch (err) {
		console.log("fetch user project issues failed...");
		console.error(err);

		return new NextResponse("Internal Server Error", {
			status: 500,
			headers: {
				"Access-Control-Allow-Origin": origin,
				"Content-Type": "text/plain",
			},
		});
	}
}
