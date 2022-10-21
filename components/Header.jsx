import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import { getCategories } from '../services'
import Search from './Search'


function Header({ searchTerm, setSearchTerm }) {
    const [categories, setCategories] = useState([])


    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, [])

    return (
        <div className='container mx-auto px-10 mb-8 sticky top-0 z-50 bg-white'>
            <div className='border-b w-full border-gray-200 py-8 flex justify-between px-4'>
                <div className='md:float-left block flex-1'>
                    <Link href='/'>
                        <span className='cursor-pointer fontt-bold text-4xl text-black'>
                            Masia's blog
                        </span>
                    </Link>
                </div>
                <div className='flex items-center justify-center flex-1'>
                    {categories.map((category, index) => (
                        <Link key={category.slug} href={`/category/${category.slug}`} >
                            <span className=' ml-4 font-semibold cursor-pointer text-lg'>
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
                <div className='flex items-center justify-end flex-1'>
                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
            </div>
        </div>
    )
}

export default Header