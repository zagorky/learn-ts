function getField(value: number): null[][] {
  let board: null[][] = []
  for (let i = 0; i < value; i += 1) {
    let row: null[] = new Array(value).fill(null)
    board.push(row)
  }
  return board
}


export {getField}
