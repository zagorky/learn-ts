type Point = [number, number, number]

function isTheSamePoint(a: Point, b: Point): boolean {
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) {
      return false
    }
  }
  return true
}

export {isTheSamePoint}
