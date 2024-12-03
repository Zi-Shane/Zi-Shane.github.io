import React from 'react';
import { WelcomeSub, WelcomeTitle } from '@/data';
import AnimationPlane from '../ui/Animation/plane';
import WelcomeFancy from './WelcomeFancy';

const Welcome = () => {
  return (
    <div className="card-grad-bg py-20 lg:py-28">
      <div className="flex h-full w-full items-center justify-center px-20 md:gap-20">
        <div className="flex items-center">
          <AnimationPlane />
          <div>
            <p className="text-center text-3xl font-medium lg:text-4xl">
              {WelcomeTitle}
            </p>
            <p className="text-gray_gradient text-center text-xl font-normal">
              {WelcomeSub}
            </p>
          </div>
        </div>

        <div className="hidden h-80 md:block">
          <WelcomeFancy />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
