function palindrome(str) {
  let newStr = str.toLowerCase().replace(/\W/g, "").replace(/_/g, "");
  let j = newStr.length-1;
  let x = Math.floor(newStr.length/2);
  for (let i = 0; i < x; i++) {
    if (newStr[i] === newStr[j--]){
      return true;
    } else {
      return false;
    }
  }
}