import { NextResponse } from "next/server";

import fs from "fs";

export async function POST(req: Request) {
	// reject request if "x-api-key" header is not valid

	const origin =
		process.env.NODE_ENV != "production"
			? "localhost:3000"
			: "cormparse.ddns.net";

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

	// extract provided user data
	const formData = await req.json();

	console.log(formData);

	try {
		const authSupportUrl =
			process.env.AUTH_SUPPORT_URI ??
			fs.readFileSync("/auth_support_uri", "utf8");

		// send user data to auth-support service to create a new user data in DB
		const createNewUserRes = await fetch(
			`${authSupportUrl}/create/username-n-pw/new-user`,

			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
				cache: "no-store",
			},
		);

		if (createNewUserRes.ok) {
			// user was created successfully
			return new NextResponse("ok", {
				status: 200,
				headers: {
					"Access-Control-Allow-Origin": origin,
					"Content-Type": "text/plain",
				},
			});
		} else {
			const resText = await createNewUserRes.text();

			console.log("res text -> ", resText);

			// username is already used by another user
			if (resText == "username taken") {
				return new NextResponse("username taken", {
					status: 400,
					headers: {
						"Access-Control-Allow-Origin": origin,
						"Content-Type": "text/plain",
					},
				});
			}

			// an error occurred while creating auth-support service while creating new user
			return new NextResponse("failed", {
				status: 500,
				headers: {
					"Access-Control-Allow-Origin": origin,
					"Content-Type": "text/plain",
				},
			});
		}
	} catch (e) {
		console.log(e);

		return new NextResponse("failed", {
			status: 500,
			headers: {
				"Access-Control-Allow-Origin": origin,
				"Content-Type": "text/plain",
			},
		});
	}
}
