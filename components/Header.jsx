import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import { getCategories } from '../services'


function Header() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, [])

    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='border-b w-full inline-block border-blue-400 py-8'>
                <div className='md:float-left block'>
                    <Link href='/'>
                        <span className='cursor-pointer fontt-bold text-4xl text-white'>
                            Masia's Blog
                        </span>
                    </Link>
                </div>
                <div className='hidden mg:float-left md:contents'>
                    {categories.map((category, index) => (
                        <Link key={category.slug} href={`/category/${category.slug}`} >
                            <span className='md:float-right mt-2 align-miggle text-white ml-4 font-semibold cursor-pointer'>
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header