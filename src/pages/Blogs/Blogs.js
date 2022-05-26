import { Box, Stack, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const Blogs = () => {
    return (
        <div className="py-16">
            <Box color={useColorModeValue('gray.800')} className="container mx-auto px-6 md:px-12 xl:px-6">
                <div className="mb-12 space-y-2 text-center">
                    <h2 className="text-2xl font-bold md:text-4xl">Blogs</h2>
                </div>

                <Stack spacing={5}>
                    <div className="px-5 rounded group shadow-sm border w-full">
                        <div className="py-2">
                            <div className="space-y-2">
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-semibold">How does prototypical inheritance work?</h4>
                                    <p className="">Every object has an internal and hidden property called [[Prototype]] that is present in all of its methods and properties.
                                        <br />
                                        Prototypal Inheritance is a javascript feature that allows you to add methods and properties to objects. It's an object for an object to take on the characteristics and methods of another. We use Object.getPrototypeOf and Object.setPrototypeOf to get and set the [[Prototype]] of an object, respectively. It is now set using __proto__ in current programming languages.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-5 rounded group shadow-sm border">
                        <div className="py-2">
                            <div className="space-y-2">
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-semibold">What are the different ways to manage a state in a React application?</h4>
                                    <p className="">
                                        React state can be some types: <br />
                                        Local state , Global State.
                                        We can manage local state by using useState
                                        Ohterwise there is call contextAPI, with that we can handle state globally in our app and access within the context wrapper.
                                        <br />
                                        There is another option is using third party state management tool like redux , Mobx etc.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 rounded group shadow-sm border">
                        <div className="py-2">
                            <div className="space-y-2">
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-semibold">How will you improve the performance of a React Application?</h4>
                                    <div>
                                        <ul>
                                            <li>When it's necessary, keep component state local.</li>
                                            <li>React components should be remembered to avoid unwanted re-renders.</li>
                                            <li>Code-splitting in React using dynamic&nbsp;<code>import()</code></li>
                                            <li>Windowing or list virtualization in React</li>
                                            <li>Lazy loading images in React</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-5 rounded group shadow-sm border">
                        <div className="py-2">
                            <div className="space-y-2">
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-semibold"> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h4>
                                    <p>
                                        In react state is immutable, So we cannot update or replace them directly . Also react internally update state by setState function and know where to change in DOM.  If we forcely update state in directly we can fall into unknown bug and react doesn't understand what to do. So keep thing what react way. :)

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-5 rounded group shadow-sm border">
                        <div className="py-2">
                            <div className="space-y-2">
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-semibold">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h4>
                                    <p>
                                        We can easily do that with filter method in array.
                                        So let's say our code looks like this
                                        <code>
                                            let products = {"[{name: `something`, price:23,... }, {name: `another`, price:23,... }]"}

                                            products.filter((product)={'>'} product.name.toLowerCase().includes('search string'))


                                        </code>
                                        with that we can find our answer

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Stack>
            </Box>
        </div>
    )
}

export default Blogs