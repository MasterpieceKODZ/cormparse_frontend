import { Session } from "next-auth";

export async function getUserBySession(session: Session): Promise<boolean> {
	try {
		const userRes = await fetch(
			`${process.env.NEXTAUTH_URL ?? ""}/api/get-user`, // process.env.NEXTAUTH_URL is used if the function is called in server-side rendered component.
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"X-Api-Key": "kjsopdshfk46873ndsjk0388kdmdsn8y32y85xnjsd873jd7yt4f",
				},
				body: JSON.stringify({ email: session.user?.email }),
				cache: "no-store",
			},
		);

		if (userRes.ok) {
			return true;
		} else {
			return false;
		}
	} catch (error) {
		console.log("error on login page user authentication check...");
		console.error(error);

		return false;
	}
}
