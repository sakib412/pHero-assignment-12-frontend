import { Box, Button, Center, Divider, Flex, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Image, Input, Stack, Text, Textarea, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'

const Purchage = () => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    const onSubmit = (values) => {
        console.log(values)

    }


    return (
        <Box as='section' className="container mx-auto overflow-hidden" bg={useColorModeValue('gray.50', 'gray.800')}>
            <Box className="mb-10 px-5 mt-5 mx-auto">
                <Grid className="mx-auto"
                    width='full'
                    templateColumns='repeat(7,1fr)'
                    gap={3}
                    alignItems='center'
                >
                    <GridItem

                        colSpan={{ base: 7, lg: 3 }}>
                        <Image
                            h='45vh'
                            alt="ecommerce"
                            className="lg:w-3/4 w-full mx-auto object-center rounded border border-gray-200"
                            src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg" />
                    </GridItem>
                    <GridItem
                        colSpan={{ base: 7, lg: 4 }}
                        className=" w-full lg:py-6 mt-6 lg:mt-0">
                        <Text
                            as='h1'
                            color={useColorModeValue('gray.900', 'white')}
                            fontSize='3xl'
                            className="title-font font-medium mb-1">
                            The Catcher in the Rye
                        </Text>

                        <Text as='p' color={useColorModeValue('gray.700', 'gray.300')} className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</Text>
                        <Flex alignItems={{ lg: 'center' }}
                            rowGap={5}
                            className="flex-wrap mt-6">
                            <Flex className='mr-5'>
                                <Text as='span' className="mr-3" >Minimum Order Quantity:</Text>
                                <Text
                                    as='strong'
                                    className='h5'
                                    color={useColorModeValue('brand.600', 'brand.100')}>20</Text>
                            </Flex>
                            <Flex alignItems='center' className="items-center">
                                <Text as='span' className="mr-1">Available Stock:</Text>
                                <Text as='strong' color={useColorModeValue('brand.600', 'brand.100')}>500</Text>
                            </Flex>
                        </Flex>
                        <Divider className='my-5' />
                        <Flex alignItems='center'>
                            <Text fontSize='lg' className='mr-2'>Price per item: </Text>
                            <Text
                                as='span'
                                color={useColorModeValue('brand.600', 'brand.100')}
                                className="title-font font-medium text-2xl mr-1">58.00 </Text>
                            <Text
                                as='span'
                                className="title-font font-medium text-xl"> BDT</Text>
                        </Flex>
                    </GridItem>
                </Grid>

                <Center>
                    <Box w='full'
                        borderWidth={{ base: 0, lg: 'medium' }}
                        borderColor='brand.800'

                        className='rounded'>
                        <Text align='center' py='4' as='h2' fontSize='3xl' color={useColorModeValue('brand.800', 'gray.50')}>Purchage this item</Text>
                        <Box
                            maxWidth={{ base: 'full', lg: '3xl' }}
                            mx='auto'

                            mb='5'
                            className="py-8"
                        >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Stack spacing={4}>
                                    <FormControl>
                                        <FormLabel htmlFor='name'>Full Name</FormLabel>
                                        <Input
                                            bg={useColorModeValue('white', 'gray.700')}
                                            disabled
                                            value={'Najmus Sakib'}
                                            id="name"
                                            {...register('name')}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel htmlFor='email'>Email</FormLabel>
                                        <Input
                                            bg={useColorModeValue('white', 'gray.700')}
                                            disabled
                                            value={'nazmusakib412@gmail.com'}
                                            id="email"
                                            {...register('email')}
                                        />
                                    </FormControl>

                                    <FormControl isInvalid={errors?.quantity}>
                                        <FormLabel htmlFor='quantity'>Quantity</FormLabel>
                                        <Input
                                            bg={useColorModeValue('white', 'gray.700')}
                                            id="quantity"
                                            type='number'
                                            defaultValue={20}
                                            {...register('quantity', {
                                                type: 'number',
                                                required: "Please input quantity",
                                                min: { value: 20, message: `Minimum order quantity is ${20}` },
                                                max: { value: 5000, message: `Order quantity cannot be greater than ${5000}` }
                                            })}
                                        />
                                        <FormErrorMessage >
                                            {errors?.quantity?.message}
                                        </FormErrorMessage>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel htmlFor='address'>
                                            Delivery Address
                                        </FormLabel>
                                        <Input
                                            bg={useColorModeValue('white', 'gray.700')}
                                            placeholder='Address'
                                            {...register('address')}
                                        />
                                        <FormErrorMessage>

                                        </FormErrorMessage>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel htmlFor='phone'>Phone Number</FormLabel>
                                        <Input
                                            bg={useColorModeValue('white', 'gray.700')}
                                            id="phone"
                                            {...register('phone')}
                                        />

                                    </FormControl>

                                    <FormControl>
                                        <FormLabel htmlFor='note'>Delivery Note</FormLabel>
                                        <Textarea
                                            bg={useColorModeValue('white', 'gray.700')}
                                            id="note"
                                            {...register('note')}
                                        />
                                    </FormControl>

                                    <Flex justifyContent='space-between' flexWrap='wrap'>
                                        <Text fontSize='2xl' mb={{ base: 5, lg: 0 }}>Total Price: 2000 BDT</Text>
                                        <Button
                                            isLoading={isSubmitting}
                                            className='mr-5'
                                            type='submit'
                                            size='lg'
                                            alignSelf='center'
                                            // isLoading={isSubmitting || loadingFromGoogle || loading}
                                            bg={'brand.400'}
                                            color={'white'}
                                            _hover={{
                                                bg: 'brand.500',
                                            }}>
                                            Place Order
                                        </Button>
                                    </Flex>
                                </Stack>
                            </form>
                        </Box>
                    </Box>
                </Center>
            </Box>
        </Box>
    )
}

export default Purchage