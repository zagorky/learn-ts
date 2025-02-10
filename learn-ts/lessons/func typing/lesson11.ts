type Predicat = (num: number) => boolean;

function myFilter(array: number[], callback: Predicat): number[] {
  return array.filter(callback);
}

export { myFilter };
