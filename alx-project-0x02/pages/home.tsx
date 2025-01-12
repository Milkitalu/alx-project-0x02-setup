
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
   import PostModal from '@/components/common/PostModal';
   import Card from '@/components/common/Card';

   const Home = () => {
    <Header />
     const [posts, setPosts] = useState([]);

     const addPost = (post) => {
       setPosts([...posts, post]);
     };

     return (
       <div>
         <PostModal onSubmit={addPost} />
         {posts.map((post, index) => (
           <Card key={index} title={post.title} content={post.content} />
         ))}
       </div>
     );
   };

   export default Home;
