import React from 'react';
import { WelcomeSub, WelcomeTitle } from '@/data';
import AnimationPlane from './ui/Animation/plane';

const Welcome = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-[90vw] md:max-w-[60vw] lg:max-w-3xl h-[85vh] flex justify-center">
        <div className="min-w-[100vw] flex flex-col justify-center card-grad-bg">
          <div className="flex justify-center">
            <div className="w-40">
              <AnimationPlane />
            </div>
            <h1 className="text-[40px] md:text-5xl lg:text-6xl font-medium my-10">
              {WelcomeTitle}
            </h1>
          </div>
          <p className="text-xl font-normal text-center my-4">
            {WelcomeSub}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
