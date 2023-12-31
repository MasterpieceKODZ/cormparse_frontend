import CredentialsProvider from "next-auth/providers/credentials";
import crypto from "crypto";

export const NEXT_AUTH_OPTION = {
	providers: [
		CredentialsProvider({
			credentials: {},
			async authorize(credentials, req) {
				try {
					// fetch the user with the provided email address
					const userRes = await fetch(
						`${process.env.AUTH_SUPPORT_URI}/get-user-by-email`,
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({ email: credentials?.email }),
						},
					);

					// if a user with the email address is found
					if (userRes.ok) {
						// extract user data
						const user = await userRes.json();

						// hash the password provided in the sign-in form password input field, with the exact same parameters used to hash the user password during account creation

						const hashPasswordFrmForm = crypto
							.pbkdf2Sync(
								credentials.password,
								user.salt,
								10000,
								1028,
								"sha512",
							)
							.toString("hex");

						// compare the hash of password from the sign-in form to the password hash from the users data
						if (hashPasswordFrmForm === user.passwordHash) {
							return user;
						} else {
							// if passwords do not match return {id: "invalid"} instead of null, because if the authorize function returns null the nextauth signIn function returns an 401 response indicating an error in the authorize function and the signIn callback function is never called,
							console.log("wrong password...");

							return { id: "invalid" };
						}
					} else if (userRes.status == 404) {
						console.log("user not found...");

						return { id: "invalid" };
					}
				} catch (err) {
					console.log("authorize user error");
					console.error(err);

					return null;
				}
			},
		}),
	],
	session: {
		strategy: "jwt",
		maxAge: 15 * 24 * 60 * 60,
	},
	jwt: {
		maxAge: 15 * 24 * 60 * 60,
	},
	pages: {},
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			if (user.id == "invalid") {
				return false;
			} else {
				return true;
			}
		},
	},
};
