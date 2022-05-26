import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { BiCheckCircle } from 'react-icons/bi';

export default function Success({ title, description }) {
    return (
        <Box className='container mx-auto'>
            <Flex justifyContent='center' direction='column' alignItems='center' py={10} px={6}>
                <Text color={'green.500'}>
                    <BiCheckCircle size='5rem' />
                </Text>
                <Heading textAlign='center' as="h2" size="lg" mt={6} mb={2}>
                    {title}
                </Heading>
                <Text textAlign='center' fontSize='1.3rem' color={'gray.500'}>
                    {description}
                </Text>
            </Flex>
        </Box>
    );
}