import fs from "fs";
import { NextResponse } from "next/server";
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

	const body = await req.json();

	const authSupportUrl =
		process.env.AUTH_SUPPORT_URI ??
		fs.readFileSync("/auth_support_uri", "utf8");

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
					"Access-Control-Allow-Origin": origin,
					"Content-Type": "text/plain",
				},
			});
		} else if (pwResetRes.status == 400) {
			return new NextResponse("failed", {
				status: 400,
				headers: {
					"Access-Control-Allow-Origin": origin,
					"Content-Type": "text/plain",
				},
			});
		} else {
			return new NextResponse("failed", {
				status: 500,
				headers: {
					"Access-Control-Allow-Origin": origin,
					"Content-Type": "text/plain",
				},
			});
		}
	} catch (err) {
		console.log("error on reset password");
		console.error(err);
		return new NextResponse("failed", {
			status: 500,
			headers: {
				"Access-Control-Allow-Origin": origin,
				"Content-Type": "text/plain",
			},
		});
	}
}
