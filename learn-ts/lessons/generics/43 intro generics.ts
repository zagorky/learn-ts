function last <T> (arr: Array<T>): T | null {
  return arr.length > 0 ? arr[arr.length-1] : null
}
