"use client";

import React from "react";
import ContainerTitle from "../common/containerTitle";
import { Button } from "@chakra-ui/react";

function NotificationItem({ item }: { item: any }) {
	return (
		<div className="border border-gray-200 rounded-lg p-4 mb-4">
			<div className="flex justify-between items-center mb-2">
				<p className="text-sm text-gray-500">
					Request from {item.data.requester}
				</p>
				<Button size="sm" colorScheme="blue">
					Learn More
				</Button>
			</div>
			<p className="font-semibold text-lg mb-2">Request for your data</p>
			<p className="mb-2">For: {item.data.purpose}</p>
			<p className="mb-2">Data requested: {item.data.records.join(", ")}</p>
			<p className="mb-4">Reward: {item.data.reward}</p>
			<div className="flex justify-end">
				<Button size="sm" colorScheme="red" className="mr-2">
					Reject
				</Button>
				<Button size="sm" colorScheme="green">
					Accept
				</Button>
			</div>
		</div>
	);
}

export default function Notifications() {
	const notifications = [
		{
			id: 1,
			date: "07-21-2023",
			type: "request",
			data: {
				requester: "NYU Langone Health",
				purpose: "Heart Research",
				reward: "$2.05",
				records: ["Heart Scans"],
			},
		},
		{
			id: 2,
			date: "07-22-2023",
			type: "request",
			data: {
				requester: "Mayo Clinic",
				purpose: "Diabetes Research",
				reward: "$3.00",
				records: ["Glucose Levels"],
			},
		},
		{
			id: 3,
			date: "07-23-2023",
			type: "request",
			data: {
				requester: "Stanford Health Care",
				purpose: "Cancer Research",
				reward: "$5.00",
				records: ["Genome Data"],
			},
		},
		// More notifications...
	];

	return (
		<div>
			<div className="flex flex-row justify-between items-center mb-4">
				<ContainerTitle title="🔔 Notifications" color="bg-yellow-500" />
				<Button variant="ghost">Manage Notifications</Button>
			</div>
			{notifications.map((item, index) => (
				<NotificationItem key={index} item={item} />
			))}
		</div>
	);
}
