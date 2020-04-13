export function isLoggedIn() {
  return new Promise(resolve => setTimeout(() => resolve(true), 1000));
}
