"use client";
import React from "react";
import Header from "@/components/common/header";
import AccountWidget from "@/components/user/accountWidget";
import { LandingGradient } from "@/components/design/landingGradient";
import { Flex } from "@chakra-ui/react";
import MainCTA from "@/components/user/mainCTA";
import { useRouter } from "next/navigation";

export default function UserDashboard(params: any) {
	const router = useRouter();
	return (
		<div>
			<Header title={"My Dashboard"} />
			<LandingGradient />
			<Flex className="flex flex-col justify-center items-center gap-40 pt-36 px-10">
				<AccountWidget />
				<MainCTA
					title="Upload Records: Get Rewarded"
					description="Et ad nulla dolor laborum non ea anim reprehenderit mollit cupidatat excepteur. Qui cupidatat velit velit in anim mollit nostrud anim in quis. Deserunt sunt id nisi esse sint culpa tempor sit anim."
					buttonText="Take me there"
					buttonFn={() => router.push("/uploadRecords")}
				/>
				{/* GRID */}
			</Flex>
		</div>
	);
}
