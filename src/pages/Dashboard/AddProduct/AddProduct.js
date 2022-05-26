import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Stack, Text, Textarea, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import axiosInstance from '../../../utils/axios'
import useNotification from '../../../utils/useNotification'

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm()
    const { success, error } = useNotification()

    const onSubmit = async (values) => {
        axiosInstance.post('/product', values).then(({ data }) => {
            success("Product added!!!")
            // reset()
        }).catch(err => {
            error(err.message)
        })
    }

    return (
        <Box as='section' px={{ base: '4', lg: '16' }}>
            <Text as='h1' align='center' fontSize='3xl'>Add Product</Text>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={4}>
                    <FormControl isInvalid={errors?.name}>
                        <FormLabel>Name</FormLabel>
                        <Input
                            bg={useColorModeValue('white', 'gray.600')}
                            placeContent='Product name'
                            {...register('name', {
                                required: "Please input product name"
                            })} />
                        <FormErrorMessage>
                            {errors?.name?.message}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors?.image}>
                        <FormLabel>Product Image Url:</FormLabel>
                        <Input
                            bg={useColorModeValue('white', 'gray.600')}
                            placeContent='Product image url'
                            {...register('image', {
                                required: "Please add product image url"
                            })} />
                        <FormErrorMessage>
                            {errors?.image?.message}
                        </FormErrorMessage>
                    </FormControl>


                    <FormControl isInvalid={errors?.description}>
                        <FormLabel>Product description</FormLabel>
                        <Textarea
                            bg={useColorModeValue('white', 'gray.600')}
                            placeholder='Description...'
                            {...register('description')} />
                        <FormErrorMessage>
                            {errors?.description?.message}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors?.price}>
                        <FormLabel>Price :</FormLabel>
                        <Input placeholder='Product price'
                            type='number'
                            bg={useColorModeValue('white', 'gray.600')}
                            {...register('price', {
                                required: 'Please give your product price',
                                type: 'number',
                                min: { value: 1, message: "Rating cannot be less than 1" },
                            })} />
                        <FormErrorMessage>
                            {errors?.price?.message}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors?.quantity}>
                        <FormLabel>Quantity :</FormLabel>
                        <Input placeholder='Product quantity'
                            type='number'
                            bg={useColorModeValue('white', 'gray.600')}
                            {...register('quantity', {
                                required: 'Please give your product quantity',
                                type: 'number',
                                min: { value: 1, message: "Quantity cannot be less than 1" },
                            })} />
                        <FormErrorMessage>
                            {errors?.quantity?.message}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors?.minOrderQuantity}>
                        <FormLabel>Minimum order quantity :</FormLabel>
                        <Input placeholder='Minimum order quantity'
                            type='number'
                            bg={useColorModeValue('white', 'gray.600')}
                            {...register('minOrderQuantity', {
                                required: 'Please give your product minimum order quantity',
                                type: 'number',
                                min: { value: 1, message: "Quantity cannot be less than 1" },
                            })} />
                        <FormErrorMessage>
                            {errors?.minOrderQuantity?.message}
                        </FormErrorMessage>
                    </FormControl>

                    <Box >
                        <Button
                            bg={'brand.400'}
                            color={'white'}
                            _hover={{
                                bg: 'brand.500',
                            }}
                            type='submit'
                            isLoading={isSubmitting}>
                            Add
                        </Button>
                    </Box>
                </Stack>
            </form>
        </Box>
    )
}

export default AddProduct