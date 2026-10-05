import { useState } from 'react';
import { notify } from '../utils/notify';

const DEFAULT_ERROR_MESSAGE = 'Sorry, something went wrong. Please try again in a moment.';

/**
 * Wraps an async action (usually a service call) with a pending flag and
 * success / error messages for the visitor.
 */
export function useSubmitAction(action, { successMessage, errorMessage = DEFAULT_ERROR_MESSAGE, onSuccess } = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submit(...args) {
    setIsSubmitting(true);
    try {
      const result = await action(...args);
      if (successMessage) notify(successMessage);
      onSuccess?.(result);
    } catch (error) {
      console.error(error);
      notify(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  }

  return { submit, isSubmitting };
}
