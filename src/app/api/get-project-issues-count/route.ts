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
						"query IssuesCount($email: String!, $projectKey: String!, $category: String!, $props: String){" +
						" projectIssuesCount(email: $email, projectKey: $projectKey, category: $category, props: $props)" +
						"}",
					variables: {
						email: body.email,
						projectKey: body.projectKey,
						category: body.category,
						props: body.props,
					},
					operationName: "IssuesCount",
				}),
				cache: "no-store",
			});

			if (countGraphRes.ok) {
				const countGraphJSON = await countGraphRes.json();

				if (countGraphJSON.data.projectIssuesCount) {
					return new NextResponse(
						JSON.stringify({ count: countGraphJSON.data.projectIssuesCount }),
						{
							headers: {
								"Content-Type": "application/json",
								"Access-Control-Allow-Origin": origin,
							},
						},
					);
				} else {
					console.log("graphql error in projects count");
					console.log(countGraphJSON.errors[0]);

					return new NextResponse("FAILED", {
						status: 500,
						headers: {
							"Content-Type": "text/plain",
							"Access-Control-Allow-Origin": origin,
						},
					});
				}
			} else {
				console.log("issues count graphql req failed...");

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
				"BAD_REQUEST: expected an email field in the request body",
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
		console.log("error in issues count frontend API");
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
