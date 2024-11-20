import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';

interface WelcomeFancyCameraProps {
  children: React.ReactNode;
}

const WelcomeFancyRotation = ({ children }: WelcomeFancyCameraProps) => {
  const groupRefs = useRef<Group>(null);

  useFrame(() => {
    if (groupRefs.current) {
      groupRefs.current.rotation.y += 0.002;
    }
  });

  return <group ref={groupRefs}>{children}</group>;
};

export default WelcomeFancyRotation;
