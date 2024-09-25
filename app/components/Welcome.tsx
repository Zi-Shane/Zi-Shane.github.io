import React from 'react';
import Button from './ui/Button';
import { welcomeBtn } from '@/data';
import { FaLocationArrow } from 'react-icons/fa6';

const Welcome = () => {
  return (
    <div className="w-full flex flex-col items-center pt-20 pb-10">
      <div className="max-w-[90vw] md:max-w-[60vw] lg:max-w-3xl my-20 flex flex-col justify-center items-center">
        <h1 className="text-[40px] md:text-5xl lg:text-6xl font-medium text-center my-10">
          Transforming Concepts into Seamless User Experiences
        </h1>
        <p className="text-xl font-normal text-center my-4">
          Hi! I&apos;m Shane, a Web Developer based in Taiwan.
        </p>
        <a href="#demo" className="pt-10">
          <Button content={welcomeBtn} icon={<FaLocationArrow />} />
        </a>
      </div>
    </div>
  );
};

export default Welcome;
