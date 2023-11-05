// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //   let reversedString = "";
  //   for (let index = str.length - 1; index >= 0; index--) {
  //     reversedString += str[index];
  //   }

  //   for (let character of str) {
  //     reversedString = character + reversedString;
  //   }

  //   return reversedString;

  //   const arr = str.split("");
  //   return arr.reverse().join("");

  //   return str.split("").reduce((reversedString, character) => {
  //     return character + reversedString;
  //   }, "");

  //   return str.split("").reduce((rev, char) => char + rev, "");

  return str.split("").reverse().join("");
}

module.exports = reverse;
