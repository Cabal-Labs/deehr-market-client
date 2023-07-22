import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";

const WelcomeMessage = () => {
	const userName = "John Doe"; // hard-coded name
	const avatarUrl = "https://example.com/avatar.jpg"; // hard-coded avatar URL

	return (
		<Box p={5}>
			<Flex alignItems="center">
				<Avatar name={userName} src={avatarUrl} />
				<Text ml={4} fontSize="xl">
					Welcome, {userName}!
				</Text>
			</Flex>
			<Flex mt={4}>
				<Button colorScheme="pink" mr={4} variant={"contained"}>
					My Account
				</Button>
				<Button colorScheme="teal" variant="contained">
					My Records
				</Button>
			</Flex>
		</Box>
	);
};

export default WelcomeMessage;
