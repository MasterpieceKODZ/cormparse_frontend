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
				"Access-Control-Allow-Origin": origin,
			},
		});
	}

	// extract provided user data
	const formData = await req.json();

	console.log(formData);

	try {
		let authSupportUrl;

		if (process.env.NODE_ENV == "production" && !process.env.AUTH_SUPPORT_URI) {
			// auth support microservice url was provided as a secret not as env
			authSupportUrl = fs.readFileSync("/config/auth_support_uri");
		} else {
			// auth support url was provided as an env
			authSupportUrl = process.env.AUTH_SUPPORT_URI;
		}

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
			} else if (resText == "email not found in cache") {
				// verification email link has expired or email address was never pre-registerd
				return new NextResponse("email not found", {
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
