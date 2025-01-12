
import React, { useEffect, useState } from 'react';
import PostCard from '../components/common/PostCard';
import { PostProps } from '../interfaces';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mt-10">Posts</h1>
      <div className="mt-10">
        {posts.map((post) => (
          <PostCard key={post.userId} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;