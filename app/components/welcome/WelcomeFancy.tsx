'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import CanvasLoader from './CanvasLoader';
import Earth from './Earth';
import WelcomeFancyRotation from './WelcomeFancyRotation';
import WelcomeFancyMove from './WelcomeFancyMove';

const WelcomeFancy = () => {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        <WelcomeFancyRotation>
          <Earth position={[0.3, -2.6, 0]} scale={2.5} />
        </WelcomeFancyRotation>

        <directionalLight intensity={3} position={[5, 2, 30]} />
      </Suspense>
    </Canvas>
  );
};

export default WelcomeFancy;
