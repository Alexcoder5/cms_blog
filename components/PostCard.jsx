import React from 'react'
import Link from 'next/link'
import Image from 'next/image';



function PostCard({ post }) {

    return (
        <div className='relative h-80 col-span-6 xl:col-span-3 md:col-span-4' >
            <div className='relative h-60 w-full'>
                <Image
                    unoptimized
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className=""
                    src={post.featuredImage.url}
                />
            </div>
            <div className="flex flex-col rounded-lg py-2 justify-center w-full">
                <p className="text-md font-medium text-gray-600">{post.categories[0].name}</p>
                <p className=" mb-4 font-medium text-2xl">{post.title}</p>
            </div>
            <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full top-0 left-0" /></Link>
        </div>
    )
}

export default PostCard

{/* <div className='relative h-80 col-span-6 xl:col-span-3 lg:col-span-4' >
            <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-80" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
            <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-80" />
            <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
                <p className="text-white mb-4 text-shadow font-semibold text-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
                <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">{post.title}</p>
                <div className="flex items-center absolute bottom-5 w-full justify-center">
                    <Image
                        unoptimized
                        alt={post.author.name}
                        height="30px"
                        width="30px"
                        className="align-middle drop-shadow-lg rounded-full"
                        src={post.author.photo.url}
                    />
                    <p className="inline align-middle text-white text-shadow ml-2 font-medium">{post.author.name}</p>
                </div>
            </div>
            <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
        </div> */}