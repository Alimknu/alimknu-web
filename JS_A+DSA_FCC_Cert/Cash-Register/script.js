let price = 19.5;

let cid = [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];

const currencyUnit = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100,
};

const cashInput = document.getElementById("cash");
const changeDueElement = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

purchaseBtn.addEventListener("click", () => {
  const cash = parseFloat(cashInput.value);
  let changeDue = cash - price;

  if (changeDue < 0) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  if (changeDue === 0) {
    changeDueElement.textContent = "No change due - customer paid with exact cash";
    return;
  }

  const change = [];
  let status = "";

  for (let i = cid.length - 1; i >= 0; i--) {
    const coinName = cid[i][0];
    const coinTotal = cid[i][1];
    const coinValue = currencyUnit[coinName];
    let coinAmount = (coinTotal / coinValue).toFixed(2);
    let toReturn = 0;

    while (changeDue >= coinValue && coinAmount > 0) {
      changeDue -= coinValue;
      changeDue = Number(changeDue.toFixed(2));
      coinAmount--;
      toReturn += coinValue;
      toReturn = Number(toReturn.toFixed(2));
    }

    if (toReturn > 0) {
      change.push([coinName, toReturn]);
    }
  }

  if (changeDue > 0) {
    status = "INSUFFICIENT_FUNDS";
  } else if (
    cid.some(([coinName, coinTotal]) => coinTotal > 0 && !change.some(([changeName]) => changeName === coinName))
  ) {
    status = "OPEN";
  } else {
    status = "CLOSED";
  }

  let result = `Status: ${status}`;
  if (status !== "INSUFFICIENT_FUNDS") {
    for (let i = 0; i < change.length; i++) {
      result += ` ${change[i][0]}: $${change[i][1]}`;
    }
  }

  changeDueElement.textContent = result;
});
