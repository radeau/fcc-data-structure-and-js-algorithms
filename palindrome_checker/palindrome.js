function palindrome(str) {
    let newStr = [];
    let j = str.length - 1;
    let x = Math.floor(str.length/2);
    for (let i = 0; i < x; i++) {
      if (str[i] === str[j--]){
        return true;
      } else {
        return false;
      }
      //j--;
    }
  }
  
  console.log(palindrome("almostomla"))