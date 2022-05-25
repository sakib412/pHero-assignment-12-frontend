import {
    Button, FormControl, FormErrorMessage, FormLabel, Input, Modal,
    ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack
} from "@chakra-ui/react"
import { useEffect } from "react"
import { useUpdateProfile } from "react-firebase-hooks/auth"
import { useForm } from "react-hook-form"

import axiosInstance from "../../../utils/axios"
import auth from "../../../utils/firebase.init"
import useNotification from "../../../utils/useNotification"

const ProfileUpdateModal = ({ isOpen, onClose, user, setUser }) => {
    const { success, error } = useNotification()
    const [updateProfile, updating, updateError] = useUpdateProfile(auth)
    const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm()

    const onSubmit = async (values) => {
        await updateProfile({ photoURL: values.image, displayName: values.name })
        axiosInstance.put('/me', values).then(({ data }) => {
            success("Updated")
            setUser(data.results)
            onClose()
        }).catch((err) => {
            error(err.message)
        })
    }

    useEffect(() => {
        if (updateError) {
            error(updateError?.message)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateError])

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            closeOnOverlayClick={false}
            size='xl'
        >
            <ModalOverlay />
            <ModalContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalHeader>Update your Profile</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Stack spacing={4}>
                            <FormControl isInvalid={errors?.name}>
                                <FormLabel>Name</FormLabel>
                                <Input
                                    placeholder='Name'
                                    defaultValue={user.name}
                                    {...register('name', {
                                        required: "Please input your name"
                                    })} />
                                <FormErrorMessage>
                                    {errors?.name?.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors?.image}>
                                <FormLabel>Image Url:</FormLabel>
                                <Input placeholder='Last name'
                                    defaultValue={user.image}
                                    {...register('image')} />
                            </FormControl>

                            <FormControl isInvalid={errors?.linkedInProfile}>
                                <FormLabel>LinkedIn url:</FormLabel>
                                <Input placeholder='LinkedIn Profile Link'
                                    defaultValue={user.linkedInProfile}
                                    {...register('linkedInProfile')} />
                            </FormControl>

                            <FormControl isInvalid={errors?.education}>
                                <FormLabel>Education:</FormLabel>
                                <Input placeholder='Education'
                                    defaultValue={user.education}
                                    {...register('education')} />
                            </FormControl>

                            <FormControl isInvalid={errors?.address}>
                                <FormLabel>Address:</FormLabel>
                                <Input placeholder='Address'
                                    defaultValue={user.address}
                                    {...register('address')} />
                            </FormControl>

                            <FormControl isInvalid={errors?.phone}>
                                <FormLabel>Phone No:</FormLabel>
                                <Input placeholder='Phone '
                                    defaultValue={user.phone}
                                    {...register('phone')} />
                            </FormControl>
                        </Stack>

                    </ModalBody>

                    <ModalFooter>
                        <Button
                            mr={3} onClick={onClose}>Cancel</Button>
                        <Button
                            bg={'brand.400'}
                            color={'white'}
                            _hover={{
                                bg: 'brand.500',
                            }}
                            type='submit'
                            isLoading={isSubmitting || updating}>
                            Save
                        </Button>

                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
}

export default ProfileUpdateModal