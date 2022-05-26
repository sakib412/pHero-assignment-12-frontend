import { Box, Button, Center, Divider, Flex, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Image, Input, Stack, Text, Textarea, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import axiosInstance from '../../utils/axios'
import auth from '../../utils/firebase.init'

const Purchage = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const { name, image, description, price, minOrderQuantity, quantity } = product
    const [formQuantity, setFormQuantity] = useState(1)
    console.log(formQuantity)
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        watch
    } = useForm()
    React.useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            if (name === 'quantity') {
                setFormQuantity(Number(value.quantity))
            }
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    const [user] = useAuthState(auth)

    useEffect(() => {
        axiosInstance.get(`/product/${id}`).then(({ data }) => {
            setProduct(data.results)
            setFormQuantity(data.results.minOrderQuantity)
        })
    }, [id])

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
                            alt={name}
                            className="lg:w-3/4 w-full mx-auto object-center rounded border border-gray-200"
                            src={image} />
                    </GridItem>
                    <GridItem
                        colSpan={{ base: 7, lg: 4 }}
                        className=" w-full lg:py-6 mt-6 lg:mt-0">
                        <Text
                            as='h1'
                            color={useColorModeValue('gray.900', 'white')}
                            fontSize='3xl'
                            className="title-font font-medium mb-1">
                            {name}
                        </Text>

                        <Text as='p' color={useColorModeValue('gray.700', 'gray.300')} className="leading-relaxed">{description}</Text>
                        <Flex alignItems={{ lg: 'center' }}
                            rowGap={5}
                            className="flex-wrap mt-6">
                            <Flex className='mr-5'>
                                <Text as='span' className="mr-3" >Minimum Order Quantity:</Text>
                                <Text
                                    as='strong'
                                    className='h5'
                                    color={useColorModeValue('brand.600', 'brand.100')}>{minOrderQuantity}</Text>
                            </Flex>
                            <Flex alignItems='center' className="items-center">
                                <Text as='span' className="mr-1">Available Stock:</Text>
                                <Text as='strong' color={useColorModeValue('brand.600', 'brand.100')}>{quantity}</Text>
                            </Flex>
                        </Flex>
                        <Divider className='my-5' />
                        <Flex alignItems='center'>
                            <Text fontSize='lg' className='mr-2'>Price per item: </Text>
                            <Text
                                as='span'
                                className="title-font font-medium text-xl mr-1">$ </Text>
                            <Text
                                as='span'
                                color={useColorModeValue('brand.600', 'brand.100')}
                                className="title-font font-medium text-2xl">{price}</Text>
                        </Flex>
                    </GridItem>
                </Grid>

                <Center>
                    <Box w='full'
                        borderWidth={{ base: 0, lg: '2px' }}
                        mt='3'
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
                                            value={user?.displayName}
                                            id="name"
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel htmlFor='email'>Email</FormLabel>
                                        <Input
                                            bg={useColorModeValue('white', 'gray.700')}
                                            disabled
                                            value={user?.email}
                                            id="email"
                                        />
                                    </FormControl>

                                    <FormControl isInvalid={errors?.quantity}>
                                        <FormLabel htmlFor='quantity'>Quantity</FormLabel>
                                        <Input
                                            bg={useColorModeValue('white', 'gray.700')}
                                            id="quantity"
                                            type='number'
                                            defaultValue={minOrderQuantity}
                                            {...register('quantity', {
                                                type: 'number',
                                                required: "Please input quantity",
                                                min: { value: minOrderQuantity, message: `Minimum order quantity is ${minOrderQuantity}` },
                                                max: { value: quantity, message: `Order quantity cannot be greater than ${quantity}` }
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
                                        <Text fontSize='2xl' mb={{ base: 5, lg: 0 }}>Total Price: $ {formQuantity * price}</Text>
                                        <Button
                                            isLoading={isSubmitting}
                                            className='mr-5'
                                            type='submit'
                                            size='lg'
                                            alignSelf='center'
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