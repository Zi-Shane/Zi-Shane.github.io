import React from 'react';
import Button from './ui/Button';
import { welcomeBtn } from '@/data';

const Welcome = () => {
  return (
    <div className="pt-28 pb-20">
      <div className="my-10">
        <div className="max-w-[90vw] md:max-w-[60vw] lg:max-w-3xl flex flex-col justify-center items-center">
          <h1 className="text-[40px] md:text-5xl lg:text-6xl font-medium text-center my-4">
            Transforming Concepts into Seamless User Experiences
          </h1>
          <p className="text-xl font-medium text-center my-4">
            Hi! I&apos;m Shane, a Web Developer based in Taiwan.
          </p>
          <a href="#demo" className="pt-10">
            <Button content={welcomeBtn} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
