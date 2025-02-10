
type Callback = (n: number, index: number) => number

function map(arr: number[], callback:Callback ): number[]{

  const newArr: number[] = []
  arr.forEach((n, index) => newArr.push(callback(n, index)))
  return newArr;
}

export {map}
