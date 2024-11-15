'use client';
import Lottie from 'lottie-react';
import animationData from '@/public/animation-plane.json';

function AnimationPlane() {
  return <Lottie className="w-40" animationData={animationData} />;
}

export default AnimationPlane;
