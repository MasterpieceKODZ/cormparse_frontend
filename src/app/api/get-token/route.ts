import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function GET(req: any) {
	const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
	console.log(token);

	if (token) {
		return new NextResponse(JSON.stringify(token), {
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	return new NextResponse("not found", {
		status: 404,
		headers: {
			"Content-Type": "application/json",
		},
	});
}
