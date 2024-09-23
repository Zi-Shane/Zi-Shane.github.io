'use client';

import { FaLocationArrow } from 'react-icons/fa6';
import './button.css';
import { useState } from 'react';

const Button = ({
  content,
  canCopy = false,
  copiedMessage = '',
}: {
  content: string;
  canCopy?: boolean;
  copiedMessage?: string;
}) => {
  const [message, setMessage] = useState(content);

  function changeContent() {
    return new Promise(res => {
      setTimeout(() => {
        setMessage(content);
      }, 3000);
    });
  }

  async function handleClick() {
    setMessage(copiedMessage);
    await changeContent();
  }

  return (
    <div
      className="btnWelcome"
      onClick={canCopy ? handleClick : undefined}
    >
      <button id="btn">
        {message}
        <FaLocationArrow className="inline ml-2" />
      </button>
    </div>
  );
};

export default Button;
