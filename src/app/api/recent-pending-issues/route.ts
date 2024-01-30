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
		const body = await req.json();

		// fetch backend service url fron ENV of config-map file
		const crudOpsServiceURL =
			process.env.CRUD_OPS_URL ?? readFileSync("/crud_ops_url", "utf8");

		const result = await fetch(crudOpsServiceURL, {
			method: "POST",
			body: JSON.stringify({
				query:
					"query UserRecentIssues ($email: String!){" +
					"   userRecentIssues(email: $email){" +
					"        id " +
					"        summary " +
					"        key " +
					"        type " +
					"        priority " +
					"        status " +
					"        reportedAt " +
					"        updatedAt " +
					"        project{" +
					"           name" +
					"        }" +
					"   }" +
					"}",
				opreationName: "UserRecentIssues",
				variables: { email: body.email },
			}),
			headers: {
				"Content-Type": "application/json",
			},
			cache: "no-store",
		});

		if (result.ok) {
			const resultJSON = await result.json();

			if (resultJSON.data.userRecentIssues) {
				console.log("user ", body.email, " recent issues.");
				console.log(resultJSON.data.userRecentIssues);

				return new NextResponse(
					JSON.stringify(resultJSON.data.userRecentIssues),
					{
						status: 200,
						headers: {
							"Content-Type": "application/json",
							"Access-Control-Allow-Origin": origin,
						},
					},
				);
			} else {
				console.log("recent issue response failed");

				return new NextResponse("RECENT_ISSUE_FAILED", {
					status: 500,
					headers: {
						"Content-Type": "text/plain",
						"Access-Control-Allow-Origin": origin,
					},
				});
			}
		} else {
			console.log("recent issue result not ok");

			return new NextResponse("RECENT_ISSUE_FAILED", {
				status: 500,
				headers: {
					"Content-Type": "text/plain",
					"Access-Control-Allow-Origin": origin,
				},
			});
		}
	} catch (err) {
		console.log("error on get recent issues.");
		console.error(err);

		return new NextResponse("RECENT_ISSUE_FAILED", {
			status: 500,
			headers: {
				"Content-Type": "text/plain",
				"Access-Control-Allow-Origin": origin,
			},
		});
	}
}
