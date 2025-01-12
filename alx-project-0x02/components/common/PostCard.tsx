
import React from 'react';
import { PostProps } from '@/interfaces';
   
   const PostCard: React.FC<PostProps> = ({ userId, title, content }) => {
     return (
       <div className="border p-4 rounded shadow-md mb-4">
         <h2 className="text-xl font-bold">{title}</h2>
         <p>{content}</p>
         <p className="text-sm text-gray-500">User ID: {userId}</p>
       </div>
     );
   };
   
   export default PostCard;