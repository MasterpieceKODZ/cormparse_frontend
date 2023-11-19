import { NextResponse } from "next/server";

export async function POST(req: Request) {
	// extract provided user data
	const formData = await req.json();

	console.log(formData);

	try {
		// send user data to auth-support service to create a new user data in DB
		const createNewUserRes = await fetch(
			`${process.env.AUTH_SUPPORT_URL}/create/username-n-pw/new-user`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
				cache: "no-store",
			},
		);

		if (createNewUserRes.ok) {
			// user was created successfully
			return new NextResponse("ok", {
				status: 200,
				headers: {
					"Content-Type": "text/plain",
				},
			});
		} else {
			const resText = await createNewUserRes.text();

			console.log("res text -> ", resText);

			// username is already used by another user
			if (resText == "username taken") {
				return new NextResponse("username taken", {
					status: 400,
					headers: {
						"Content-Type": "text/plain",
					},
				});
			} else if (resText == "email not found in cache") {
				// verification email link has expired or email address was never pre-registerd
				return new NextResponse("email not found", {
					status: 400,
					headers: {
						"Content-Type": "text/plain",
					},
				});
			}

			// an error occurred while creating auth-support service while creating new user
			return new NextResponse("failed", {
				status: 500,
				headers: {
					"Content-Type": "text/plain",
				},
			});
		}
	} catch (e) {
		console.log(e);

		return new NextResponse("failed", {
			status: 500,
			headers: {
				"Content-Type": "text/plain",
			},
		});
	}
}
