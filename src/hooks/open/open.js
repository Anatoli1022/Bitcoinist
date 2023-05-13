import { useState } from 'react';

export default function Open(initialState) {
  const [isOpen, setOpenState] = useState(initialState);

  const toggle = () => {
    setOpenState((state) => !state);
  };

  return { isOpen, toggle };
}
