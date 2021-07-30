import { useRef, useEffect } from 'react';

type HTMLRefElement = HTMLDivElement | HTMLHeadingElement | null;

export const useClickOutsideRef = (
  handler: () => void
): React.MutableRefObject<HTMLRefElement> => {
  const domNode = useRef<HTMLRefElement>(null);

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

  return domNode;
};
