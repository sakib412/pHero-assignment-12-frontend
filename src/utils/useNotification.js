import { useToast } from "@chakra-ui/react"

const useNotification = () => {
    const toast = useToast()

    const success = (message) => toast({
        title: message,
        position: 'top-right',
        status: 'success',
        isClosable: true
    })
    const error = (message) => toast({
        title: message,
        position: 'top-right',
        status: 'error',
        isClosable: true
    })
    const info = (message) => toast({
        title: message,
        position: 'top-right',
        status: 'info',
        isClosable: true
    })
    const loading = (message) => toast({
        title: message,
        position: 'top-right',
        status: 'loading',
        isClosable: true
    })
    const warning = (message) => toast({
        title: message,
        position: 'top-right',
        status: 'warning',
        isClosable: true
    })

    return {
        error, success, info, loading, warning
    }

}


export default useNotification