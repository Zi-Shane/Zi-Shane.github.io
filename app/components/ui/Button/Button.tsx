'use client';

import './button.css';
import { useEffect, useState } from 'react';
import { mailAddress } from '@/data';
import useClicked from './useClicked';

const Button = ({
  content,
  canCopy = false,
  clickedMessage = '',
  icon,
  iconClicked,
  ...props
}: {
  content: string;
  canCopy?: boolean;
  clickedMessage?: string;
  icon?: JSX.Element;
  iconClicked?: JSX.Element;
}) => {
  const [isClick, handleClick] = useClicked();

  return (
    <div
      className="btnAnimate"
      onClick={canCopy ? handleClick : undefined}
      {...props}
    >
      <button id="btn" className="flex justify-center items-center">
        {isClick ? clickedMessage : content}
        <span className="inline ml-2">{isClick ? iconClicked : icon}</span>
      </button>
    </div>
  );
};

export default Button;
