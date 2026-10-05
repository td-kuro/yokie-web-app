import { useEffect } from 'react';

/** Calls `onEscape` when the Escape key is pressed while `isActive` is true. */
export function useEscapeKey(onEscape, isActive = true) {
  useEffect(() => {
    if (!isActive) return undefined;

    function handleKeyDown(event) {
      if (event.key === 'Escape') onEscape();
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onEscape, isActive]);
}
