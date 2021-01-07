let denoms = [
  {type: "twentyDollar", amount: 2000},
  {type: "tenDollar", amount: 1000},
  {type: "fiveDollar", amount: 500},
  {type: "twoDollar", amount: 200},
  {type: "oneDollar", amount: 100},
  {type: "quarter", amount: 25},
  {type: "dime", amount: 10},
  {type: "nickel", amount: 5},
  {type: "penny", amount: 1}
];

const calculateChange = function(total, cash) {
  
  let change = {}; 
    
  let diff = cash - total;
  while (diff > 0) {
    for (let i = 0; i < denoms.length; i++) {
      if (diff >= denoms[i].amount) {
        change[denoms[i].type] = Math.floor(diff / denoms[i].amount);
        diff = diff % denoms[i].amount;
      }
    }
  } return change;


};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));


