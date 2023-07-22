import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

export default function MainCTA({
	title,
	description,
	buttonText,
	buttonFn,
}: {
	title: string;
	description: string;
	buttonText: string;
	buttonFn: () => any;
}) {
	const bgImageUrl = "/CTA_bg_img.png";

	return (
		<Box
			p={5}
			className="bg-cover bg-center p-5 flex flex-wrap justify-between items-start gap-4 rounded-lg"
			backgroundImage={bgImageUrl}
			backgroundSize="cover"
			backgroundPosition="center">
			<Box className="flex flex-col max-w-md pr-6" mb={4}>
				<h2 className=" text-xl mb-4">{title}</h2>
				<Button size="lg" variant="outline" onClick={() => buttonFn()}>
					{buttonText}
				</Button>
			</Box>
			<Text className="text-sm max-w-sm text-gray-400">{description}</Text>
		</Box>
	);
}
