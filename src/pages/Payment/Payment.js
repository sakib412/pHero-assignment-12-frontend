import { Box } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js';
import Loading from '../../components/Loading/Loading'
import axiosInstance from '../../utils/axios'
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import Success from '../../components/Success/Success';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const { id } = useParams()
    const { data: order, isLoading, refetch } = useQuery([id], () => axiosInstance.get(`/order/${id}`).then(({ data }) => data.results))

    if (isLoading) {
        return <Loading />
    }
    if (order.invoice) {
        return <Success title='Payment Successfull! Thank you' description='Your payment has been recieved!' />
    }

    return (
        <Box className='container mx-auto mb-10'>
            <div className="mt-24 m-auto lg:mt-16 px-5">
                <Box flex={2} className="w-full md:w-1/2  mx-auto">
                    <h2 className="text-center text-2xl font-bold pt-6">Name: {order?.product?.name}</h2>
                    <div className="w-5/6 m-auto">
                        <p className="text-center text-gray-500 pt-5"> You will be pay: ${order?.price}</p>
                    </div>

                    <Box className='p-5'>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm refetch={refetch} order={order} />
                        </Elements>
                    </Box>
                </Box>
            </div>
        </Box>
    )
}

export default Payment