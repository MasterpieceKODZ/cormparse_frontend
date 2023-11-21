import fs from "fs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
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
				"Content-Type": "text/plain",
			},
		});
	} else {
		// sending verification email failed with a 400 response code, mostly because an account with that email address already exists
		if (sendEmailRes.status == 400) {
			return new NextResponse("email used", {
				status: 400,
				headers: {
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
					"Content-Type": "text/plain",
				},
			},
		);
	}
}

//  prevent fetch response caching on this api route endpoint
export const dynamic = "force-dynamic";