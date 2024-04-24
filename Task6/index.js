let str1 = "aabaa";
let str2 = "aabaacaca";
let str3 = "madam";

function isPalindrome(str) {
  let rev = str.split("").reverse().join("");
  if (rev == str) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
