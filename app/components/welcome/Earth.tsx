'use client';

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_Planet_0: THREE.Mesh;
  };
  materials: {
    Planet: THREE.MeshStandardMaterial;
  };
};
const Earth = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF('/Earth/scene.gltf') as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_Planet_0.geometry}
        material={materials.Planet}
        position={[-0.045, 1.247, 0.066]}
        rotation={[Math.PI, 0, Math.PI]}
      />
    </group>
  );
};

useGLTF.preload('/Earth/scene.gltf');

export default Earth;
