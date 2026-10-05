/**
 * Shows a message to the visitor. Uses a native alert, matching the original
 * prototype; swap this single function for a toast component later.
 */
export function notify(message) {
  window.alert(message);
}
