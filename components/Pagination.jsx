import React, { useContext } from 'react'
import _ from 'lodash'
import Context from '../contexts/Context'

function Pagination({ totalPosts }) {

    const { currentPage, setCurrentPage, postsPerPage } = useContext(Context)

    const previousPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage !== Math.ceil(totalPosts / postsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="space-x-1 flex items-center justify-center">
            <a onClick={previousPage} className="font-semibold px-4 py-3 border border-gray-300 rounded hover:bg-gray-100" href="#">&laquo;</a>

            {pageNumbers.map((number) => (
                <a
                    onClick={() => paginate(number)}
                    key={number}
                    className={number === currentPage ? "font-semibold cursor-pointer px-4 py-3 border border-blue-500 rounded bg-green-400 text-white" : "font-semibold px-4 py-3 cursor-pointer border border-gray-300 rounded hover:bg-gray-300"}>
                    {number}
                </a>
            ))}

            {/* "font-semibold cursor-pointer px-4 py-3 border border-blue-500 rounded bg-green-400 text-white" */}
            <a onClick={nextPage} className="font-semibold px-4 py-3 border border-gray-300 rounded hover:bg-gray-300" href="#">&raquo;</a>
        </div>
    )
}

export default Pagination