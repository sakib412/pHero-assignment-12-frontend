import { Image } from '@chakra-ui/react'
import React from 'react'

const CTA = () => {
    return (
        <section>
            <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
                <div className="flex justify-center xl:w-1/2">
                    <Image className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full" src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="Download our app" />
                </div>

                <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
                        Download our free mobile app
                    </h2>

                    <p className="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300">
                        You can easily access our all features in one app and many more.
                        Install to explore!
                    </p>

                    <div className="mt-6 sm:-mx-2">
                        <div className="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2">
                            <a href="/#" className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium sm:w-auto">
                                <Image src='/assets/images/playstore.svg' alt='Playstore' />
                            </a>
                        </div>

                        <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0">
                            <a href="/#" className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium">
                                <Image src='/assets/images/appstore.svg' alt='appstore' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA