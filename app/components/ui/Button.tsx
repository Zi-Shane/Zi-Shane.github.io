'use client';

import './button.css';
import { useEffect, useState } from 'react';
import { mailAddress } from '@/data';

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
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;

    if (isClick) {
      timer = setTimeout(() => {
        setIsClick(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isClick]);

  function handleClick() {
    navigator.clipboard.writeText(mailAddress);
    setIsClick(true);
  }

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
