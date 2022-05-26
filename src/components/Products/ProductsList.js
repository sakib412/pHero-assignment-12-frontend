import { SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axiosInstance from '../../utils/axios'
import Product from './Product'

const ProductsList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axiosInstance.get('/product?size=6').then(({ data }) => {
            setProducts(data.results.data)
        })
    }, [])
    return (
        <>
            <Text as='h1'
                textAlign={'center'}
                fontSize={'4xl'}
                py={10}
                fontWeight={'bold'}>
                Latest Tools
            </Text>
            <SimpleGrid minChildWidth='330px' className='container mx-auto'>
                {products.map((product => <Product key={product._id} product={product} />))}
            </SimpleGrid>
        </>
    )
}

export default ProductsList