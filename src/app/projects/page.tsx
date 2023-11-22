"use client";

import AuthNavBar from "@/components/navbar";

import SignOutBtn from "@/components/signOutBtn";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";

const Projects = () => {
	const [user, setUser] = useState({});
	const [sessionObj, setSessionObj] = useState({});

	useEffect(() => {
		fetch("/api/get-token", {
			headers: {
						"Content-Type": "application/json",
						"X-Api-Key": "kjsopdshfk46873ndsjk0388kdmdsn8y32y85xnjsd873jd7yt4f",
					},
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
						"X-Api-Key": "kjsopdshfk46873ndsjk0388kdmdsn8y32y85xnjsd873jd7yt4f",
					},
				});

				if (userDataRes.ok) {
					const userData = await userDataRes.json();

					setUser(userData);
				} else {
					setUser({ user: "not found" });
				}
			});

		getSession().then((session: any) => {
			setSessionObj(session);
			console.log("session @ projects...");

			console.log(sessionObj);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<AuthNavBar />

			<main>
				<div>
					<h1>Projects</h1>
				</div>
				<br />
				<h3>Session</h3>
				<p>{JSON.stringify(sessionObj)}</p>
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
