import React, { useRef, useEffect } from 'react';

interface ClickOutsideDivProps {
  handler(): void;
  children: React.ReactNode;
}

export const ClickOutsideDiv: React.FC<ClickOutsideDivProps> = ({
  handler,
  children,
}) => {
  const domNode = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const outsideClickHandler = (event: PointerEvent) => {
      if (
        domNode.current &&
        event.target &&
        domNode.current.contains(event.target as Node)
      ) {
        return;
      }
      handler();
    };

    document.addEventListener('pointerdown', outsideClickHandler, {
      capture: true,
    });

    return () => {
      document.removeEventListener('pointerdown', outsideClickHandler, {
        capture: true,
      });
    };
  });

  return <div ref={domNode}>{children}</div>;
};
