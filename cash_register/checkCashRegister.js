function checkCashRegister(price, cash, cid) {
    let changeDue = cash - price; // calculate the change due
    let change = []; // initialise change array to hold the change amount
  
    // Create an array of the currency values
    const currency = [    ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100]
    ];
  
    // Calculate the total amount of cash in the drawer
    let totalCash = cid.reduce(
      (acc, curr) => acc + curr[1],
      0
    );
  
    // Check if the cash in the drawer is less than the change due
    if (totalCash < changeDue) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    // Check if the cash in the drawer is equal to the change due
    if (totalCash === changeDue) {
      return { status: "CLOSED", change: cid };
    }
  
    // Loop through the currency array from highest to lowest value
    for (let i = currency.length - 1; i >= 0; i--) {
      let value = currency[i][1];
      let name = currency[i][0];
  
      // Check if the current currency value is less than the change due
      if (value <= changeDue) {
        let count = 0;
  
        // Calculate the number of the current currency that can be used to make change
        while (cid[i][1] > 0 && changeDue >= value) {
          changeDue -= value;
          changeDue = Math.round(changeDue * 100) / 100;
          cid[i][1] -= value;
          count++;
        }
  
        // Add the currency used for change to the change array
        if (count > 0) {
          change.push([name, value * count]);
        }
      }
    }
  
    // Check if the exact change could not be returned
    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    return { status: "OPEN", change: change };
  }


  //Test cases

  console.log(checkCashRegister(19.5, 20, [  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]));
// Expected output: {status: "OPEN", change: [["QUARTER", 0.5]]}

console.log(checkCashRegister(3.26, 100, [  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]));
// Expected output: {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

console.log(checkCashRegister(19.5, 20, [  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]));
// Expected output: {status: "INSUFFICIENT_FUNDS", change: []}

console.log(checkCashRegister(19.5, 20, [  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]));
// Expected output: {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

  
  /*
These test cases are about testing the "checkCashRegister" function. 
The tests are designed to check the function's output for various input values 
of purchase price, payment, and cash-in-drawer (cid) and to ensure that the 
function returns the expected results, such as "INSUFFICIENT_FUNDS" 
if the cash-in-drawer is less than the change due, "CLOSED" if it is equal to 
the change due, or "OPEN" with the change due in coins and bills, sorted in highest 
to lowest order, as the value of the change key. These test cases will help verify 
that the "checkCashRegister" function is working correctly and as expected.
  */