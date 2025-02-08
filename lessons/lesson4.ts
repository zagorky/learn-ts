function getEvenNumbers(arr: number[]): number[] {
  return arr.filter((elem) => elem % 2 === 0);
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 56, 7, 8, 9]));
