import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Product from './Product'

const ProductsList = () => {
    const products = [1, 2, 3, 4, 5]
    return (
        <SimpleGrid minChildWidth='330px' className='container mx-auto'>
            {products.map((product => <Product key={product} product={product} />))}
        </SimpleGrid>
    )
}

export default ProductsList