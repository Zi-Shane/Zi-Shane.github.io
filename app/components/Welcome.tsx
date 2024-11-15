import React from 'react';
import { WelcomeSub, WelcomeTitle } from '@/data';
import AnimationPlane from './ui/Animation/plane';

const Welcome = () => {
  return (
    <div className="card-grad-bg flex flex-col justify-center py-60">
      <div className="flex justify-center items-center">
        <AnimationPlane />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium">
          {WelcomeTitle}
        </h1>
      </div>
      <p className="text-xl font-normal text-gray_gradient text-center">
        {WelcomeSub}
      </p>
    </div>
  );
};

export default Welcome;
