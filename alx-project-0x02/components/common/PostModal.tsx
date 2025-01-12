
import React, { useState } from 'react';

   const PostModal = ({ onSubmit }) => {
     const [title, setTitle] = useState('');
     const [content, setContent] = useState('');

     const handleSubmit = () => {
       onSubmit({ title, content });
     };

     return (
       <div>
         <input
           type="text"
           value={title}
           onChange={(e) => setTitle(e.target.value)}
           placeholder="Title"
         />
         <textarea
           value={content}
           onChange={(e) => setContent(e.target.value)}
           placeholder="Content"
         />
         <button onClick={handleSubmit}>Submit</button>
       </div>
     );
   };

   export default PostModal;

