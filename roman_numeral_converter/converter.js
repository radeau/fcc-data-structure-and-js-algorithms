function convertToRoman(num) {
  // Initialize an empty string to store the final Roman numeral
  let roman = '';

  // Object to map Arabic numeral values to Roman numerals
  const romanNumeralMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  // Loop through each key in the romanNumeralMap object
  for (const key in romanNumeralMap) {
    // While the number being converted is greater than or equal to the value of the current key
    while (num >= romanNumeralMap[key]) {
      // Add the corresponding Roman numeral to the final string
      roman += key;
      // Subtract the value of the current key from the number being converted
      num -= romanNumeralMap[key];
    }
  }

  // Return the final Roman numeral string
  return roman;
}

console.log(convertToRoman(36));
