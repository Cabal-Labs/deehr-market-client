import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
	return <div className="rounded-lg border-4">{children}</div>;
}
