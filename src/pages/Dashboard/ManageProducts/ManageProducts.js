import React, { useState } from 'react'
import {
    Table, Thead, Tbody, Tr, Th,
    Td, TableCaption, TableContainer, Box, Flex, Button, Avatar, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure
} from '@chakra-ui/react'
import Pagination from '../../../components/Pagination/Pagination'
import { MdDelete } from 'react-icons/md'
import { useQuery } from 'react-query'
import axiosInstance from '../../../utils/axios'
import useNotification from '../../../utils/useNotification'

const ManageProducts = () => {
    const { success, error } = useNotification()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [activePage, setActivePage] = useState(1)
    const { isLoading, data, refetch } = useQuery([activePage],
        () => axiosInstance.get(`/product?page=${activePage}`).then((data) => data.data))
    const [deleteID, setDeleteID] = useState('')

    const onDeleteProduct = (id) => {
        setDeleteID(id)
        onOpen()
    }

    const deleteProduct = () => {
        axiosInstance.delete(`/product/${deleteID}`).then(({ data }) => {
            success("Successfully deleted!!!")
            refetch()
        }).catch((err) => {
            error(err.message)
        }).finally(() => {
            onClose()
        })
    }


    return (
        <Box as='section'>
            <Box>
                <TableContainer>
                    <Table variant='striped'>
                        <TableCaption fontSize='3xl' placement='top'>Manage Products - {data?.results?.totalData || 0}</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Stock</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {!isLoading && data && data?.results?.data?.map((product) => (
                                <Tr key={product._id}>
                                    <Td>
                                        <Flex alignItems='center'>
                                            <Avatar src={product?.image} alt={product?.name} className='mr-2' />
                                            {product?.name}
                                        </Flex>
                                    </Td>
                                    <Td>{product?.quantity}</Td>
                                    <Td>

                                        <Button onClick={() => { onDeleteProduct(product._id) }} colorScheme='red' leftIcon={<MdDelete />}>Delete</Button>

                                    </Td>
                                </Tr>
                            ))}

                        </Tbody>
                    </Table>
                    <Pagination activePage={activePage} pageSize={data?.results?.totalPage || 1} setActivePage={setActivePage} />
                </TableContainer>

            </Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Are you sure?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        You want to delete this product?
                    </ModalBody>

                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button onClick={deleteProduct} colorScheme='red'>Delete</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </Box >
    )
}

export default ManageProducts