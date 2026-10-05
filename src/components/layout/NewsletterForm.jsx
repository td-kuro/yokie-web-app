import { useState } from 'react';
import { useSubmitAction } from '../../hooks/useSubmitAction';
import { subscribeToNewsletter } from '../../services/newsletterService';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const { submit, isSubmitting } = useSubmitAction(subscribeToNewsletter, {
    successMessage: "Thanks for joining! You're on the Yokie Scent list.",
    errorMessage: "Sorry, we couldn't sign you up right now. Please try again.",
    onSuccess: () => setEmail(''),
  });

  function handleSubmit(event) {
    event.preventDefault();
    submit(email);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Your email"
        aria-label="Email address for newsletter"
        className="px-3 py-2 bg-brand-800 text-xs rounded-lg text-white placeholder-brand-400 focus:outline-none w-full"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-4 py-2 bg-brand-500 text-white rounded-lg text-xs hover:bg-brand-400 disabled:opacity-60"
      >
        {isSubmitting ? '…' : 'Join'}
      </button>
    </form>
  );
}
