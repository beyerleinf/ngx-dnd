export function callFunction<T>(fn: Function, ...args: any[]): any {
  return fn(args);
}
