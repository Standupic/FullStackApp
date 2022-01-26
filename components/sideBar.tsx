import NextImage from "next/image";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import NexLink from "next/link";

import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdFavorite,
  MdPlaylistAdd,
} from "react-icons/md";
import { usePlaylist } from "../lib/hooks";

const NavMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/Search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create PlayList",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];

const SideBar = () => {
  const { playList } = usePlaylist();
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {NavMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <NexLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </NexLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider bg="gray.800" />
        <Box marginTop="20px">
          <List spacing={2}>
            {musicMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <NexLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </NexLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box height="66%" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playList.map((playlist) => (
              <ListItem paddingX="20px" key={playlist.id}>
                <LinkBox>
                  <NexLink
                    href={{
                      pathname: "/playlist/[id]",
                      query: { id: playlist.id },
                    }}
                    passHref
                  >
                    <LinkOverlay>{playlist.name}</LinkOverlay>
                  </NexLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
