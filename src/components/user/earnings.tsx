"use client";
import React, { useEffect, useRef, useState } from "react";
import ContainerTitle from "../common/containerTitle";
import { Button } from "@chakra-ui/react";
import { Chart, ChartType } from "chart.js/auto";
export default function Earnings() {
	const chartRef = useRef<ChartType>(null);
	const chartInstanceRef = useRef<ChartType>(null);

	// This function generates an increasing dataset
	const generateData = () => {
		let data = [];
		let value = 0;

		for (let i = 0; i < 10; i++) {
			value += Math.floor(Math.random() * 10) + 1; // Increase by a random amount (1-10)
			data.push(value);
		}

		return data;
	};

	useEffect(() => {
		if (chartRef.current) {
			// If there's an existing chart instance, destroy it before creating a new one
			if (chartInstanceRef.current) {
				chartInstanceRef.current.destroy();
			}

			chartInstanceRef.current = new Chart(chartRef.current, {
				type: "line",
				data: {
					labels: Array.from({ length: 10 }, (_, i) => i + 1), // Labels are simply 1 to 10
					datasets: [
						{
							label: "$USDC",
							data: generateData(),
							fill: false,
							borderColor: "rgb(75, 192, 192)",
							// lineTension: 0.1,
						},
					],
				},
			});
		}

		// Destroy the chart instance when the component is unmounted
		return () => {
			if (chartInstanceRef.current) {
				chartInstanceRef.current.destroy();
			}
		};
	}, []);
	return (
		<div>
			<div className="flex flex-row justify-between items-center">
				<ContainerTitle title="🤑 Earnings" color="bg-green-300" />
				<Button variant="ghost">Manage Earnings</Button>
			</div>
			<canvas ref={chartRef} />
		</div>
	);
}
