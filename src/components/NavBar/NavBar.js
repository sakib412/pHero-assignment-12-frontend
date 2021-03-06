import React from 'react'
import {
    Box, Flex, Text, IconButton, Button, useDisclosure,
    Stack, Collapse, Icon, Link, Popover, PopoverTrigger,
    PopoverContent, useColorModeValue, useBreakpointValue, Avatar, Menu, MenuButton, MenuList, Center, MenuDivider, MenuItem, useColorMode,
} from '@chakra-ui/react';
import { NavLink, Link as RLink, useNavigate } from "react-router-dom"
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth'

import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5"
import { HiOutlineChevronDown } from "react-icons/hi"
import { BsSun, BsMoon } from "react-icons/bs"
import { FiLogOut, FiUser } from 'react-icons/fi';

import DesktopSubNav from './DesktopSubNav';
import auth from '../../utils/firebase.init';
import { ACCESS_TOKEN } from '../../utils/axios';


const NAV_ITEMS = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Dashboard',
        href: '/dashboard',
        user: 'auth'
    },
    {
        label: 'Portfolio',
        href: '/portfolio'
    },
    {
        label: 'Blogs',
        href: '/blogs',
    },
    {
        label: 'Contact Us',
        href: '/contact-us',
    },
];

const NavBar = () => {
    const navigate = useNavigate()
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const [user] = useAuthState(auth)

    const onLogout = () => {
        signOut(auth)
        localStorage.removeItem(ACCESS_TOKEN)
        navigate('/signin')
    }
    return (
        <Box
            bg={useColorModeValue('white', 'gray.800')}
            borderBottom={2}
            borderStyle='solid'
            borderColor={useColorModeValue('gray.200', 'gray.900')}
        >
            <Flex
                className='container mx-auto'
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <IoClose w={3} h={3} /> : <GiHamburgerMenu w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <RLink to="/">
                        <Text textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                            fontFamily={'heading'}
                            fontSize="large"
                            color={useColorModeValue('gray.800', 'white')}>
                            Pretty Parts
                        </Text>
                    </RLink>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav user={user} />
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>

                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <BsMoon /> : <BsSun />}
                    </Button>
                    {user ? (
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={user?.photoURL || 'https://avatars.dicebear.com/api/male/username.svg'}
                                />
                            </MenuButton>

                            <MenuList alignItems={'center'}>
                                <br />
                                <Center>
                                    <Avatar
                                        size={'2xl'}
                                        src={user?.photoURL || 'https://avatars.dicebear.com/api/male/username.svg'}
                                    />
                                </Center>
                                <Center py='2'>
                                    <p>{user?.displayName}</p>
                                </Center>
                                <MenuDivider />
                                <MenuItem as={RLink} to='/dashboard/profile'><FiUser className='mr-1' /> My Profile</MenuItem>
                                <MenuItem onClick={onLogout}><FiLogOut className='mr-1' /> Logout</MenuItem>
                            </MenuList>
                        </Menu>
                    ) : (
                        <>
                            <Button
                                as={RLink}
                                fontSize={'sm'}
                                fontWeight={400}
                                variant={'link'}
                                to='/signin'>
                                Sign In
                            </Button>
                            <Button
                                as={RLink}
                                to="/signup"
                                display={{ base: 'none', md: 'inline-flex' }}
                                fontSize={'sm'}
                                fontWeight={600}
                                color={'white'}
                                bg={'brand.400'}
                                href={'#'}
                                _hover={{
                                    bg: 'brand.300',
                                }}>
                                Sign Up
                            </Button>
                        </>
                    )}
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav user={user} onToggle={onToggle} />
            </Collapse>
        </Box>
    )
}

export default NavBar


const DesktopNav = ({ user }) => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label} display={!user && navItem.user && 'none'}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                as={NavLink}
                                p={2}
                                to={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                            >
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};


const MobileNav = ({ onToggle, user }) => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem user1={user} onToggle={onToggle} key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href, onToggle: onToggle2, user1, user }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle} display={!user1 && user && 'none'}>
            <Flex
                py={2}
                as={RLink}
                onClick={onToggle2}
                to={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={HiOutlineChevronDown}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};
