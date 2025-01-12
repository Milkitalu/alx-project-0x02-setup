import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/home">
          <a className="text-lg font-bold">Home</a>
        </Link>
        <Link href="/about">
          <a className="text-lg font-bold">About</a>
        </Link>
        <Link href="/posts">
          <a className="text-lg font-bold">Posts</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;