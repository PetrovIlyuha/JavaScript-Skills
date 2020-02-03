const currencyEl_one = document.getElementById("currency-one");
const currencyEl_two = document.getElementById("currency-two");
const amount_1 = document.getElementById("amount-one");
const amount_2 = document.getElementById("amount-two");

const rateElement = document.getElementById("rate");
const swap = document.getElementById("swap");

// Fetch exchange rates and update the DOM

function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[currency_two];
      rateElement.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amount_2.value = (amount_1.value * rate).toFixed(2);
    });
}

// Listeners
currencyEl_one.addEventListener("change", calculate);
amount_1.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amount_2.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  [currencyEl_one.value, currencyEl_two.value] = [
    currencyEl_two.value,
    currencyEl_one.value
  ];
  calculate();
});
calculate();
