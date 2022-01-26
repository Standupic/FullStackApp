import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { GradientLayout } from "../components/gradientLayout";
import prisma from "../lib/prisma";
import {useMe} from "../lib/hooks";

export default function Home({ artists }) {
  const {user} = useMe()
  return (
    <GradientLayout
      color="red"
      subtitle="profile"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistCount} public playlist`}
      image=""
      roundImage
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="20px">
          <Text>Top artist this month</Text>
          <Text fontSize="md">only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX="10px" width="20%" key={artist.name}>
              <Box bg="gray.900" borderRadius="10px" padding="15px" width="100%">
                <Image
                  src="https://placekitten.com/300/300"
                  borderRadius="100%"
                />
                <Box marginTop="20px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
}
export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});
  return {
    props: { artists },
  };
};
