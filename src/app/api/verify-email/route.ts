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

	const email = body.email;

	const authSupportUrl =
		process.env.AUTH_SUPPORT_URI ??
		fs.readFileSync("/auth_support_uri", "utf8");

	// cache email address in auth support service redis cache and send a verification email to the provide email address
	const sendEmailRes = await fetch(`${authSupportUrl}/cache/save/email`, {
		method: "POST",
		body: JSON.stringify({
			email,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).catch((e) => {
		console.log(
			"error while making verify request to auth-support service api",
		);
		console.error(e);

		return new NextResponse("failed to send verification email", {
			status: 500,
			headers: {
				"Access-Control-Allow-Origin": origin,
				"Content-Type": "text/plain",
			},
		});
	});

	if (sendEmailRes.ok) {
		// verification email successfully sent.
		console.log("verification email sent.");

		return new NextResponse("email sent", {
			status: 200,
			headers: {
				"Access-Control-Allow-Origin": origin,
				"Content-Type": "text/plain",
			},
		});
	} else {
		// sending verification email failed with a 400 response code, mostly because an account with that email address already exists
		if (sendEmailRes.status == 400) {
			return new NextResponse("email used", {
				status: 400,
				headers: {
					"Access-Control-Allow-Origin": origin,
					"Content-Type": "text/plain",
				},
			});
		}

		// there was an error in the auth-support service while it was trying to send verification email
		console.log(
			"email not sent, received a 5** response from auth support service",
		);

		return new NextResponse(
			"unable to send verification email, please try again later",
			{
				status: 500,
				headers: {
					"Access-Control-Allow-Origin": origin,
					"Content-Type": "text/plain",
				},
			},
		);
	}
}

//  prevent fetch response caching on this api route endpoint
export const dynamic = "force-dynamic";
