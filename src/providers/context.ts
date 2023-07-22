import { useMemo, useState } from "react";
export interface Data {
	loggedIn: boolean;
	setLoggedIn: (loggedIn: boolean) => void;
	walletAddress: string;
	setWalletAddress: (walletAddress: string) => void;
	interval: any;
	enableInterval: (interval: any) => void;
}
const AllData = () => {
	const [loggedIn, setLoggedIn] = useState<boolean>(false);
	const [walletAddress, setWalletAddress] = useState<string>("");
	const [interval, enableInterval] = useState<any>(null);
	const provider = useMemo(
		() => ({
			loggedIn,
			setLoggedIn,
			walletAddress,
			setWalletAddress,
			interval,
			enableInterval,
		}),
		[
			loggedIn,
			setLoggedIn,
			walletAddress,
			setWalletAddress,
			interval,
			enableInterval,
		]
	);
	return provider;
};

export default AllData;
