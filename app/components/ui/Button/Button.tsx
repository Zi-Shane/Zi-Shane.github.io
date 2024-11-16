'use client';

import { cn } from '@/app/utils/cssUtils';
import './button.css';
import { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  handleClick?: () => void;
}
const Button = ({ className, children, handleClick }: ButtonProps) => {
  return (
    <div className={cn('btnAnimate', className)} onClick={handleClick}>
      <button id="btn" className="flex justify-center items-center">
        {children}
      </button>
    </div>
  );
};

export default Button;
