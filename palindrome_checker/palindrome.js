function palindrome(str) {
  // convert the string to lowercase and remove non-alphanumeric characters and underscores
  let newStr = str.toLowerCase().replace(/\W/g, "").replace(/_/g, "");
  
  // initialize a variable `j` to hold the last index of the new string
  let j = newStr.length-1;
  
  // find the middle of the new string
  let x = Math.floor(newStr.length/2);
  
  // loop through the first half of the new string
  for (let i = 0; i < x; i++) {
    // compare the current character to the corresponding character from the end of the string
    if (newStr[i] !== newStr[j--]){
      // if they are not equal, return false
      return false;
    } 
  }
  // if all the characters in the first half of the string match the corresponding characters in the second half, return true
  return true;
}

// test the function with a sample input
console.log(palindrome("eye") === true);
console.log(palindrome("hello") === false);
console.log(palindrome("A man, a plan, a canal, Panama!") === true);
console.log(palindrome("") === true);
console.log(palindrome("a") === true);
console.log(palindrome("!@#$%^&*") === true);
console.log(palindrome("      ") === true);