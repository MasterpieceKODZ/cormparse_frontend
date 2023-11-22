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
				"Access-Control-Allow-Origin": origin,
			},
		});
	}

	const body = await req.json();

	const email = body.email;

	let authSupportUrl;

	if (process.env.NODE_ENV == "production" && !process.env.AUTH_SUPPORT_URL) {
		// auth support microservice url was provided as a secret not as env
		authSupportUrl = fs.readFileSync("/config/auth_support_url");
	} else {
		// auth support url was provided as an env
		authSupportUrl = process.env.AUTH_SUPPORT_URL;
	}

	// cache email address in auth support service redis cache and send a verification email to the provide email address
	const sendEmailRes = await fetch(`${authSupportUrl}/cache/save/email`, {
		method: "POST",
		body: JSON.stringify({
			email,
			type: body.type,
		}),
		headers: {
			"Content-Type": "application/json",
		},
		cache: "no-store",
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
		// sending email failed with a 400 response code, mostly because an account with that email address already exists during email verification or there is no user with this email address during password reset
		if (sendEmailRes.status == 400) {
			return new NextResponse("faulty email", {
				status: 400,
				headers: {
					"Access-Control-Allow-Origin": origin,
					"Content-Type": "text/plain",
				},
			});
		}

		// there was an error in the auth-support service while it was trying to send email
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
