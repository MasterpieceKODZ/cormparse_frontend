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

	try {
		const body = await req.json();

		if (body.email) {
			// fetch backend service url fron ENV of config-map file
			const crudOpsServiceURL =
				process.env.CRUD_OPS_URL ?? readFileSync("/crud_ops_url", "utf8");

			const countGraphRes = await fetch(crudOpsServiceURL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					query:
						"query ProjectsCount($email: String!){" +
						" projectsCount(email: $email)" +
						"}",
					variables: { email: body.email },
					operationName: "ProjectsCount",
				}),
				cache: "no-store",
			});

			if (countGraphRes.ok) {
				const countGraph = await countGraphRes.json();

				console.log("user's projects count is ", countGraph);

				return new NextResponse(
					JSON.stringify({ count: countGraph.data.projectsCount }),
					{
						headers: {
							"Content-Type": "application/json",
							"Access-Control-Allow-Origin": origin,
						},
					},
				);
			} else {
				console.log("projects count graphql req failed...");

				return new NextResponse("Internal Server Error", {
					status: 500,
					headers: {
						"Access-Control-Allow-Origin": origin,
						"Content-Type": "text/plain",
					},
				});
			}
		} else {
			return new NextResponse(
				"BAD_REQUEST: expexted an email field in the request body",
				{
					status: 400,
					headers: {
						"Content-Type": "text/plain",
						"Access-Control-Allow-Origin": origin,
					},
				},
			);
		}
	} catch (err) {
		console.log("error in projects count frontend API");
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
