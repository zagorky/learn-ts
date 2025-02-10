
type Callback = (n: number, index?: number) => number

function map(arr: number[], callback:Callback ): number[]{
  return arr.map(callback)
}

export {map}
