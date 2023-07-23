"use client";

import React from "react";
import ContainerTitle from "../common/containerTitle";
import { Button } from "@chakra-ui/react";

function NewsItem({ item }: { item: any }) {
	return (
		<div className="border border-gray-200 rounded-lg p-4 mb-4">
			<h3 className="font-semibold text-xl mb-2">{item.title}</h3>
			<p className="text-sm text-gray-500 mb-2">
				Researcher: {item.researcher}
			</p>
			<p>{item.description}</p>
		</div>
	);
}

export default function News() {
	const newsItems = [
		{
			title: "Research on AI in Healthcare",
			researcher: "Dr. Jane Doe",
			description:
				"Our research has shown that AI can significantly improve healthcare outcomes...",
		},
		{
			title: "Study on Patient Data Privacy",
			researcher: "Dr. John Smith",
			description:
				"We've found that blockchain technology can greatly enhance the privacy of patient data...",
		},
		// More news items...
	];

	return (
		<div>
			<div className="flex flex-row justify-between items-center mb-4">
				<ContainerTitle title="🗞 DeEHR News" color="bg-pink-300" />
				<Button variant="ghost">See All</Button>
			</div>
			{newsItems.map((item, index) => (
				<NewsItem key={index} item={item} />
			))}
		</div>
	);
}
