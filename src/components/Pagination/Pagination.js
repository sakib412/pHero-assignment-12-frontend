import React from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'

const Pagination = ({ pageSize = 10, activePage = 1, setActivePage }) => {
    const onNextPage = () => {
        if (activePage < pageSize) {
            setActivePage((page) => page + 1)
        }
    }

    const onPreviousPage = () => {
        if (activePage > 1) {
            setActivePage((page) => page - 1)
        }
    }

    return (
        <div className="flex flex-col items-center my-12">
            <div className="flex text-gray-700">
                <div

                    onClick={onPreviousPage}
                    className="h-10 w-10 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
                    <BiLeftArrowAlt />
                </div>
                <div className="flex h-10 font-medium rounded-full bg-gray-200">
                    {Array(pageSize).fill(null).map((_, index) => (
                        <div key={index}
                            onClick={() => { setActivePage(index + 1) }}
                            className={`w-10 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full hover:bg-gray-500 hover:text-white ${(index + 1) === activePage && 'bg-gray-600 text-white'}`}>{index + 1}</div>
                    ))}
                    <div className="w-12 h-12 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-gray-600 text-white">{activePage}</div>
                </div>
                <div
                    onClick={onNextPage}
                    className="h-10 w-10 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
                    <BiRightArrowAlt />
                </div>
            </div>
        </div>
    )
}

export default Pagination