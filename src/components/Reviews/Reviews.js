import { Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import axiosInstance from '../../utils/axios'

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axiosInstance.get('/review').then(({ data }) => {
            setReviews(data.results)
        })
    }, [])

    return (

        <div className="min-w-screen min-h-screen flex items-center justify-center">
            <div className="w-full  border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="text-center max-w-xl mx-auto">
                        <h1 className="text-3xl md:text-5xl font-bold mb-5 text-gray-600">What people are saying.</h1>
                        <div className="text-center mb-10">
                            <span className="inline-block w-1 h-1 rounded-full bg-pink-900 ml-1"></span>
                            <span className="inline-block w-3 h-1 rounded-full bg-pink-900 ml-1"></span>
                            <span className="inline-block w-40 h-1 rounded-full bg-pink-900"></span>
                            <span className="inline-block w-3 h-1 rounded-full bg-pink-900 ml-1"></span>
                            <span className="inline-block w-1 h-1 rounded-full bg-pink-900 ml-1"></span>
                        </div>
                    </div>
                    <div className="-mx-3  md:flex flex-wrap items-start">
                        {reviews.map((review) => (
                            <div className="px-3 md:w-1/3 mx-auto" key={review._id}>
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <Image src={review?.reviewer?.image} alt={review?.reviewer?.name} />
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">
                                                {review?.reviewer?.name}
                                            </h6>
                                            <span className="text-sm">
                                                <ReactStars
                                                    count={review?.ratings}
                                                    size={24}
                                                    color1='gold'
                                                    color2={'red'}
                                                    edit={false} />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                                            {review.description}
                                            <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews