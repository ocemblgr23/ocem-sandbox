import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import * as Prime from '../config/PrimeConfig';

const retrievePosts = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
};

export default function Posts() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery('postsData', retrievePosts);

  if (isLoading)
    return (
      <div className='flex align-items-center justify-content-center py-4 '>
        <Prime.ProgressSpinner />
      </div>
    );

  if (error)
    return (
      <div className='text-center py-4'>
        <p className='m-0'>An error occurred: {error.message}</p>
      </div>
    );

  return (
    <div className='container '>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
