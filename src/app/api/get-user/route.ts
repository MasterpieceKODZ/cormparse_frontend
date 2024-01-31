import { NextResponse } from "next/server";
import fs from "fs";

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

	const body = await req.json();

	try {
		let authSupportUrl;

		if (process.env.NODE_ENV == "production" && !process.env.AUTH_SUPPORT_URI) {
			// auth support microservice url was provided as a secret not as env
			authSupportUrl = fs.readFileSync("/auth_support_uri", "utf8");
		} else {
			// auth support url was provided as an env
			authSupportUrl = process.env.AUTH_SUPPORT_URI;
		}

		const userRes = await fetch(`${authSupportUrl}/get-user-by-email`, {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (userRes.ok) {
			const user = await userRes.json();

			return new NextResponse(JSON.stringify(user), {
				status: 200,
				headers: {
					"Access-Control-Allow-Origin": origin,
					"Content-Type": "application/json",
				},
			});
		} else {
			return new NextResponse("not found", {
				status: 404,
				headers: {
					"Access-Control-Allow-Origin": origin,
					"Content-Type": "text/plain",
				},
			});
		}
	} catch (err) {
		console.log("error on query db api route");
		console.error(err);

		return new NextResponse("error", {
			status: 500,
			headers: {
				"Access-Control-Allow-Origin": origin,
				"Content-Type": "text/plain",
			},
		});
	}
}
