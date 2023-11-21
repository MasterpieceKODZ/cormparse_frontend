"use client";

import AuthNavBar from "@/components/navbar";

import SignOutBtn from "@/components/signOutBtn";
import { useEffect, useState } from "react";

const Projects = () => {
	const [user, setUser] = useState({});

	useEffect(() => {
		fetch("/api/get-token", {
			cache: "no-store",
		})
			.then((res) => {
				return res.json();
			})
			.then(async (token) => {
				const userDataRes = await fetch("/api/get-user", {
					method: "POST",
					body: JSON.stringify({ email: token.email }),
					headers: {
						"Content-Type": "application/json",
					},
				});

				if (userDataRes.ok) {
					const userData = await userDataRes.json();

					setUser(userData);
				} else {
					setUser({ user: "not found" });
				}
			});
	}, []);

	return (
		<>

			<AuthNavBar />

			<main>
				<div>
					<h1>Projects</h1>
				</div>
				<br />
				<h4>User</h4>
				<p>{`${JSON.stringify(user)}`}</p>
				<br />
				<br />
				<SignOutBtn />
			</main>
		</>
	);
};

export default Projects;
