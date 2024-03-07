export function throttle(funcion: Function, delay: number) {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: any[]) => {
    if (timeout !== null) {
      funcion(...args);

      timeout = setTimeout(() => {
        timeout = null;
      }, delay);
    }
  };
}
