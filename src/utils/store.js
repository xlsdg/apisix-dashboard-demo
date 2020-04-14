export function isLoggedIn() {
  return new Promise(resolve => setTimeout(() => resolve(false), 1000));
}
