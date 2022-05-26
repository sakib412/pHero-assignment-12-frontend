import { Flex, Spinner } from '@chakra-ui/react'
import React from 'react'

const Loading = () => {
    return (
        <Flex justify='center' align='center' minH='70vh'>
            Please wait...
            <Spinner size='xl' thickness='5px' emptyColor='gray.200' color='brand.600' />
        </Flex >
    )
}

export default Loading