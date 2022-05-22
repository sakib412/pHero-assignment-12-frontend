import {
    Flex, Box,
    FormControl, FormLabel, Input,
    Stack, Link, Button,
    Heading, Text, useColorModeValue, FormErrorMessage, InputGroup, InputRightElement, Center,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { Link as RLink } from "react-router-dom"
import { useSignInWithGoogle } from "react-firebase-hooks/auth"
import auth from '../../utils/firebase.init';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()
    const [
        signInWithGoogle,
        // eslint-disable-next-line no-unused-vars
        userFromGoogle,
        // eslint-disable-next-line no-unused-vars
        loadingFromGoogle,
        // eslint-disable-next-line no-unused-vars
        errorFromGoogle
    ] = useSignInWithGoogle(auth);

    function onSubmit(values) {
        console.log(values)
    }

    return (
        <Flex
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool features ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={4}>
                            <FormControl isInvalid={errors.email}>
                                <FormLabel htmlFor='email'>Email address</FormLabel>
                                <Input
                                    id="email"
                                    {...register('email', {
                                        required: "Please input your email address",
                                    })}
                                />
                                <FormErrorMessage >
                                    {errors?.email?.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl id="password" isInvalid={errors.password}>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        {...register('password', {
                                            required: "PLease input your password",
                                            minLength: { value: 6, message: 'Password must be 6 characters or more' }
                                        })}
                                    />
                                    <InputRightElement h={'full'} w='12'>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() =>
                                                setShowPassword((showPassword) => !showPassword)
                                            }>
                                            {showPassword ? <FaEye size={50} /> : <FaEyeSlash />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <FormErrorMessage>
                                    {errors?.password?.message}
                                </FormErrorMessage>
                            </FormControl>
                            <Stack spacing={5}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Text color={'brand.400'} className='cursor-pointer'>Forgot password?</Text>
                                </Stack>
                                <Button
                                    isLoading={isSubmitting}
                                    type='submit'
                                    bg={'brand.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'brand.500',
                                    }}>
                                    Sign in
                                </Button>
                                <Text className='cursor-pointer' align='center'>New to our site?
                                    <Link as={RLink} color='brand.400' to='/signup'> Sign Up</Link></Text>
                            </Stack>
                        </Stack>
                    </form>
                </Box>
                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-400">OR</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>
                <Center >
                    <Stack spacing={5} align={'center'} maxW={'md'} w={'full'}>
                        <Button
                            onClick={() => signInWithGoogle()}
                            bg={useColorModeValue('white', 'gray.700')}
                            w={'full'}
                            variant={'outline'}
                            leftIcon={<FcGoogle />}>
                            <Center>
                                <Text>Sign in with Google</Text>
                            </Center>
                        </Button>

                        <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
                            <Center>
                                <Text>Sign in with Facebook</Text>
                            </Center>
                        </Button>

                    </Stack>
                </Center>

            </Stack>
        </Flex>
    );
}

export default Login