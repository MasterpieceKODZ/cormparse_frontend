import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const body = await req.json();

	try {
		const userRes = await fetch(
			`${process.env.AUTH_SUPPORT_URL}/get-user-by-email`,
			{
				method: "POST",
				body: JSON.stringify(body),
				headers: {
					"Content-Type": "application/json",
				},
			},
		);

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
