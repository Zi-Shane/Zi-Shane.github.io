import React from 'react';
import { WelcomeSub, WelcomeTitle } from '@/data';
import AnimationPlane from '../ui/Animation/plane';
import WelcomeFancy from './WelcomeFancy';

const Welcome = () => {
  return (
    <div className="card-grad-bg lg:py-28 py-20">
      <div className="h-full w-full px-20 md:gap-20 flex justify-center items-center">
        <div className="flex items-center">
          <AnimationPlane />
          <div>
            <p className="text-3xl lg:text-4xl font-medium text-center">
              {WelcomeTitle}
            </p>
            <p className="text-xl font-normal text-gray_gradient text-center">
              {WelcomeSub}
            </p>
          </div>
        </div>

        <div className="h-80 hidden md:block">
          <WelcomeFancy />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
