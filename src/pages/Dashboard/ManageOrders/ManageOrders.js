import React, { useState } from 'react'
import {
    Table, Thead, Tbody, Tr, Th,
    Td, TableCaption, TableContainer, Box, Flex, Button, Avatar, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Select,
} from '@chakra-ui/react'
import Pagination from '../../../components/Pagination/Pagination'
import { useQuery } from 'react-query'
import axiosInstance from '../../../utils/axios'
import useNotification from '../../../utils/useNotification'

const ManageOrders = () => {
    const { success, error } = useNotification()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [activePage, setActivePage] = useState(1)
    const [orderStatus] = useState(['PENDING', 'SHIPPED'])
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

    const onStatusUpdate = async (status, id) => {
        console.log(status, id)

        await axiosInstance.patch(`/order/${id}`, { status }).then(() => {
            success("Order updated!")
            refetch()
        }).catch((err) => {
            error(err.message)
        })
    }


    return (
        <Box as='section'>
            <Box>
                <TableContainer>
                    <Table variant='striped'>
                        <TableCaption fontSize='3xl' placement='top'>Manage Orders - {data?.results?.totalData || 0}</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Payment info</Th>
                                <Th>Status</Th>
                                <Th>Price</Th>
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
                                        {order.invoice ? 'PAID' : 'UNPAID'}
                                    </Td>
                                    <Td>
                                        <Select disabled={!order.invoice}
                                            onChange={(event) => { onStatusUpdate(event.target.value, order._id) }}>
                                            {orderStatus.map(status => (
                                                <option key={status} selected={status === order.status} value={status}>
                                                    {status}
                                                </option>

                                            ))}


                                        </Select>
                                    </Td>
                                    <Td>{order?.price}</Td>
                                    <Td>
                                        <Button disabled={order.invoice} onClick={() => { onDeleteOrder(order._id) }} colorScheme='red' >Cancel</Button>
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
                        <Button onClick={deleteOrder} colorScheme='red'>Delete</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </Box >
    )
}

export default ManageOrders