"use client";
import { Settings } from "@styled-icons/ionicons-outline";
import React from "react";
import {
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import { LogoutButton } from "@/services/biconomy/logout";

export default function Header({ title }: { title?: string }) {
	return (
		<div className="flex justify-start align-middle py-6 px-12 fixed l-0 r-0 w-screen">
			<h4>Deehr Market</h4>
			{title ? <h5 className="text-gray-600"> /{title}</h5> : <></>}
			<Menu>
				<MenuButton
					as={IconButton}
					aria-label="Options"
					icon={<Settings size={15} />}
					variant="unstyled"
					className="ml-auto"
				/>
				<MenuList>
					<LogoutButton />
				</MenuList>
			</Menu>
		</div>
	);
}
