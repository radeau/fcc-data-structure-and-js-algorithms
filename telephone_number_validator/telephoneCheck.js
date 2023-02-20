function telephoneCheck(str) {
    // Remove spaces from the string
    str = str.replace(/\s+/g, '');
  
    // Regular expression pattern to match different formats of US phone numbers
    let pattern = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  
    // Test the string against the pattern
    let result = pattern.test(str);
  
    return result;
  }

  
  //Test Cases

  // Test case 1
let input = "555-555-5555";
let expectedOutput = true;
console.assert(telephoneCheck(input) === expectedOutput, `Test case 1 failed: expected ${expectedOutput} but got ${telephoneCheck(input)}`);

// Test case 2
input = "(555)555-5555";
expectedOutput = true;
console.assert(telephoneCheck(input) === expectedOutput, `Test case 2 failed: expected ${expectedOutput} but got ${telephoneCheck(input)}`);

// Test case 3
input = "(555) 555-5555";
expectedOutput = true;
console.assert(telephoneCheck(input) === expectedOutput, `Test case 3 failed: expected ${expectedOutput} but got ${telephoneCheck(input)}`);

// Test case 4
input = "555 555 5555";
expectedOutput = true;
console.assert(telephoneCheck(input) === expectedOutput, `Test case 4 failed: expected ${expectedOutput} but got ${telephoneCheck(input)}`);

// Test case 5
input = "5555555555";
expectedOutput = true;
console.assert(telephoneCheck(input) === expectedOutput, `Test case 5 failed: expected ${expectedOutput} but got ${telephoneCheck(input)}`);

// Test case 6
input = "1 555 555 5555";
expectedOutput = true;
console.assert(telephoneCheck(input) === expectedOutput, `Test case 6 failed: expected ${expectedOutput} but got ${telephoneCheck(input)}`);

// Test case 7
input = "555-555-5555555";
expectedOutput = false;
console.assert(telephoneCheck(input) === expectedOutput, `Test case 7 failed: expected ${expectedOutput} but got ${telephoneCheck(input)}`);

// Test case 8
input = "(555 555-5555";
expectedOutput = false;
console.assert(telephoneCheck(input) === expectedOutput, `Test case 8 failed: expected ${expectedOutput} but got ${telephoneCheck(input)}`);

// Test case 9
input = "";
expectedOutput = false;
console.assert(telephoneCheck(input) === expectedOutput, `Test case 9 failed: expected ${expectedOutput} but got ${telephoneCheck(input)}`);

// Test case 10
input = "abcdefghijklmnopqrstuvwxyz";
expectedOutput = false;
console.assert(telephoneCheck(input) === expectedOutput, `Test case 10 failed: expected ${expectedOutput} but got ${telephoneCheck(input)}`);


/*
The tests are a series of inputs and expected outputs used to verify that a function works as intended. 
In the case of the telephoneCheck function, the tests would be a series of phone number strings, 
and the expected output would be either true or false, indicating whether the input phone number 
string is a valid US phone number or not. By running the tests, we can ensure that the function is 
working correctly and producing the expected results.
*/