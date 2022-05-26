import { Box, Button, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const Contact = () => {
    return (
        <Box className="container mx-auto" bg={useColorModeValue('gray.100', 'gray.700')}>
            <div className="h-96"></div>
            <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12 pb-5">
                <div className="w-full shadow rounded p-8 sm:p-12 -mt-72">
                    <p className="text-3xl font-bold leading-7 text-center">Contact Us</p>
                    <form action="" method="post">
                        <div className="md:flex items-center mt-12">
                            <div className="w-full md:w-1/2 flex flex-col">
                                <label className="font-semibold leading-none">Name</label>
                                <input type="text" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-400 mt-4 border-0 bg-gray-700 rounded" />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="font-semibold leading-none">Phone</label>
                                <input type="email" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-700 rounded" />
                            </div>
                        </div>
                        <div className="md:flex items-center mt-8">
                            <div className="w-full flex flex-col">
                                <label className="font-semibold leading-none">Subject</label>
                                <input type="text" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-700 rounded" />
                            </div>

                        </div>
                        <div>
                            <div className="w-full flex flex-col mt-8">
                                <label className="font-semibold leading-none">Message</label>
                                <textarea type="text" className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-700 border-0 rounded"></textarea>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <Button
                                className='mt-5'
                                size='lg'
                                display={{ base: 'none', md: 'inline-flex' }}
                                fontSize={'sm'}
                                fontWeight={600}
                                color={'white'}
                                bg={'brand.400'}
                                href={'#'}
                                _hover={{
                                    bg: 'brand.300',
                                }}>

                                Send message
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Box>
    )
}

export default Contact