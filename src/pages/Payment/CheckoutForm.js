import { Box, Button } from '@chakra-ui/react';
import {
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axios';
import useNotification from '../../utils/useNotification';

const CheckoutForm = ({ order, refetch }) => {
    const { error: errorMessage, success } = useNotification()
    const [loading, setLoading] = useState(false)
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('')
    const { price, customer, _id } = order

    useEffect(() => {
        axiosInstance.post('/payment/create-intent', {
            price
        }).then(({ data }) => {
            setClientSecret(data.results?.clientSecret)
        })

    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            errorMessage(error?.message)
            console.log(error)
        } else {
            console.log(paymentMethod)
        }

        // Confirm card payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: customer?.name,
                        email: customer.email,
                        phone: customer.phone,
                    },
                },
            },
        );
        if (confirmError) {
            errorMessage(confirmError?.message)
        } else {
            console.log(paymentIntent)
            await axiosInstance.patch(`/order/${_id}`, { invoice: JSON.stringify(paymentIntent) }).then(() => {
                success("Your payment is successfull!")
            })
        }
        refetch()
        setLoading(false)
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box border='1px' borderRadius='md'>
                <CardElement className='p-5' />
            </Box>
            <Box className='flex justify-end mt-5'>
                <Button isLoading={loading} colorScheme='messenger' className='mx-auto' size='lg' type="submit" disabled={!stripe || !elements || !clientSecret}>
                    Pay
                </Button>
            </Box>
        </form>
    );
};


export default CheckoutForm