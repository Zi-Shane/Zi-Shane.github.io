import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useRef } from 'react';
import { Group } from 'three';

interface WelcomeFancyMoveProps {
  children: React.ReactNode;
}

const WelcomeFancyMove = ({ children }: WelcomeFancyMoveProps) => {
  const groupRef = useRef<Group>(null);
  useFrame((state, delta) => {
    if (groupRef.current) {
      // groupRef.current.position.x = -state.pointer.x / 3;
      // groupRef.current.position.y = -state.pointer.y / 5;
      easing.dampE(
        // @ts-ignore
        groupRef.current.position,
        [-state.pointer.x / 3, -state.pointer.y / 5, 0],
        0.25,
        delta,
      );
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

export default WelcomeFancyMove;
