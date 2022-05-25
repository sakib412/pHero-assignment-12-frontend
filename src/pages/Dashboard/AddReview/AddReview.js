import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Stack, Textarea, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import axiosInstance from '../../../utils/axios'
import useNotification from '../../../utils/useNotification'

const AddReview = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm()
    const { success } = useNotification()

    const onSubmit = async (values) => {
        axiosInstance.post('/review', values).then(({ data }) => {
            success("Review added!!!")
            reset()
            console.log(data)
        })

    }

    return (
        <Box as='section' p={{ base: '4', lg: '16' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={4}>
                    <FormControl isInvalid={errors?.description}>
                        <FormLabel>Write a review</FormLabel>
                        <Textarea
                            bg={useColorModeValue('white', 'gray.700')}
                            placeholder='Description...'
                            {...register('description', {
                                required: "Please write something"
                            })} />
                        <FormErrorMessage>
                            {errors?.description?.message}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors?.ratings}>
                        <FormLabel>Ratings:</FormLabel>
                        <Input placeholder='Last name'
                            type='number'
                            bg={useColorModeValue('white', 'gray.700')}
                            {...register('ratings', {
                                required: 'Please give your ratings between 1 to 5',
                                type: 'number',
                                min: { value: 0, message: "Rating cannot be less than 0" },
                                max: { value: 5, message: "Rating must be less or equal to 5" },
                            })} />
                        <FormErrorMessage>
                            {errors?.ratings?.message}
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

export default AddReview