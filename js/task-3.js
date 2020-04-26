const findLongestWord = function (string) {
  const listOfWords = string.split(" ");
  let longestWord = listOfWords[0];
  for (let i = 1; i < listOfWords.length; i += 1) {
    if (listOfWords[i].length > longestWord.length) {
      longestWord = listOfWords[i];
    }
  }
  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
