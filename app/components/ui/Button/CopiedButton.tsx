'use client';

import { mailAddress } from '@/data';
import { HTMLAttributes } from 'react';
import Button from './Button';
import useCopy from './useCopy';

interface CopiedButtonProps extends HTMLAttributes<HTMLDivElement> {
  originalChildren: React.ReactNode;
  clickedChildren: React.ReactNode;
}

const CopiedButton = ({
  originalChildren,
  clickedChildren,
  ...props
}: CopiedButtonProps) => {
  const [isClick, handleClick] = useCopy(mailAddress);

  return (
    <Button handleClick={handleClick} {...props}>
      {isClick ? clickedChildren : originalChildren}
    </Button>
  );
};

export default CopiedButton;
