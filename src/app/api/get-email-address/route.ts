import { NextResponse } from "next/server";
import fs from "fs";

export async function POST(req: Request) {
	const body = await req.json();

	console.log("body @ get-email-address next api endpoint is");
	console.log(body);

	let authSupportUrl;

	if (process.env.NODE_ENV == "production" && !process.env.AUTH_SUPPORT_URL) {
		// auth support microservice url was provided as a secret not as env
		authSupportUrl = fs.readFileSync("/config/auth_support_url");
	} else {
		// auth support url was provided as an env
		authSupportUrl = process.env.AUTH_SUPPORT_URL;
	}

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
					"Content-Type": "text/plain",
				},
			});
		} else {
			if (resTxt == "not found")
				return new NextResponse("not found", {
					status: 400,
					headers: {
						"Content-Type": "text/plain",
					},
				});
			// there was an error in auth-support service while fetching email from cache
			else
				return new NextResponse("failed", {
					status: 502,
					headers: {
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
				"Content-Type": "text/plain",
			},
		});
	}
}
