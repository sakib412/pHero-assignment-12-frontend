import React from 'react'

const Portfolio = () => {
    return (
        <div className="container p-3 m-auto page lg:h-letter  lg:mt-6 rounded-2xl"
        >
            <header
                className="inline-flex items-baseline justify-between w-full mb-3 align-top border-b-2"
            >
                <div className="block">
                    <h1 className="mb-0 text-5xl font-bold">
                        Najmus Sakib
                    </h1>
                    <h2
                        className="my-2 text-2xl font-semibold leading-snugish"
                    >
                        Full Stack Web Developer
                    </h2>

                    <h3 className="my-2 font-semibold text-md leading-snugish" >
                        Joypurhat, Rajshahi, Bangladesh
                    </h3>
                </div>
            </header>

            <div
                className="col-gap-16 md:col-count-2 md:h-letter-col-full col-fill-balance"
            >
                <section className="pb-4 mt-4 first:mt-0">
                    <div className="break-inside-avoid">
                        <section className="pb-2 mb-2 border-b-2 break-inside-avoid">
                            <ul className="list-inside pr-7">

                                <li
                                    className="mt-1 leading-normal transition duration-100 ease-in text-md hover"
                                >
                                    <a href="https://github.com/sakib412" className="group">
                                        <span
                                            className="mr-5 text-lg font-semibold leading-snugish"
                                        >
                                            Github:
                                        </span>
                                        sakib412
                                        <span
                                            className="inline-block font-normal text-black transition duration-100 ease-in  group-hover"
                                        >
                                            ↗
                                        </span>
                                    </a>
                                </li>

                                <li
                                    className="mt-1 leading-normal transition duration-100 ease-in text-md hover"
                                >
                                    <a href="mailto:nazmusakib412@gmail.com" className="group">
                                        <span
                                            className="mr-8 text-lg font-semibold leading-snugish"
                                        >
                                            Email:
                                        </span>
                                        nazmusakib412@gmail.com
                                        <span
                                            className="inline-block font-normal transition duration-100 ease-in  group-hover"
                                        >
                                            ↗
                                        </span>
                                    </a>
                                </li>
                                <li
                                    className="mt-1 leading-normal transition duration-100 ease-in text-md hover"
                                >
                                    <a href="tel:+8801781517797">
                                        <span
                                            className="mr-5 text-lg font-semibold leading-snugish"
                                        >
                                            Phone:
                                        </span>
                                        +880 178 151 7797
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </div>
                </section>

                <section className="pb-4 mt-4 border-b-4 first:mt-0">

                    <div className="break-inside-avoid">
                        <h2
                            className="mb-2 text-lg font-bold tracking-widest"
                        >
                            EDUCATION
                        </h2>
                        <section className="pb-4 mt-4 mb-4 border-b-2 break-inside-avoid">
                            <header>
                                <h3
                                    className="flex-grow text-lg font-semibold leading-snugish"
                                >
                                    Shahjalal University of Science and Technology
                                </h3>
                                <p className="leading-normal text-md text-gray-550">
                                    2019 &ndash; 2023 | Bachelor of Science in Oceanography
                                </p>
                            </header>
                        </section>

                        <section className="pb-4 mt-4 mb-4 break-inside-avoid">
                            <header>
                                <h3
                                    className="flex-grow text-lg font-semibold leading-snugish"
                                >
                                    Ta'mirul Millat Kamil Madrasah
                                </h3>
                                <p className="leading-normal text-md text-gray-550">
                                    2016 &ndash; 2028 | Alim in Science
                                </p>
                            </header>

                            <p className="leading-normal text-md">
                                <span className="font-semibold text-md leading-snugish mr-1"
                                >
                                    GPA:
                                </span>
                                5.0
                            </p>
                        </section>
                    </div>
                </section>

                <section className="pb-4 mt-4 border-b-2 first:mt-0">
                    <div className="break-inside-avoid">
                        <h2
                            className="mb-2 text-lg font-bold tracking-widest"
                        >
                            PROJECTS
                        </h2>
                        <section className="pb-4 mb-4 border-b-2 break-inside-avoid">
                            <header>
                                <h3 className="text-lg font-semibold leading-snugish"
                                >
                                    <a
                                        target='_blank'
                                        href="https://alo.institute"
                                        className="group" rel="noreferrer"
                                    >
                                        ALO Institute
                                        <span
                                            className="inline-block mr-3 font-normal transition duration-100 ease-in  group-hover"
                                        >
                                            ↗
                                        </span>
                                    </a>

                                </h3>
                                <p className="leading-normal text-md text-gray-550">
                                    React, Ant Design, Django, Docker, Nginx, Postgress
                                </p>
                            </header>

                        </section>
                        <section className="pb-4 mb-4 border-b-2 break-inside-avoid">
                            <header>
                                <h3
                                    className="text-lg font-semibold leading-snugish"
                                >
                                    <a
                                        href="https://sustecoalumni.com/"
                                        className="group"
                                    >
                                        SUST Economics Alumni Association
                                        <span
                                            className="inline-block mr-3 font-normal transition duration-100 ease-in  group-hover"
                                        >
                                            ↗
                                        </span>
                                    </a>

                                </h3>
                                <p className="leading-normal text-md text-gray-550">
                                    Wordpress (Theme+Plugin development)
                                </p>
                            </header>

                        </section>
                        <section className="pb-4 mb-4 break-inside-avoid">

                            <h3
                                className="text-lg font-semibold leading-snugish"
                            >
                                <a href="https://sakib412.github.io/natours/" className="group">
                                    Natours
                                    <span
                                        className="inline-block mr-3 font-normal transition duration-100 ease-in  group-hover"
                                    >
                                        ↗
                                    </span>
                                </a>

                            </h3>
                            <p className="leading-normal text-md text-gray-550">
                                Pure HTML5, CSS3, SCSS, BEM Method
                            </p>

                        </section>
                    </div>
                </section>

                <section className="pb-4 mt-4 first:mt-0">
                    <div className="break-inside-avoid">
                        <h2 className="mb-2 text-lg font-bold tracking-widest"  >
                            SKILLS
                        </h2>
                        <section className="ml-2 break-inside-avoid">
                            <h3 className="text-lg font-semibold leading-snugish" >
                                Frontend
                            </h3>
                            <p>
                                HTML5, CSS3, SCSS, Bootstrap4, Bootstrap5, TailwindCSS, Antd, Chakra UI, Material UI, React, Redux, RTK, React Query
                            </p>
                        </section>

                        <section className="ml-2 break-inside-avoid">
                            <h3 className="font-semibold text-m leading-snugish"  >
                                Backend
                            </h3>

                            <div className="my-1 last:pb-1">
                                Python, Django, DRF, NodeJS, Express, Flask, AdonisJS
                            </div>
                        </section>
                        <section className="ml-2 break-inside-avoid">
                            <h3 className="font-semibold text-m leading-snugish"  >
                                DevOps
                            </h3>

                            <div className="my-1 last:pb-1">
                                Docker, Docker Compose, Github Actions, Jenkins, Kubernetis
                            </div>
                        </section>
                        <section className="ml-2 break-inside-avoid">
                            <h3 className="font-semibold text-m leading-snugish"  >
                                Database
                            </h3>

                            <div className="my-1 last:pb-1">
                                MySQL, Postgress, MongoDB, Mongoose, Django ORM, Lucid ORM
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Portfolio