/** Shown in place of a list when its data failed to load. Renders nothing otherwise. */
export default function LoadErrorMessage({ status, children }) {
  if (status !== 'error') return null;
  return (
    <p role="alert" className="text-xs text-brand-600 text-center py-8">
      {children}
    </p>
  );
}
