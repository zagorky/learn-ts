function filterAnagrams(word: string, array: string[]): string[] {
  const isAnagram = (word1: string, word2: string): boolean => {
    const sortedWord1: string = word1.split('').sort().join('');
    const sortedWord2: string = word2.split('').sort().join('');
    return sortedWord1 === sortedWord2;
  };
  return array.filter((arrWord: string): boolean => isAnagram(arrWord, word));
}

console.log(
  filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']),
);
