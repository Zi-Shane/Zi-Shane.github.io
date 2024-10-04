import { mailAddress } from '@/data';
import React, { useEffect, useState } from 'react';

function useClicked() {
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

  return [isClick, handleClick] as const;
}

export default useClicked;
