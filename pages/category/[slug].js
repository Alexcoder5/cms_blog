import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Loader, Pagination } from '../../components';
import Image from 'next/image';
import Context from '../../contexts/Context';

const CategoryPost = ({ posts }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, [])

  const router = useRouter();

  const { currentPage, postsPerPage, searchTerm } = useContext(Context)


  //
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.filter(post => {
    if (searchTerm === "") {
      return post
    }
    if (post.node.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return post
    }
  }).slice(indexOfFirstPost, indexOfLastPost);

  const allPosts = currentPosts.map((post) => (<PostCard post={post.node} key={post.node.title} />))

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      {categories.filter(post => {
        if (post.slug === posts[0].node.categories[0].slug) {
          return post
        }
      }).map((category) => (
        <div className='h-96 w-full mb-10 relative'>
          <div className="absolute bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-full" style={{ backgroundImage: `url('${category.image.url}')` }} />
          <div className="absolute bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-full" />
          <div className="flex flex-col p-4 items-center justify-center absolute w-full h-full">

            <p className="text-white text-shadow font-semibold text-5xl text-center">{category.name}</p>

          </div>
          {/* <Image
            unoptimized
            alt={category.name}
            layout="fill"
            objectFit="cover"
            className=""
            src={category.image.url}
          /> */}
        </div>
      ))}
      <div className="grid grid-cols-12 xl:gap-8 md:gap-4 lg:gap-6 gap-3">
        {allPosts.length === 0 ? <p className='text-3xl col-span-12'>Статьи не найдены</p> : allPosts}
        <div className="col-span-1 lg:col-span-3">
          <div className="relative lg:sticky top-8">
          </div>
        </div>
      </div>
      <Pagination totalPosts={posts.length} />
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}