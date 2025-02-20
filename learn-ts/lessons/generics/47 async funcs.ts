async function asyncMap<T, U>(
  array: Array<Promise<T>>,
  callback: (elem: T) => U
): Promise<U[]> {
  const results = await Promise.all(array);
  return results.map(callback);
}
