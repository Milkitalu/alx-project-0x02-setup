
import React from 'react';
   import { ButtonProps } from '@/interfaces';

   const Button: React.FC<ButtonProps> = ({ size, shape, children }) => {
     return (
       <button className={`${size} ${shape}`}>
         {children}
       </button>
     );
   };

   export default Button;
