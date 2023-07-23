"use client";
import React from "react";
import ContainerTitle from "../common/containerTitle";
import { Button } from "@chakra-ui/react";

export default function EhrHistory() {
	const history = [
		// Existing entries
		{
			id: 1,
			date: "07-15-2023",
			type: "upload",
			data: {
				recordName: "test1",
				recordUrl: "https://www.google.com",
			},
		},
		{
			id: 2,
			date: "07-18-2023",
			type: "reward",
			data: {
				reward: "$2.05",
				recordName: "test1",
				purpose: "Heart Research",
				rewarder: "NYU Langone Health",
				fileUrl: "https://www.google.com",
			},
		},
		{
			id: 3,
			date: "07-18-2023",
			type: "access",
			data: {
				recordName: "test1",
				recordUrl: "https://www.google.com",
				accessedBy: "NYU Langone Health",
				purpose: "Heart Research",
			},
		},

		// Additional entries
		{
			id: 4,
			date: "07-20-2023",
			type: "upload",
			data: {
				recordName: "test2",
				recordUrl: "https://www.example.com",
			},
		},
		{
			id: 5,
			date: "07-22-2023",
			type: "reward",
			data: {
				reward: "$3.00",
				recordName: "test2",
				purpose: "Diabetes Research",
				rewarder: "Mayo Clinic",
				fileUrl: "https://www.example.com",
			},
		},
		{
			id: 6,
			date: "07-22-2023",
			type: "access",
			data: {
				recordName: "test2",
				recordUrl: "https://www.example.com",
				accessedBy: "Mayo Clinic",
				purpose: "Diabetes Research",
			},
		},
		{
			id: 7,
			date: "07-24-2023",
			type: "upload",
			data: {
				recordName: "test3",
				recordUrl: "https://www.example.org",
			},
		},
		{
			id: 8,
			date: "07-26-2023",
			type: "reward",
			data: {
				reward: "$5.00",
				recordName: "test3",
				purpose: "Cancer Research",
				rewarder: "Stanford Health Care",
				fileUrl: "https://www.example.org",
			},
		},
		{
			id: 9,
			date: "07-26-2023",
			type: "access",
			data: {
				recordName: "test3",
				recordUrl: "https://www.example.org",
			},
		},
	];
	function HistoryItem({ item }: { item: any }) {
		if (item.type === "upload") {
			return (
				<div key={item.id} className="flex flex-row justify-start gap-4">
					<span className="text-3xl">📄</span>
					<div>
						<p className="text-gray-400 text-sm">EHR Uploaded | {item.date}</p>

						<h4 className="text-xl">{item.data.recordName}</h4>
					</div>
				</div>
			);
		} else if (item.type === "reward") {
			return (
				<div key={item.id} className="flex flex-row justify-start gap-4">
					<span className="text-3xl">💰</span>
					<div>
						<p className="text-gray-400 text-sm">
							Reward Received | {item.date}
						</p>
						<h4 className="text-xl">
							{item.data.reward} - {item.data.recordName}
						</h4>
						<h4 className="text-sm">
							From {item.data.rewarder} for {item.data.purpose}
						</h4>
					</div>
				</div>
			);
		} else if (item.type === "access") {
			return (
				<div key={item.id} className="flex flex-row justify-start gap-4">
					<span className="text-3xl">🔎</span>
					<div>
						<p className="text-gray-400 text-sm">EHR Accessed | {item.date}</p>
						<h4 className="text-xl">By {item.data.accessedBy}</h4>
						<h4 className="text-sm">
							For{" "}
							<span className="italic text-gray-400">{item.data.purpose}</span>
						</h4>
					</div>
				</div>
			);
		} else {
			return <div>No match for history type: {item.type}</div>;
		}
	}
	return (
		<div>
			<div className="flex flex-row justify-between items-center mb-8">
				<ContainerTitle title="📄 EHR History" color="bg-blue-500" />
				<Button variant="ghost">See All</Button>
			</div>

			{history.map((item) => {
				return (
					<div className="bg-transparent hover:bg-gray-900 hover:cursor-pointer rounded-md p-2 border border-transparent border-b-gray-800 mb-1">
						<HistoryItem item={item} />
					</div>
				);
			})}
		</div>
	);
}
