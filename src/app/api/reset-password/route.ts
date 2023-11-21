import fs from "fs";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
	const body = await req.json();

	let authSupportUrl;

	if (process.env.NODE_ENV == "production" && !process.env.AUTH_SUPPORT_URL) {
		// auth support microservice url was provided as a secret not as env
		authSupportUrl = fs.readFileSync("/config/auth_support_url");
	} else {
		// auth support url was provided as an env
		authSupportUrl = process.env.AUTH_SUPPORT_URL;
	}

	try {
		const pwResetRes = await fetch(`${authSupportUrl}/reset-password`, {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
			},
			cache: "no-store",
		});

		if (pwResetRes.ok) {
			return new NextResponse("ok", {
				status: 200,
				headers: {
					Content: "text/plain",
				},
			});
		} else {
			return new NextResponse("failed", {
				status: 500,
				headers: {
					Content: "text/plain",
				},
			});
		}
	} catch (err) {
		console.log("error on reset password");
		console.error(err);
		return new NextResponse("failed", {
			status: 500,
			headers: {
				Content: "text/plain",
			},
		});
	}
}
