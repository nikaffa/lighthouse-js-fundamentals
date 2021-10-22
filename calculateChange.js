/* Given two numbers, the total sum, and the amount of cash given to the cashier.
* Returns an object consisting of the amount of change for the cashier to give back*/

const calculateChange = (total, cash) => {
  let change = cash - total;
  const result = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0
  };

  while(change > 0) {
    if (change >= 2000) {
      change -= 2000;
      result.twentyDollar ++;
    }
    else if (change >= 1000) {
      change -= 1000;
      result.tenDollar ++;
    }
    else if (change >= 500) {
      change -= 500;
      result.fiveDollar ++;
    }
    else if (change >= 200) {
      change -= 200;
      result.twoDollar ++;
    }
    else if (change >= 100) {
      change -= 100;
      result.oneDollar ++;
    }
    else if (change >= 25) {
      change -= 25;
      result.quarter ++;
    }
    else if(change >= 10 ){
      change -= 10;
      result.dime ++;
    }
    else if (change >= 5) {
      change -= 5;
      result.nickel ++;
    }
    else {
      change -= 1;
      result.penny ++;
    }
  }
  for (let property in result) { //iterating over the properties 
    if (result[property] === 0) { //deleting properties with value of '0'
      delete result[property];
    }
  }
  return (result);
};

console.log(calculateChange(2623, 4000));
//{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }