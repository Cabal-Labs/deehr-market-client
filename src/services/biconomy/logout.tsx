import { Context } from "@/providers/provider";
import { MenuItem } from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { useRouter } from "next/navigation";
import SocialLogin from "@biconomy/web3-auth";
import { useBiconomy } from "@/providers/biconomyProvider";

export function LogoutButton() {
	const router = useRouter();

	const { setLoggedIn, setWalletAddress, enableInterval } = useContext(Context);
	const { sdkRef, setSmartAccount } = useBiconomy();

	const logout = async () => {
		console.log("logging out");
		console.log(sdkRef);
		if (!sdkRef) {
			console.error("Web3Modal not initialized.");
			return;
		}
		await sdkRef.logout();
		sdkRef.hideWallet();
		setSmartAccount(null);
		setLoggedIn(false);
		setWalletAddress("");
		enableInterval(false);
		router.push("/");
	};
	return <MenuItem onClick={() => logout()}>Logout</MenuItem>;
}
