import NextImage from 'next/image';
import {Box, List, ListItem, ListIcon, Divider, Center, LinkBox, LinkOverlay} from '@chakra-ui/layout'
import NexLink from 'next/link'

import {
    MdHome,
    MdSearch,
    MdLibraryMusic,
    MdPlaylistPlay,
    MdFavorite, MdMuseum,
} from 'react-icons/md'

const NavMenu = [
    {
        name: 'Home',
        icon: MdHome,
        route: '/'
    },
    {
        name: 'Search',
        icon: MdSearch,
        route: '/Search'
    },
    {
        name: 'Your Library',
        icon: MdLibraryMusic,
        route: '/library'
    }
]

const SideBar = () => {
    return (
        <Box 
            width="100%" 
            height="calc(100vh - 100px)" 
            bg="black" 
            paddingX="5px" 
            color="gray">
            <Box paddingY="20px">
                <Box width="120px" marginBottom="20px" paddingX="20px">
                    <NextImage src="/logo.svg" height={60} width={120} />
                </Box>
                <Box marginBottom={"20px"}>
                    <List spacing={2}>
                        {NavMenu.map(menu => (
                            <ListItem paddingX={"20px"} fontSize={"16px"} key={menu.name}>
                                <LinkBox>
                                    <NexLink href={menu.route} passHref>
                                        <LinkOverlay>
                                            <ListIcon as={menu.icon} color='white' marginRight="20px"/>
                                            {menu.name}
                                        </LinkOverlay>
                                    </NexLink>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </Box>
    )
}

export default SideBar