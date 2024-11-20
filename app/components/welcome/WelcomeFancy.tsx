'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import CanvasLoader from './CanvasLoader';
import Earth from './Earth';
import WelcomeFancyRotation from './WelcomeFancyRotation';
import WelcomeFancyMove from './WelcomeFancyMove';

const WelcomeFancy = () => {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        {/* <HackerRoom
          position={[0.3, -1.5, 0]}
          scale={0.07}
          rotation={[0, -Math.PI, 0]}
        />
        <PerspectiveCamera makeDefault position={[0, 5, 30]} />
        <pointLight intensity={500} position={[5, 15, 5]} /> */}
        <WelcomeFancyMove>
          <WelcomeFancyRotation>
            <Earth position={[0.3, -2.6, 0]} scale={2.5} />
          </WelcomeFancyRotation>
        </WelcomeFancyMove>
        <directionalLight intensity={3} position={[5, 2, 30]} />
        {/* <ambientLight intensity={1.5} position={[0, 0, 10]} /> */}
        {/* <OrbitControls enableZoom={false} /> */}
      </Suspense>
    </Canvas>
  );
};

export default WelcomeFancy;
