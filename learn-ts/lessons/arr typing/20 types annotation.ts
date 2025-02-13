function unique(array: Array<string | number>): Array<string | number> {
  const set = new Set(array)
  return [...set]
}

export {unique}
