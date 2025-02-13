function last(value: number | string): unknown {
  if (typeof value === 'number') {
    return Number(value.toString().split('').pop())
  }
  if (typeof value === 'string') {
    return value.length === 0 ? value : value.split('').pop()
  }
}

export {last}
