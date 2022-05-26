import {
    Flex, Box,
    FormControl, FormLabel, Input,
    Stack, Link, Button,
    Heading, Text, useColorModeValue, FormErrorMessage, InputGroup, InputRightElement, Center, useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { Link as RLink, useNavigate } from "react-router-dom"
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth"
import auth from '../../utils/firebase.init';
import axiosInstance from '../../utils/axios';
import assignJWT from '../../utils/assignJWT';

const SignUp = () => {
    const navigate = useNavigate()
    const toast = useToast()
    const [showPassword, setShowPassword] = useState(false);
    const [showCPassword, setShowCPassword] = useState(false);
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        watch
    } = useForm()
    const [
        signInWithGoogle,
        userFromGoogle,
        loadingFromGoogle,
        errorFromGoogle
    ] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword, user, loading, error
    ] = useCreateUserWithEmailAndPassword(auth, {
        sendEmailVerification: true // after registering, send user confirmation email
    })
    const [updateProfile, updating, updateError] = useUpdateProfile(auth)

    useEffect(() => {
        if (error || updateError || errorFromGoogle) {
            toast({
                title: error?.message || updateError?.message || errorFromGoogle?.message,
                status: "error",
                position: 'top-right',
                isClosable: true,
            })
        }
    }, [error, updateError, errorFromGoogle, toast])

    useEffect(() => {
        if (user?.user?.displayName || userFromGoogle) {
            axiosInstance.post('/signup', {
                name: (user && user?.user?.displayName) || userFromGoogle?.user?.displayName,
                email: (user && user?.user?.email) || userFromGoogle?.user?.email,
                image: (user && user?.user?.photoURL) || userFromGoogle?.user?.photoURL || null,
                method: userFromGoogle?.user?.email ? 'google' : 'form'
            }).then(({ data }) => {
                console.log(data)
                assignJWT(data.results.accessToken)

                toast({
                    title: "Account created!!!",
                    status: 'success',
                    position: 'top-right',
                    isClosable: true
                })
                navigate("/", { replace: true })
            }).catch((err) => {
                console.dir(err)
                toast({
                    title: err?.message || "Something went wrong",
                    position: 'top-right',
                    status: 'error',
                    isClosable: true
                })
            })
        }
    }, [navigate, toast, user, user?.user?.displayName, userFromGoogle])

    const onSubmit = async (values) => {
        await createUserWithEmailAndPassword(values.email, values.password)
        await updateProfile({ displayName: values.name })
    }

    return (
        <Flex
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} mb='5'>Create a new account</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={4}>
                            <FormControl isInvalid={errors.name}>
                                <FormLabel htmlFor='name'>Full name</FormLabel>
                                <Input
                                    id="name"
                                    {...register('name', {
                                        required: "Please input name",
                                    })}
                                />
                                <FormErrorMessage >
                                    {errors?.name?.message}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={errors.email}>
                                <FormLabel htmlFor='email'>Email address</FormLabel>
                                <Input
                                    id="email"
                                    {...register('email', {
                                        required: "Please input your email address",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
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
                            <FormControl id="confirm_password" isInvalid={errors.confirm_password}>
                                <FormLabel>Confirm Password</FormLabel>
                                <InputGroup>
                                    <Input
                                        type={showCPassword ? 'text' : 'password'}
                                        {...register("confirm_password", {
                                            required: "PLease input confirm password",
                                            validate: (val) => {
                                                if (watch('password') !== val) {
                                                    return "Two passwords do no match";
                                                }
                                            }
                                        })}
                                    />
                                    <InputRightElement h={'full'} w='12'>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() =>
                                                setShowCPassword((showCPassword) => !showCPassword)
                                            }>
                                            {showCPassword ? <FaEye size={50} /> : <FaEyeSlash />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <FormErrorMessage>
                                    {errors?.confirm_password?.message}
                                </FormErrorMessage>
                            </FormControl>
                            <Stack spacing={5}>
                                <Button
                                    isLoading={isSubmitting || loading || loadingFromGoogle || updating}
                                    type='submit'
                                    bg={'brand.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'brand.500',
                                    }}>
                                    Sign Up
                                </Button>
                                <Text className='cursor-pointer' align='center'>Already has an account?
                                    <Link as={RLink} color='brand.400' to='/signin'> Signin</Link></Text>
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

export default SignUp