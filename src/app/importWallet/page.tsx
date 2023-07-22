"use client";
import { Button, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function ImportWallet({}: {}) {
	const [privKey, setPrivKey] = useState<string>("");
	function importWallet() {
		if (privKey) {
			console.log(privKey);
		}
	}
	return (
		<div>
			<Input onChange={(e) => setPrivKey(e.target.value)} />
			<Button onClick={() => importWallet()}>Import</Button>
		</div>
	);
}
