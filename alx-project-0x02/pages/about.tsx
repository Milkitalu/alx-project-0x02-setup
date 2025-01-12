
import React from 'react';
import Button from '../components/common/Button';

const About: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mt-10">About Page</h1>
      <div className="flex justify-center mt-10 space-x-4">
        <Button size="small" shape="rounded-sm" onClick={() => alert('Small Button Clicked')}>
          Small Button
        </Button>
        <Button size="medium" shape="rounded-md" onClick={() => alert('Medium Button Clicked')}>
          Medium Button
        </Button>
        <Button size="large" shape="rounded-full" onClick={() => alert('Large Button Clicked')}>
          Large Button
        </Button>
      </div>
    </div>
  );
};

export default About;