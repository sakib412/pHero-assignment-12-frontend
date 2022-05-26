import React, { useState } from 'react'
import {
    Table, Thead, Tbody, Tr, Th,
    Td, TableCaption, TableContainer, Box, Flex, Button, Avatar, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Text,
} from '@chakra-ui/react'
import Pagination from '../../../components/Pagination/Pagination'
import { useQuery } from 'react-query'
import axiosInstance from '../../../utils/axios'
import useNotification from '../../../utils/useNotification'
import { Link } from 'react-router-dom'

const MyOrders = () => {
    const { success, error } = useNotification()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [activePage, setActivePage] = useState(1)
    const { isLoading, data, refetch } = useQuery([activePage],
        () => axiosInstance.get(`/order?page=${activePage}`).then((data) => data.data))
    const [deleteID, setDeleteID] = useState('')

    const onDeleteOrder = (id) => {
        setDeleteID(id)
        onOpen()
    }

    const deleteOrder = () => {
        axiosInstance.delete(`/order/${deleteID}`).then(({ data }) => {
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
                        <TableCaption fontSize='3xl' placement='top'>My Orders - {data?.results?.totalData || 0}</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Status</Th>
                                <Th>Price</Th>
                                <Th>Payment info</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {!isLoading && data && data?.results?.data?.map((order) => (
                                <Tr key={order._id}>
                                    <Td>
                                        <Flex alignItems='center'>
                                            <Avatar src={order?.product?.image} className='mr-3' alt={order?.product?.name} />
                                            {order?.product?.name}
                                        </Flex>
                                    </Td>
                                    <Td>
                                        {order?.status}
                                    </Td>
                                    <Td>{order?.price}</Td>
                                    <Td>
                                        {order.invoice ? 'PAID' : 'UNPAID'}
                                    </Td>

                                    <Td>
                                        <Flex>
                                            {!order.invoice ? (
                                                <>
                                                    <Button onClick={() => { onDeleteOrder(order._id) }} colorScheme='red' className='mr-3'>Cancel</Button>
                                                    <Button as={Link} to={`/payment/${order?._id}`} colorScheme='blue'>Pay</Button>
                                                </>
                                            ) : (
                                                <Text>TrxID: {JSON.parse(order.invoice)?.id}</Text>
                                            )}

                                        </Flex>
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
                        You want to cancel this order?
                    </ModalBody>

                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>
                            No
                        </Button>
                        <Button onClick={deleteOrder} color='gray.50' colorScheme='red'>Yes</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </Box >
    )
}

export default MyOrders