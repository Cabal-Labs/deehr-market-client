import { useMemo, useRef, useState, useEffect } from "react";
import { BiconomySmartAccount } from "@biconomy/account";
import SocialLogin from "@biconomy/web3-auth";
import { createContext, useContext } from "react";

interface BiconomyContextType {
	sdkRef: SocialLogin | null;
	setSdkRef: (sdkRef: SocialLogin | null) => void;
	smartAccount: BiconomySmartAccount | null;
	setSmartAccount: (account: BiconomySmartAccount | null) => void;
}

const BiconomyData = () => {
	const sdkRef = useRef<SocialLogin | null>(null);
	const [sdkRefState, setSdkRefState] = useState<SocialLogin | null>(null);
	const [smartAccount, setSmartAccount] = useState<BiconomySmartAccount | null>(
		null
	);

	// Sync state with ref
	useEffect(() => {
		setSdkRefState(sdkRef.current);
	}, [sdkRef.current]);

	const provider = useMemo(
		() => ({
			sdkRef: sdkRefState,
			smartAccount,
			setSmartAccount,
		}),
		[sdkRefState, smartAccount, setSmartAccount]
	);

	return provider;
};

// Create the context
export const BiconomyContext = createContext<BiconomyContextType>({
	sdkRef: null,
	setSdkRef: () => {},
	smartAccount: null,
	setSmartAccount: (account: BiconomySmartAccount | null) => {},
});

// Create a custom hook for using the context
export const useBiconomy = () => {
	return useContext(BiconomyContext);
};

export const BiconomyProvider = ({ children }: { children: JSX.Element }) => {
	const [sdkRef, setSdkRef] = useState<SocialLogin | null>(null);
	const [smartAccount, setSmartAccount] = useState<BiconomySmartAccount | null>(
		null
	);

	const data = {
		sdkRef,
		setSdkRef,
		smartAccount,
		setSmartAccount,
	};

	return (
		<BiconomyContext.Provider value={data}>{children}</BiconomyContext.Provider>
	);
};
