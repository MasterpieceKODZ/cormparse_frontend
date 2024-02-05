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

		const deleteUserRes = await fetch(`${crudOpsServiceURL}`, {
			method: "POST",
			body: JSON.stringify({
				query:
					"mutation DeleteUser($email: String!){" +
					"   deleteUser(email: $email){ " +
					"    id  email   firstname   lastname   username  photoUrl role" +
					"}" +
					"}",
				operationName: "DeleteUser",
				variables: { email: body.email },
			}),
			headers: {
				"Content-Type": "application/json",
			},
			cache: "no-store",
		});

		if (deleteUserRes.ok) {
			const deleteUserGraphRes = await deleteUserRes.json();

			if (deleteUserGraphRes.data.deleteUser) {
				return new NextResponse(
					JSON.stringify(deleteUserGraphRes.data.deleteUser),
					{
						status: 200,
						headers: {
							"Content-Type": "application/json",
							"Access-Control-Allow-Origin": origin,
						},
					},
				);
			} else {
				if (deleteUserGraphRes.errors[0].message == "NOT_ALLOWED") {
					return new NextResponse("NOT_ALLOWED", {
						status: 400,
						headers: {
							"Access-Control-Allow-Origin": origin,
							"Content-Type": "text/plain",
						},
					});
				} else {
					return new NextResponse("FAILED", {
						status: 500,
						headers: {
							"Access-Control-Allow-Origin": origin,
							"Content-Type": "text/plain",
						},
					});
				}
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
	} catch (error) {
		return new NextResponse("ERROR", {
			status: 500,
			headers: {
				"Access-Control-Allow-Origin": origin,
				"Content-Type": "text/plain",
			},
		});
	}
}
