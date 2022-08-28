const calculateChange = function(total, cash) {
  // Determine change (in cents)
  const change = cash - total;
  const denominations = [{
    amount: 2000,
    name: 'tewntyDollar'
  },{
    amount: 1000,
    name: 'tenDollar'
  },{
    amount: 500,
    name: 'fiveDollar'
  },{
    amount: 200,
    name: 'twoDollar'
  },{
    amount: 100,
    name: 'oneDollar'
  },{
    amount: 25,
    name: 'quarter'
  },{
    amount: 10,
    name: 'dime'
  },{
    amount: 5,
    name: 'nickel'
  },{
    amount: 1,
    name: 'penny'
  }];
  let remainder = change;
  let result = {};

  for (let x of denominations) {
    let denomination = x.amount;
    let divided = Math.trunc(remainder / denomination);

    // is change divisible by x.amount?
    if (divided >= 1){
      // Push to result object
      result[x.name] = divided;
    }
    
    // Store leftover amount
    remainder = remainder - (denomination * divided);
  }

  return result;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));