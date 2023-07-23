import React from "react";

export default function ContainerTitle({
	title,
	color,
}: {
	title: string;
	color: string;
}) {
	return (
		<div className={`py-2 px-4 ${color} bg-opacity-30 w-min rounded-md`}>
			<h2 className="whitespace-nowrap">{title}</h2>
		</div>
	);
}
