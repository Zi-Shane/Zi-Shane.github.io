import Image from 'next/image';
import React from 'react';

interface TechBlockProps {
  iconList: string[];
}

const TechBlock = ({ iconList }: TechBlockProps) => {
  return (
    <div className="flex">
      {iconList.map((icon, i) => (
        <div
          key={icon}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-400/[.2] bg-gray-300/[.2] lg:h-10 lg:w-10"
        >
          <Image
            height={12}
            width={12}
            src={`/${icon}.svg`}
            alt="icon"
            className="h-4 w-4"
          ></Image>
        </div>
      ))}
    </div>
  );
};

export default TechBlock;
