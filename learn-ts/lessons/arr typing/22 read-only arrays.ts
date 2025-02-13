function reverse(array: readonly number[]): number[] {
  let copy: number[] = [...array]
  for (let i = 0; i < Math.floor(copy.length / 2); i += 1) {
    const temp: number = copy.length - 1 - i;
    [copy[i], copy[temp]] = [copy[temp], copy[i]]
  }
  return copy
}

export {reverse}
