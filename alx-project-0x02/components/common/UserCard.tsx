import React from 'react';
import { UserProps } from '../../interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Email: {email}</p>
      <p>Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
    </div>
  );
};

export default UserCard;