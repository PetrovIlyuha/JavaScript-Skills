const main = document.getElementById("main");
const addUser = document.getElementById("add_user");
const double = document.getElementById("double");
const showMillionaires = document.getElementById("show_millionaires");
const showRich = document.getElementById("sort");
const sortPoor = document.getElementById("sort_poor");
const calculateWealth = document.getElementById("calculate_wealth");
const totalWealth = document.getElementById("total_wealth");
let data = [];

let count = 0;
while (count < 5) {
  getRandomUser();
  count++;
}

// fetch API data and add money property
async function getRandomUser() {
  const result = await fetch("https://randomuser.me/api");
  const data = await result.json();
  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };
  addData(newUser);
}

// Double Money Function
function doubleMoney() {
  data = data.map(user => {
    return { ...user, money: user.money * 2 };
  });
  updateDOM();
}
// Sort users by richest to poorest
function sortRichest() {
  data = data.sort((a, b) => b.money - a.money);
  updateDOM();
}

// Sort users poorest to richest
function sortPoorest() {
  data = data.sort((a, b) => a.money - b.money);
  updateDOM();
}
// Add new user object to data array
function addData(obj) {
  data.push(obj);

  updateDOM();
}

// Show only millionares
function showMillions() {
  data = data.filter(item => !(item.money < 1000000));
  updateDOM();
}

// Show overall income
function overallWealth() {
  let wealth = data.reduce((acc, person) => acc + person.money, 0);
  const wealthMonitor = document.createElement("h3");
  wealthMonitor.innerHTML = `Overall Wealth in List is $ ${wealth}`;
  totalWealth.appendChild(wealthMonitor);
}

function updateDOM(providedData = data) {
  // Clear the main DIV
  main.innerHTML = "<h2><strong>Person </strong>Wealth</h2>";
  providedData.forEach(item => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong>$ ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

// Format money
function formatMoney(amount) {
  return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

// Event Listeners
addUser.addEventListener("click", getRandomUser);
double.addEventListener("click", doubleMoney);
showRich.addEventListener("click", sortRichest);
sortPoor.addEventListener("click", sortPoorest);
showMillionaires.addEventListener("click", showMillions);
calculateWealth.addEventListener("click", overallWealth);
