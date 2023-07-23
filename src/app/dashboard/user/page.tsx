"use client";
import React from "react";
import Header from "@/components/common/header";
import AccountWidget from "@/components/user/accountWidget";
import { LandingGradient } from "@/components/design/landingGradient";
import { Flex } from "@chakra-ui/react";
import MainCTA from "@/components/user/mainCTA";
import { useRouter } from "next/navigation";
import Container from "@/components/design/container";
import EhrHistory from "@/components/user/ehrHistory";
import Earnings from "@/components/user/earnings";
import Notifications from "@/components/user/notifications";
import News from "@/components/user/news";

export default function UserDashboard(params: any) {
	const router = useRouter();
	return (
		<div>
			<Header title={"My Dashboard"} />
			<LandingGradient />
			<Flex className="flex flex-col justify-center items-center gap-20 pt-36 px-10">
				<AccountWidget />
				<MainCTA
					title="Upload Records: Get Rewarded"
					description="Et ad nulla dolor laborum non ea anim reprehenderit mollit cupidatat excepteur. Qui cupidatat velit velit in anim mollit nostrud anim in quis. Deserunt sunt id nisi esse sint culpa tempor sit anim."
					buttonText="Take me there"
					buttonFn={() => router.push("/uploadRecords")}
				/>

				{/* FAUX GRID */}
				<div className="flex flex-col-reverse justify-center items-start md:flex-row gap-4 w-full">
					<div className="flex flex-col gap-4 w-full md:w-1/2">
						<Container color={"border-blue-400"}>
							<EhrHistory />
						</Container>
						<Container color={"border-pink-400"}>
							<News />
						</Container>
					</div>
					<div className="flex flex-col gap-4 w-full md:w-1/2">
						<Container color={"border-green-200"}>
							<Earnings />
						</Container>
						<Container color={"border-yellow-200"}>
							<Notifications />
						</Container>
					</div>
				</div>
			</Flex>
		</div>
	);
}
