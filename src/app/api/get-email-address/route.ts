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
	const body = await req.json();

	console.log("body @ get-email-address next api endpoint is");
	console.log(body);

	const authSupportUrl =
		process.env.AUTH_SUPPORT_URI ??
		fs.readFileSync("/auth_support_uri", "utf8");

	try {
		// fetch email from auth-support service
		const emailRes = await fetch(`${authSupportUrl}/get-email-from-cache`, {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
			},
			cache: "no-store",
		});

		const resTxt = await emailRes.text();
		console.log(
			"res text @ next.js get-email-address api endpoint is - ",
			resTxt,
		);

		if (emailRes.ok) {
			return new NextResponse(resTxt, {
				status: 200,
				headers: {
					"Access-Control-Allow-Origin": origin,
					"Content-Type": "text/plain",
				},
			});
		} else {
			if (resTxt == "not found")
				return new NextResponse("not found", {
					status: 400,
					headers: {
						"Access-Control-Allow-Origin": origin,
						"Content-Type": "text/plain",
					},
				});
			// there was an error in auth-support service while fetching email from cache
			else
				return new NextResponse("failed", {
					status: 502,
					headers: {
						"Access-Control-Allow-Origin": origin,
						"Content-Type": "text/plain",
					},
				});
		}
	} catch (err) {
		console.log("error in get email api endpoint");
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
