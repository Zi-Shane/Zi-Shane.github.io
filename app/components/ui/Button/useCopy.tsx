import { useEffect, useState } from 'react';

function useCopy(content: string) {
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
    navigator.clipboard.writeText(content);
    setIsClick(true);
  }

  return [isClick, handleClick] as const;
}

export default useCopy;
