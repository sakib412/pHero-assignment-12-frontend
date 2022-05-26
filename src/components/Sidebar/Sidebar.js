import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import {
    IconButton, Box, CloseButton, Flex, Icon, useColorModeValue, Link,
    Drawer, DrawerContent, Text, useDisclosure,
} from '@chakra-ui/react';
import { FiTrendingUp, FiCompass, FiArrowRight, FiUser } from 'react-icons/fi';
import { MdOutlineManageSearch } from 'react-icons/md'
import axiosInstance from '../../utils/axios';
import { IoAdd } from 'react-icons/io5';


const LinkItems = [
    { name: 'My Profile', icon: FiUser, href: '/dashboard/profile' },
    { name: 'My Orders', icon: FiTrendingUp, href: '/dashboard/my-orders', user: 'MEMBER' },
    { name: 'Add A Review', icon: FiCompass, href: '/dashboard/add-review', user: 'MEMBER' },
    { name: 'Add A Product', icon: IoAdd, href: '/dashboard/add-product', user: 'ADMIN' },
    { name: 'Manage All Orders', icon: MdOutlineManageSearch, href: '/dashboard/manage-orders', user: 'ADMIN' },
    { name: 'Manage Products', icon: MdOutlineManageSearch, href: '/dashboard/manage-products', user: 'ADMIN' },
    { name: 'Make Admin', icon: MdOutlineManageSearch, href: '/dashboard/make-admin', user: 'ADMIN' },
];

export default function Sidebar({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')}
            className='container mx-auto'
        >
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} p="4" minH={'70vh'}>
                {children}
            </Box>
        </Box>
    );
}



const SidebarContent = ({ onClose, ...rest }) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        axiosInstance.get('/me').then(({ data }) => {
            setUser(data.results)
        })
    }, [])

    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h='full'
            {...rest}>
            <Flex h={{ base: 20, md: 0 }} alignItems="center" mx="8" justifyContent="space-between">
                <Text display={{ base: 'flex', md: 'none' }} fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Logo
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>

            {LinkItems.map((link) => (
                <NavItem key={link.name} display={link.user && user.role !== link.user && 'none'} onClick={() => { onClose() }} icon={link.icon} href={link.href} >
                    {link.name}
                </NavItem>
            ))}

        </Box>

    );
};


const NavItem = ({ icon, href, children, ...rest }) => {
    return (
        <Link as={NavLink} className='sidebar-item items-center'

            to={href} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                px="4"
                py='2'
                my='2'
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'brand.400',
                    color: 'white',
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};


const MobileNav = ({ onOpen, ...rest }) => {
    return (
        <Flex
            pos='fixed'
            top='40%'
            width='5'
            alignItems="center"
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent="flex-start"
            {...rest}>
            <IconButton
                variant="outline"
                onClick={onOpen}
                bg={useColorModeValue('white', 'gray.700')}
                aria-label="open menu"
                icon={<FiArrowRight />}
            />
        </Flex>
    );
};