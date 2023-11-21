import { NextResponse } from "next/server";
import fs from "fs";

export async function POST(req: Request) {
	const body = await req.json();

	try {
		let authSupportUrl;

		if (process.env.NODE_ENV == "production" && !process.env.AUTH_SUPPORT_URL) {
			// auth support microservice url was provided as a secret not as env
			authSupportUrl = fs.readFileSync("/config/auth_support_url");
		} else {
			// auth support url was provided as an env
			authSupportUrl = process.env.AUTH_SUPPORT_URL;
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
					"Content-Type": "application/json",
				},
			});
		} else {
			return new NextResponse("not found", {
				status: 404,
				headers: {
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
				"Content-Type": "text/plain",
			},
		});
	}
}
