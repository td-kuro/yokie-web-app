import { useEffect, useState } from 'react';

/**
 * Runs an async loader once on mount and tracks its result.
 * `loadData` must be a stable function (e.g. a service function imported at module level).
 */
export function useAsyncData(loadData, initialData = []) {
  const [state, setState] = useState({ data: initialData, status: 'loading', error: null });

  useEffect(() => {
    let isCancelled = false;

    loadData()
      .then((data) => {
        if (!isCancelled) setState({ data, status: 'success', error: null });
      })
      .catch((error) => {
        console.error(error);
        if (!isCancelled) setState((current) => ({ ...current, status: 'error', error }));
      });

    return () => {
      isCancelled = true;
    };
  }, [loadData]);

  return state;
}
