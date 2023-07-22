// app/providers.tsx
"use client";
import { BiconomyProvider } from "@/providers/biconomyProvider";
import { Provider as ContextProvider } from "@/providers/provider";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<CacheProvider>
			<ChakraProvider>
				<BiconomyProvider>
					<ContextProvider>{children}</ContextProvider>
				</BiconomyProvider>
			</ChakraProvider>
		</CacheProvider>
	);
}
