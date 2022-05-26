import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import ProductsList from '../../components/Products/ProductsList'
import Reviews from '../../components/Reviews/Reviews'
import Summary from '../../components/Summary/Summary'

const Home = () => {
    return (
        <>
            <Carousel />
            <ProductsList />
            <Summary />
            <Reviews />

        </>
    )
}

export default Home