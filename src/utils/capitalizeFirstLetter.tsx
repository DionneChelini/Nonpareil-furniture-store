//  function capitalizeFirstLetter(word: string) {
//     const firstLetter = word.charAt(0)
//     const firstLetterCap = firstLetter.toUpperCase()
//     const remainingLetters = word.slice(1)
//     const capitalizedWord = firstLetterCap + remainingLetters
//     return capitalizedWord
// }

export default function capitalizeFirstLetter(word: string) {
    return word
      .toLowerCase()
      .split(' ')
      .map((str) => word.charAt(0).toUpperCase() + str.slice(1))
      .join(' ');
  }