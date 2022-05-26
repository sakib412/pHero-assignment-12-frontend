import React, { useState } from 'react'
import {
    Table, Thead, Tbody, Tr, Th,
    Td, TableCaption, TableContainer, Box, Flex, Button, Avatar,
} from '@chakra-ui/react'
import Pagination from '../../../components/Pagination/Pagination'
import { useQuery } from 'react-query'
import axiosInstance from '../../../utils/axios'
import useNotification from '../../../utils/useNotification'

const MakeAdmin = () => {
    const { success, error } = useNotification()
    const [activePage, setActivePage] = useState(1)
    const { isLoading, data, refetch } = useQuery([activePage],
        () => axiosInstance.get(`/users?page=${activePage}`
        ).then((data) => data.data))

    const onUpdateRole = async (id, role) => {
        await axiosInstance.patch(`/user/update-role/${id}`, { role: role === "ADMIN" ? "MEMBER" : "ADMIN" }).then(() => {
            success("Updated")
        }).catch((err) => {
            error(err.message)
        })
        refetch()
    }

    return (
        <Box as='section'>
            <Box>
                <TableContainer>
                    <Table variant='striped'>
                        <TableCaption fontSize='3xl' placement='top'>Users - {data?.results?.totalData || 0}</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {!isLoading && data && data?.results?.data?.map((user) => (
                                <Tr key={user._id}>
                                    <Td>
                                        <Flex alignItems='center'>
                                            <Avatar src={user?.image} className='mr-3' alt={user?.name} />
                                            {user?.name}
                                        </Flex>
                                    </Td>


                                    <Td>{user?.email}</Td>
                                    <Td>
                                        <Button onClick={() => { onUpdateRole(user._id, user?.role) }} colorScheme='blue'>
                                            {user?.role === "ADMIN" ? "Remove Admin" : "Make Admin"}
                                        </Button>
                                    </Td>
                                </Tr>
                            ))}

                        </Tbody>
                    </Table>
                    <Pagination activePage={activePage} pageSize={data?.results?.totalPage || 1} setActivePage={setActivePage} />
                </TableContainer>

            </Box>

        </Box >
    )
}

export default MakeAdmin