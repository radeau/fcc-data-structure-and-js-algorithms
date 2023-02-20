function rot13(str) {
    // Initialize a string to store the decoded message
    let decoded = '';
  
    // Loop through each character in the input string
    for (let i = 0; i < str.length; i++) {
      // Get the ASCII code of the current character
      let charCode = str.charCodeAt(i);
  
      // If the current character is a letter (A-Z)
      if (charCode >= 65 && charCode <= 90) {
        // Shift the character code by 13 places (ROT13 cipher)
        charCode += 13;
        // If the shifted character code is greater than 90 (Z), wrap it back to 65 (A)
        if (charCode > 90) {
          charCode -= 26;
        }
      }
  
      // Add the decoded character to the final string
      decoded += String.fromCharCode(charCode);
    }
  
    // Return the final decoded string
    return decoded;
  }
  
  console.log(rot13("SERR PBQR PNZC"));

//test cases

  // Test case 1
let input = "SERR PBQR PNZC";
let expectedOutput = "FREE CODE CAMP";
console.assert(rot13(input) === expectedOutput, `Test case 1 failed: expected ${expectedOutput} but got ${rot13(input)}`);

// Test case 2
input = "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT";
expectedOutput = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG";
console.assert(rot13(input) === expectedOutput, `Test case 2 failed: expected ${expectedOutput} but got ${rot13(input)}`);

// Test case 3
input = "LBH QVQ VG!";
expectedOutput = "YOU ARE HERE!";
console.assert(rot13(input) === expectedOutput, `Test case 3 failed: expected ${expectedOutput} but got ${rot13(input)}`);

// Test case 4
input = "";
expectedOutput = "";
console.assert(rot13(input) === expectedOutput, `Test case 4 failed: expected ${expectedOutput} but got ${rot13(input)}`);

// Test case 5
input = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
expectedOutput = "NOPQRSTUVWXYZABCDEFGHIJKLM";
console.assert(rot13(input) === expectedOutput, `Test case 5 failed: expected ${expectedOutput} but got ${rot13(input)}`);

/*
These test cases cover different scenarios, such as:

An input string with only letters and spaces
An input string with uppercase letters and punctuation
An empty input string

*/