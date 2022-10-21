import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'
import Image from 'next/image'

function PostWidget({ categories, slug }) {
    const [relatedPosts, setRelatedPosts] = useState([])

    useEffect(() => {
        if (slug) {
            getSimilarPosts(categories, slug)
                .then((result) => setRelatedPosts(result))
        } else {
            getRecentPosts()
                .then((result) => setRelatedPosts(result))
        }

    }, [slug])

    return (
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4 '>
                Related Posts
            </h3>
            {relatedPosts.map((post, index) => (
                <Link href={`/post/${post.slug}`}>
                    <div className='flex items-center w-full mb-4 cursor-pointer' key={post.title}>
                        <div className='w-16 h-16 relative flex-none'>
                            <Image
                                alt={post.title}
                                layout="fill"
                                objectFit="cover"
                                unoptimized
                                className="align-middle"
                                src={post.featuredImage.url}
                            />
                        </div>
                        <div className='flex-grow ml-4'>

                            <p className="text-md font-semibold" key={index}>{post.title}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default PostWidget