import React, { useState } from 'react';
import PostModal from '../components/common/PostModal';

interface Post {
  title: string;
  content: string;
}

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleSavePost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mt-10">Home Page</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Create Post
      </button>
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSavePost}
      />
      <div className="mt-10">
        {posts.map((post, index) => (
          <div key={index} className="border p-4 rounded shadow-md mb-4">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
