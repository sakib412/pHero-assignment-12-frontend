import {
    Button, Center, Flex, Heading, Image, Stack,
    Text, useColorModeValue, useDisclosure
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import SocialButton from '../../../components/SocialButton/SocialButton';
import axiosInstance from '../../../utils/axios';
import ProfileUpdateModal from './UpdateProfile';

const Profile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [user, setUser] = useState({})
    useEffect(() => {
        axiosInstance.get('/me').then(({ data }) => {
            setUser(data.results)
        })
    }, [])

    return (
        <Center>
            <ProfileUpdateModal isOpen={isOpen} onClose={onClose} user={user} setUser={setUser} />
            <Stack
                width='full'
                borderWidth="1px"
                borderRadius="lg"
                direction={{ base: 'column', md: 'row' }}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
            >
                <Flex flex={1}>
                    <Image
                        alt={user.name || user.email}
                        objectFit="cover"
                        boxSize="100%"
                        borderRadius="lg"
                        src={user.image || 'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                </Flex>
                <Stack
                    flex={2}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p={1}
                    pt={2}>
                    <Heading fontSize={'2xl'} fontFamily={'body'}>
                        {user.name}
                    </Heading>
                    <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                        {user.email}
                    </Text>
                    <SocialButton label={'LinkedIn'} href={user.linkedInProfile || '#'}>
                        <FaLinkedin />
                    </SocialButton>
                    <Text
                        color={useColorModeValue('gray.700', 'gray.400')}
                        px={3}>
                        Education: {user.education || 'Not specified'}
                    </Text>
                    <Text
                        color={useColorModeValue('gray.700', 'gray.400')}
                        px={3}>
                        Location: {user.address || 'Not specified'}
                    </Text>
                    <Text
                        color={useColorModeValue('gray.700', 'gray.400')}
                        px={3}>
                        Phone Number: {user.phone || 'Not specified'}
                    </Text>


                    <Stack
                        mt={'2rem'}
                        direction={'row'}
                        padding={2}
                        justifyContent={'space-between'}
                        alignItems={'center'}>
                        <Button
                            onClick={onOpen}
                            flex={1}
                            fontSize={'sm'}
                            rounded={'full'}
                            bg={'brand.400'}
                            color={'white'}
                            boxShadow={
                                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                            }
                            _hover={{
                                bg: 'brand.500',
                            }}
                            _focus={{
                                bg: 'brand.500',
                            }}>
                            Edit Profile Info
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Center>
    );
}
export default Profile