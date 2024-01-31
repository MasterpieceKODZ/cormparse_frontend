import { readFileSync } from "fs";
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";
import { text } from "stream/consumers";

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
		//fetch backend service url fron ENV of config-map file
		const crudOpsServiceURL =
			process.env.CRUD_OPS_URL ?? readFileSync("/crud_ops_url", "utf8");

		const body = await req.json();

		const userDataRes = await fetch(crudOpsServiceURL, {
			method: "POST",
			body: JSON.stringify({
				query:
					"query UserData($email: String!){" +
					"   userData(email: $email){ " +
					"    id  email   firstname   lastname   username  photoUrl role" +
					"}" +
					"}",
				operationName: "UserData",
				variables: { email: body.email },
			}),
			headers: {
				"Content-Type": "application/json",
			},
			cache: "no-store",
		});

		if (userDataRes.ok) {
			const userDataJSON = await userDataRes.json();

			if (userDataJSON.data.userData) {
				return new NextResponse(JSON.stringify(userDataJSON.data.userData), {
					status: 200,
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": origin,
					},
				});
			} else {
				console.log("get-user-graphql error");
				console.log(userDataJSON.errors[0]);

				return new NextResponse("FAILED", {
					status: 500,
					headers: {
						"Content-Type": "text/plain",
						"Access-Control-Allow-Origin": origin,
					},
				});
			}
		} else {
			console.log("get-user-graphql query failed");
			const errorText = await userDataRes.json();
			console.log(errorText);

			return new NextResponse("ERROR", {
				status: 500,
				headers: {
					"Content-Type": "text/plain",
					"Access-Control-Allow-Origin": origin,
				},
			});
		}
	} catch (err) {
		console.log("error on get-user-graphql");
		console.error(err);

		return new NextResponse("ERROR", {
			status: 500,
			headers: {
				"Content-Type": "text/plain",
				"Access-Control-Allow-Origin": origin,
			},
		});
	}
}
