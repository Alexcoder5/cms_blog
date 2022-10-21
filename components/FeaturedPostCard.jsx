import React from 'react';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (
    <div className="relative lg:h-56 md:h-44 h-40">
        <div className="absolute bg-center bg-no-repeat bg-cover shadow-md inline-block w-full lg:h-56 md:h-44 h-40" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
        <div className="absolute bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full lg:h-56 md:h-44 h-40" />
        <div className="flex flex-col p-4 items-center justify-center absolute w-full h-full">

            <p className="text-white text-shadow font-semibold text-2xl text-center">{post.title}</p>

        </div>
        <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
    </div>
);

export default FeaturedPostCard;