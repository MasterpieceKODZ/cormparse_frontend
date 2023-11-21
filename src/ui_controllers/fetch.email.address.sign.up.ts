import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, SetStateAction } from "react";

export async function fetchEmailAddressWithKey(
	setEmail: Dispatch<SetStateAction<string>>,
	emailKey: string | null,
	router: AppRouterInstance,
) {
	if (!emailKey) {
		console.log("key not found");

		// if url (key) query param was not provided, navigate back to login
		router.push("/auth/login");
	} else {
		try {
			// fetch email address from redis cache using the provided url key query param
			const emailRes = await fetch(`/api/get-email-address`, {
				method: "POST",
				body: JSON.stringify({ key: emailKey }),
				headers: {
					"Content-Type": "application/json",
				},
				cache: "no-store",
			});

			const resTxt = await emailRes.text();

			if (emailRes.ok) {
				// email successfully fetched

				setEmail(resTxt);
			} else {
				// email not found, because link is expired or key does not exist in cache db

				if (resTxt == "not found") setEmail("not found");
				// an error occured in auth-support while fetching email
				else setEmail("failed");
			}
		} catch (e) {
			setEmail("failed");
			console.log("error while fetching email from cache", e);
			return;
		}
	}
}
