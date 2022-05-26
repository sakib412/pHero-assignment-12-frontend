import { Text, Button, Image, Flex, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <Flex direction='column' justifyContent="center" alignItems='center' py={20} px='auto'>
            {/* <Heading
                display="inline-block"
                as="h2"
                size="2xl"
                bgGradient="linear(to-r, teal.400, teal.600)"
                backgroundClip="text">
                404
            </Heading> */}
            <Image src='/assets/images/404.png' alt='Not found' className='w-full lg:w-2/4' />
            {/* <Text fontSize="18px" mt={3} mb={2}>
                Page Not Found
            </Text> */}
            <Text align='center' color={useColorModeValue('gray.700', 'gray.200')} fontSize='lg' my={6}>
                The page you're looking for does not seem to exist
            </Text>

            <Button
                colorScheme="teal"
                bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                color="white"
                variant="solid">
                <Link to="/">
                    Go to Home
                </Link>
            </Button>
        </Flex>
    );
}