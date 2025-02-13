function lastIndex(str: string, char: string): number | null {
  for (let i = str.length - 1; i >= 0; i -= 1) {
    if (str[i] === char) {
      return i
    }
  }
  return null
}


console.log(lastIndex('jestTest', 'j'))
console.log(lastIndex('jestTest', 't'))
console.log(lastIndex('jestTest', 'e'))
console.log(lastIndex('jestTest', 'p'))


export {lastIndex}
