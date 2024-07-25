const palindromes = function (str) {
  let punctuationLess = str
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s{2,}/g, " ");
  let clean = punctuationLess.concat("");

  let cleanStr = clean
    .split("")
    .filter((spc) => spc !== " ")
    .join("");
  let reversedStr = clean
    .split("")
    .reverse()
    .filter((spc) => spc !== " ")
    .join("");

  let isPalindrome = cleanStr === reversedStr;
  return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
