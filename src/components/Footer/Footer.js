import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    useColorModeValue,
    Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import SocialButton from '../SocialButton/SocialButton';


const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};



const Footer = () => {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            borderTop={2}
            className='relative'
            borderStyle='solid'
            borderColor={useColorModeValue('gray.200', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                    <Stack align={'flex-start'}>
                        <ListHeader>Company</ListHeader>
                        <Link to={'/#'}>About Us</Link>
                        <Link to={'/blogs'}>Blog</Link>
                        <Link to={'#'}>Careers</Link>
                        <Link to={'#'}>Contact Us</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>Support</ListHeader>
                        <Link to={'#'}>Help Center</Link>
                        <Link to={'#'}>Safety Center</Link>
                        <Link to={'#'}>Community Guidelines</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>Legal</ListHeader>
                        <Link to={'#'}>Cookies Policy</Link>
                        <Link to={'#'}>Privacy Policy</Link>
                        <Link to={'#'}>Terms of Service</Link>
                        <Link to={'#'}>Law Enforcement</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>Install App</ListHeader>
                        <Image
                            src='/assets/images/playstore.svg'
                            alt='Download from playstore' className='cursor-pointer' />
                        <Image
                            src='/assets/images/appstore.svg'
                            alt='Download from appstore'
                            className='cursor-pointer' />
                    </Stack>
                </SimpleGrid>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ md: 'space-between' }}
                    align={{ md: 'center' }}>
                    <Text>© 2022 Pretty Parts. All rights reserved</Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Twitter'} to={'#'}>
                            <FaTwitter />
                        </SocialButton>
                        <SocialButton label={'YouTube'} to={'#'}>
                            <FaYoutube />
                        </SocialButton>
                        <SocialButton label={'Instagram'} to={'#'}>
                            <FaInstagram />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}

export default Footer