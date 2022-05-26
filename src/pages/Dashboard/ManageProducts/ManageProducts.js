import React, { useEffect, useState } from 'react'
import {
    Table, Thead, Tbody, Tr, Th,
    Td, TableCaption, TableContainer, Box, Flex, Button, Avatar
} from '@chakra-ui/react'
import Pagination from '../../../components/Pagination/Pagination'
import { MdDelete } from 'react-icons/md'
import { useQuery } from 'react-query'
import axiosInstance from '../../../utils/axios'

const ManageProducts = () => {
    const [activePage, setActivePage] = useState(1)
    const { isLoading, data, refetch } = useQuery(['demo'], () => axiosInstance.get('/product').then((data) => data.data))
    console.log(data)

    const onDeleteProduct = (id) => {
        console.log(id)
    }


    return (
        <Box as='section'>
            <Box>
                <TableContainer>
                    <Table variant='striped'>
                        <TableCaption fontSize='3xl' placement='top'>Manage Products</TableCaption>
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
                                        <Flex justifyContent='center'>
                                            <Button onClick={() => { onDeleteProduct(product._id) }} colorScheme='red' leftIcon={<MdDelete />}>Delete</Button>
                                        </Flex>
                                    </Td>
                                </Tr>
                            ))}

                        </Tbody>
                    </Table>
                    <Pagination activePage={activePage} pageSize={5} setActivePage={setActivePage} />
                </TableContainer>

            </Box>

        </Box >
    )
}

export default ManageProducts