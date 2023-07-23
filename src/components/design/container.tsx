import React from "react";
export default function Container({
	children,
	color,
}: {
	children: React.ReactNode;
	color: string;
}) {
	return (
		<div className={`rounded-3xl border-4 ${color} p-6 w-full bg-gray-950 `}>
			{children}
		</div>
	);
}
