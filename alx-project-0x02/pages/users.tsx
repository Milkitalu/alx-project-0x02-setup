import React, { useEffect, useState } from 'react';
import UserCard from '../components/common/UserCard';
import { UserProps } from '../interfaces';

const Users: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mt-10">Users</h1>
      <div className="mt-10">
        {users.map((user) => (
          <UserCard key={user.userId} {...user} />
        ))}
      </div>
    </div>
  );
};

export default Users;