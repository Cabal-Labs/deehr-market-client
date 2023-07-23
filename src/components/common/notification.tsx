import React from "react";

export default function Notification({
	requester,
	purpose,
	data,
	reward,
}: {
	requester: string;
	purpose: string;
	data: string;
	reward: string;
}) {
	return (
		<div>
			<div>{requester} is requesting access to your EHR</div>
		</div>
	);
}
