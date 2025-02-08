function repeatStr(str: string, num: number) {
  let result: string = '';
  for (let i = 0; i < num; i += 1) {
    result += str;
  }

  return result;
}

export { repeatStr };
