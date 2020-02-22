const balance = document.getElementById("balance");
const money_plus = document.getElementById("money_plus");
const money_minus = document.getElementById("money_minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

const localStorageTransactions = JSON.parse(
  localStorage.getItem("transactions")
);

let transactions =
  localStorage.getItem("transactions") !== null ? localStorageTransactions : [];

// Notification
function showNotification() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function() {
    x.className = x.className.replace("show", "");
  }, 2000);
}

// Add single transaction
function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === "" || amount.value.trim() === "") {
    showNotification();
  } else {
    const transaction = {
      id: generateID(),
      text: text.value,
      amount: +amount.value
    };
    transactions.push(transaction);

    addTransactionDOM(transaction);
    updateValues();
    updateLocalStorage();
    text.value = "";
    amount.value = "";
  }
}

// Generating random id
function generateID() {
  return Math.floor(Math.random() * 10000000);
}
// Add transactions to DOM list
function addTransactionDOM(transaction) {
  // Get sign
  const sign = transaction.amount < 0 ? "-" : "+";

  const item = document.createElement("li");

  // Add class based on value
  item.classList.add(transaction.amount < 0 ? "minus" : "plus");
  item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onClick="removeTransaction(${
      transaction.id
    })">X</button>
  `;

  list.appendChild(item);
}

// Remove transaction by ID
function removeTransaction(id) {
  transactions = transactions.filter(item => item.id !== id);
  updateLocalStorage();
  init();
}

// Update the balance, income and expense
function updateValues() {
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);
  const expenses = (
    amounts.filter(item => item < 0).reduce((acc, item) => acc + item, 0) * -1
  ).toFixed(2);
  balance.innerText = `Pуб. ${total}`;
  money_plus.innerText = `Pуб. ${income}`;
  money_minus.innerText = `Pуб. ${expenses}`;
}

// Update local Storage transactions
function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

// Init App
function init() {
  list.innerHTML = "";
  transactions.map(item => addTransactionDOM(item));
  updateValues();
}
init();

form.addEventListener("submit", addTransaction);
