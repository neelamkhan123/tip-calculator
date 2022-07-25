const tipPercentageValue = document.querySelector('.tip-percentage-value');
const splitValue = document.querySelector('.split-value');
const tipValue = document.querySelector('.tip');
const totalValue = document.querySelector('.total');
const btnPlus1 = document.querySelector('.plus-btn-1');
const btnMinus1 = document.querySelector('.minus-btn-1');
const btnPlus2 = document.querySelector('.plus-btn-2');
const btnMinus2 = document.querySelector('.minus-btn-2');
const btnSumbit = document.querySelector('.submit-btn');

let tpAmount = 15;
let perPerson = 1;

// Tip Percentage inc/dec Functions
const tpAmountInc = function () {
  tpAmount++;
  tpAmount = tpAmount < 10 ? '0' + tpAmount : tpAmount;
  tipPercentageValue.innerText = tpAmount;
};

const tpAmountDec = function () {
  if (tpAmount > 1) {
    tpAmount--;
    tpAmount = tpAmount < 10 ? '0' + tpAmount : tpAmount;
    tipPercentageValue.innerText = tpAmount;
  }
};

// Tip Percentage inc/dec Button Calls
btnPlus1.addEventListener('click', tpAmountInc);

btnMinus1.addEventListener('click', tpAmountDec);

// Split Between.. inc/dec Functions
const perPersonInc = function () {
  perPerson++;
  perPerson = perPerson < 10 ? '0' + perPerson : perPerson;
  splitValue.innerText = perPerson;
};

const perPersonDec = function () {
  if (perPerson > 1) {
    perPerson--;
    perPerson = perPerson < 10 ? '0' + perPerson : perPerson;
    splitValue.innerText = perPerson;
  }
};

// Split Between.. inc/dec Button Calls
btnPlus2.addEventListener('click', perPersonInc);

btnMinus2.addEventListener('click', perPersonDec);

// Per Person Markup
const splitBewteen = function () {
  const markup = `
  <div class="split-between">
      <p class="sub-heading">per person</p>
    </div>
  `;
  tipValue.insertAdjacentHTML('beforeend', markup);
  totalValue.insertAdjacentHTML('beforeend', markup);
};

let tip;
let total;

// Tip and Total Calculation
const calcTip = function () {
  const billAmount = document.getElementById('input-field').value;
  const initialCalc = billAmount * ((100 - tpAmount) / 100);
  // Tip Calc
  tip = (+billAmount - initialCalc).toFixed(2);

  // Total Calc
  total = (+billAmount + +tip).toFixed(2);

  // Onscreen Display
  tipValue.innerText = tip;
  totalValue.innerText = total;

  // Per Person > 1
  if (perPerson > 1) {
    // Total Per Person Calc
    totalPerPerson = (total / +perPerson).toFixed(2);

    // Tip Per Person Calc
    tipPerPerson = (tip / +perPerson).toFixed(2);

    // Onscreen Display
    tipValue.innerText = tipPerPerson;
    totalValue.innerText = totalPerPerson;

    // Per Person Markup Call
    splitBewteen();
  }
};

// Submit Button and calcTip Call
btnSumbit.addEventListener('click', calcTip);
