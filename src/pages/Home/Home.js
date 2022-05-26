import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import Contact from '../../components/Contact/Contact'
import CTA from '../../components/CTA/CTA'
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
            <CTA />
            <Contact />

        </>
    )
}

export default Home