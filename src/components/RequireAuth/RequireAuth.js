import { Flex, Spinner } from '@chakra-ui/react'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../../utils/firebase.init'
const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation()
    if (loading) {
        return (
            <Flex justify='center' align='center' minH='70vh'>
                <Spinner size='xl' thickness='5px' emptyColor='gray.200' color='brand.600'>Loading...</Spinner>
            </Flex >
        )
    }
    if (!user) {
        return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
    }
    return children
}

export default RequireAuth