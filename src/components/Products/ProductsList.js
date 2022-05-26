import { SimpleGrid } from '@chakra-ui/react'
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
        <SimpleGrid minChildWidth='330px' className='container mx-auto'>
            {products.map((product => <Product key={product._id} product={product} />))}
        </SimpleGrid>
    )
}

export default ProductsList