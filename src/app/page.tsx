"use client";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();
	return (
		<main className="flex min-h-screen flex-col items-center justify-start p-24">
			<h1 className="text-3xl text-title">DeEHR Market</h1>
			<h3 className="text-xl text-gray-400">Own Your Data</h3>
			<Button onClick={() => router.push("/login")}>Login</Button>
		</main>
	);
}
