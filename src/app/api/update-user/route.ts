import { readFileSync } from "fs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const origin =
		process.env.NODE_ENV != "production"
			? "localhost:3000"
			: "cormparse.ddns.net";

	// reject request if "x-api-key" header is not valid
	const appSecret = req.headers.get("x-api-key");

	if (appSecret !== process.env.NEXT_API_KEY) {
		return new NextResponse("Unauthorized", {
			status: 401,
			headers: {
				"Content-Type": "text/plain",
				"Access-Control-Allow-Origin": origin,
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
					"mutation UpdateUser ($email: String!,$username: String, $role: String, $photoUrl: String){" +
					"   updateUser(email: $email, username: $username, role: $role, photoUrl: $photoUrl){" +
					"        id" +
					"        email" +
					"        firstname" +
					"        lastname" +
					"        username" +
					"        role" +
					"        photoUrl" +
					"     }" +
					"}",
				opreationName: "UpdateUser",
				variables: {
					email: body.email,
					username: body.username ?? null,
					role: body.role ?? null,
					photoUrl: body.photoUrl ?? null,
				},
			}),
			headers: {
				"Content-Type": "application/json",
			},
			cache: "no-store",
		});

		if (result.ok) {
			const newUserGraph = await result.json();

			if (newUserGraph.data.updateUser) {
				const newUserData = newUserGraph.data.updateUser;

				return new NextResponse(JSON.stringify(newUserData), {
					status: 200,
					headers: {
						"Access-Control-Allow-Origin": origin,
						"Content-Type": "application/json",
					},
				});
			} else {
				console.log("graphql error on update-user");

				return new NextResponse("FAILED", {
					status: 500,
					headers: {
						"Access-Control-Allow-Origin": origin,
						"Content-Type": "text/plain",
					},
				});
			}
		} else {
			console.log("update user failed");

			return new NextResponse("FAILED", {
				status: 500,
				headers: {
					"Access-Control-Allow-Origin": origin,
					"Content-Type": "text/plain",
				},
			});
		}
	} catch (error) {
		console.log("error on update user");
		console.error(error);

		return new NextResponse("ERROR", {
			status: 500,
			headers: {
				"Access-Control-Allow-Origin": origin,
				"Content-Type": "text/plain",
			},
		});
	}
}
