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
		const body = await req.json();

		// fetch backend service url fron ENV of config-map file
		const crudOpsServiceURL =
			process.env.CRUD_OPS_URL ?? readFileSync("/crud_ops_url", "utf8");

		const result = await fetch(crudOpsServiceURL, {
			method: "POST",
			body: JSON.stringify({
				query:
					"query ProjectsByName ($email: String!, $search: String!){" +
					"   searchProjectByName(email: $email, search: $search){" +
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
					"   }" +
					"}",
				opreationName: "ProjectsByName",
				variables: { email: body.email, search: body.search },
			}),
			headers: {
				"Content-Type": "application/json",
			},
			cache: "no-store",
		});

		if (result.ok) {
			const resultJSON = await result.json();

			if (resultJSON.data.searchProjectByName[0]) {
				console.log("found projects who's names contain ", body.search);
				console.log(resultJSON.data.searchProjectByName);

				return new NextResponse(
					JSON.stringify(resultJSON.data.searchProjectByName),
					{
						status: 200,
						headers: {
							"Content-Type": "application/json",
							"Access-Control-Allow-Origin": origin,
						},
					},
				);
			} else {
				console.log("find project by name failed.");

				return new NextResponse("FIND_PROJECT_FAILED", {
					status: 500,
					headers: {
						"Content-Type": "text/plain",
						"Access-Control-Allow-Origin": origin,
					},
				});
			}
		} else {
			console.log("find project by name failed.");

			return new NextResponse("FIND_PROJECT_FAILED", {
				status: 500,
				headers: {
					"Content-Type": "text/plain",
					"Access-Control-Allow-Origin": origin,
				},
			});
		}
	} catch (err) {
		console.log("error on find project by name.");
		console.error(err);

		return new NextResponse("FIND_PROJECT_FAILED", {
			status: 500,
			headers: {
				"Content-Type": "text/plain",
				"Access-Control-Allow-Origin": origin,
			},
		});
	}
}
