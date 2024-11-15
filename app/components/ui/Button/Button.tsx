'use client';

import { cn } from '@/app/utils/cssUtils';
import './button.css';
import useClicked from './useClicked';

const Button = ({
  content,
  canCopy = false,
  clickedMessage = '',
  icon,
  iconClicked,
  className,
}: {
  content: string;
  canCopy?: boolean;
  clickedMessage?: string;
  icon?: JSX.Element;
  iconClicked?: JSX.Element;
  className?: string;
}) => {
  const [isClick, handleClick] = useClicked();

  return (
    <div
      className={cn('btnAnimate', className)}
      onClick={canCopy ? handleClick : undefined}
    >
      <button id="btn" className="flex justify-center items-center">
        {isClick ? clickedMessage : content}
        <span className="inline ml-2">{isClick ? iconClicked : icon}</span>
      </button>
    </div>
  );
};

export default Button;
