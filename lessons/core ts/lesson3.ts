function getHiddenCard(cardNum: string, num: number = 4): string {
  let res: string = '*'.repeat(num);
  res += cardNum.slice(12, 16);
  return res;
}

console.log(getHiddenCard('2034399002125581', 2));

export { getHiddenCard };
