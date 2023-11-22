import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function GET(req: any) {
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
	const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
	console.log(token);

	if (token) {
		return new NextResponse(JSON.stringify(token), {
			status: 200,
			headers: {
				"Access-Control-Allow-Origin": origin,
				"Content-Type": "application/json",
			},
		});
	}

	return new NextResponse("not found", {
		status: 404,
		headers: {
			"Access-Control-Allow-Origin": origin,
			"Content-Type": "application/json",
		},
	});
}
