'use strict';

const account1 = {
  owner: 'Mamata Das',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2,
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2022-06-23T17:01:17.194Z',
    '2022-06-24T23:36:17.929Z',
    '2022-06-25T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2022-06-18T18:49:59.371Z',
    '2022-06-22T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};
const account3 = {
  owner: 'Binita Tarafdar',
  movements: [500, 3400, 1500, -790, -3210, 121000, 8500, -30],
  interestRate: 1.5,
  pin: 3333,

  movementsDates: [
    '2021-11-01T13:15:33.035Z',
    '2021-11-30T09:48:16.867Z',
    '2021-12-25T06:04:23.907Z',
    '2022-01-25T14:18:46.235Z',
    '2022-02-05T16:33:06.386Z',
    '2022-04-10T14:43:26.374Z',
    '2022-06-18T18:49:59.371Z',
    '2022-06-22T12:01:20.894Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
};
const account4 = {
  owner: 'Vaskar Chandra Das',
  movements: [500002, 3400, -150, 7190, 3210, -1000, 18500, -310],
  interestRate: 1.5,
  pin: 4444,

  movementsDates: [
    '2021-11-01T13:15:33.035Z',
    '2021-11-30T09:48:16.867Z',
    '2021-12-25T06:04:23.907Z',
    '2021-01-25T14:18:46.235Z',
    '2022-02-05T16:33:06.386Z',
    '2022-04-10T14:43:26.374Z',
    '2022-06-18T18:49:59.371Z',
    '2022-06-22T12:01:20.894Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
};
const account5 = {
  owner: 'Sayan Biswas',
  movements: [500, 3400, 12150, 197190, 93210, 51000, 18500, -310],
  interestRate: 1.5,
  pin: 5555,

  movementsDates: [
    '2021-11-01T13:15:33.035Z',
    '2021-11-30T09:48:16.867Z',
    '2021-12-25T06:04:23.907Z',
    '2021-01-25T14:18:46.235Z',
    '2022-02-05T16:33:06.386Z',
    '2022-04-10T14:43:26.374Z',
    '2022-06-18T18:49:59.371Z',
    '2022-06-22T12:01:20.894Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
};
const account6 = {
  owner: 'Sisu Panda',
  movements: [566500, 453400, 122150, 197190, 9453210, -51000, 18500, -310],
  interestRate: 1.5,
  pin: 6666,

  movementsDates: [
    '2021-11-01T13:15:33.035Z',
    '2021-11-30T09:48:16.867Z',
    '2021-12-25T06:04:23.907Z',
    '2021-01-25T14:18:46.235Z',
    '2022-02-05T16:33:06.386Z',
    '2022-04-10T14:43:26.374Z',
    '2022-06-25T18:49:59.371Z',
    '2022-06-27T12:01:20.894Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
};

const accounts = [account1, account2, account3, account4, account5, account6];

/////////////////////////////////////////////////

//! Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');
const btnLogout = document.querySelector('.btn-logout');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
//! Functions

//! Function to format given date...
const formatDate = function (date, acc) {
  //@ Function for calculating days passed.
  const calcdaysPassed = (d1, d2) =>
    Math.round(Math.abs(d2 - d1) / (1000 * 60 * 60 * 24));
  const daysPassed = calcdaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    const locale = navigator.language;
    return new Intl.DateTimeFormat(locale, options).format(date);
  }
};

//! Number formatter..
const formatCur = function (value, currency, locale) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

//! Timer function

const startLogOutTimer = function () {
  //@ Total session time...
  let time = 900;
  //@ The CALLBACK FUNCTION FOR setIntercal
  const trick = function () {
    let min = String(Math.trunc(time / 60)).padStart(2, 0);
    let sec = String(Math.trunc(time % 60)).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;

    //@ When time variable reaches 0 that means now the user has to be logged out automatically
    if (time === 0) {
      //! Stopping timer Interval..
      clearInterval(timer);
      //@  Change welcome message
      labelWelcome.textContent = `Log in to get started`;
      //@  Opacity set to zero
      containerApp.style.opacity = 0;
    }

    time--;
  };

  trick();

  const timer = setInterval(trick, 1000);

  return timer;
};

//!Display movements************************
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);

    const disaplayDate = formatDate(date);

    const formattedMov = formatCur(mov, acc.currency, acc.locale);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${disaplayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
//!Displaying current balance***************
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.currency, acc.locale);
};
//!Displaying summary*****************
const calcDisplaySummary = function (acc) {
  //@ money in
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = formatCur(incomes, acc.currency, acc.locale);

  //@ money out
  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = formatCur(Math.abs(out), acc.currency, acc.locale);

  //@ Interest earned....
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = formatCur(interest, acc.currency, acc.locale);
};
//!Creating usernames of all accounts*****************
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

//!Update UI****************
const updateUI = function (acc) {
  //@ Display movements
  displayMovements(acc);

  //@ Display balance
  calcDisplayBalance(acc);

  //@ Display summary
  calcDisplaySummary(acc);
};
//!Clear input fields**********
const clrInput = function (a, b) {
  a.value = b.value = '';
  a.blur();
  b.blur();
};

//!EVENT HANDLERS**************************

//!Implementing LOGIN feature

let currentAccount, timerCheck;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    //@ Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner}`;
    containerApp.style.opacity = 100;

    //@Clear transfer section data
    clrInput(inputLoginUsername, inputLoginPin);

    //@ Implementing timer feature and resetting it if while logging in already a timer exist...
    if (timerCheck) clearInterval(timerCheck);
    timerCheck = startLogOutTimer();
    //@ UpdateUI
    updateUI(currentAccount);

    //@Clear transfer section data
    clrInput(inputTransferAmount, inputTransferTo);

    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(new Date());
  }
});
//!Transfer section
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //@ DO transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //@Pushing Dates
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    //@updateUI
    updateUI(currentAccount);

    //@Clear transfer section data
    clrInput(inputTransferAmount, inputTransferTo);
    //@ Resetting the timer- whenever we will try to transfer money the timer gets reset.
    clearInterval(timerCheck);
    timerCheck = startLogOutTimer();
  }
});
//!Getting loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputLoanAmount.value;

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      //@  Add movement
      currentAccount.movements.push(Math.round(amount));

      //@ Pushing Dates
      currentAccount.movementsDates.push(new Date().toISOString());

      //@  Update UI
      updateUI(currentAccount);
    }, 2500);

    //@ Resetting the timer- whenever we will try to get loan the timer gets reset.
    clearInterval(timerCheck);
    timerCheck = startLogOutTimer();

    clrInput(undefined, inputLoanAmount);
  }
});
//!Closing the current account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    //@Deleting Current account from accounts array
    accounts.splice(index, 1);

    //@Hide UI
    containerApp.style.opacity = 0;
    //@Clear inputs
    clrInput(inputCloseUsername, inputClosePin);
    //@ Change welcome message
    labelWelcome.textContent = `Log in to get started`;
  }
});
//!Implementing sorting of movements using sort method
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});
//! Logout Feature...
btnLogout.addEventListener('click', function () {
  clearInterval(timerCheck);
  containerApp.style.opacity = 0;
  labelWelcome.textContent = `Log in to get started`;
});
