import { useCallback, useState } from 'react';

/**
 * Minimal controlled-form state: inputs need a `name` matching a key of `initialValues`.
 * `initialValues` should be a module-level constant so `reset` stays stable.
 */
export function useFormFields(initialValues) {
  const [values, setValues] = useState(initialValues);

  const setValue = useCallback((name, value) => {
    setValues((current) => ({ ...current, [name]: value }));
  }, []);

  const handleChange = useCallback(
    (event) => setValue(event.target.name, event.target.value),
    [setValue],
  );

  const reset = useCallback(() => setValues(initialValues), [initialValues]);

  return { values, setValue, handleChange, reset };
}
