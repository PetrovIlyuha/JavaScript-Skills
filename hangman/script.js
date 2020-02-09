const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-again");
const popup = document.getElementById("popup-container");
const notify = document.getElementById("notification_container");
const message = document.getElementById("final-message");
const figureParts = document.querySelectorAll(".figure-part");

const words = [
  "moribund",
  "battleground",
  "government",
  "productivity",
  "transport",
  "prioritising",
  "improvement",
  "transport",
  "controversy",
  "contraception",
  "overturning",
  "administration",
  "regulation",
  "conscientious",
  "objection",
  "bipartisan",
  "international"
];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

function displayWord() {
  wordEl.innerHTML = `
  ${selectedWord
    .split("")
    .map(
      letter => `
    <span class="letter">
      ${correctLetters.includes(letter) ? letter : ""}
    </span>
  `
    )
    .join("")}`;
  const innerWord = wordEl.innerText.replace(/\n/g, "");
  if (innerWord === selectedWord) {
    message.innerText = "🎉Вы сегодня спасли человека силой мысли!";
    popup.style.display = "flex";
  }
}

// Update the wrong letters
function updateWrongLettersEl() {
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? "<p>Неверные буквы</p>" : ""}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
  `;

  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;
    if (index < errors) {
      part.style.display = "block";
    } else {
      part.style.display = "none";
    }
  });
  if (wrongLetters.length === figureParts.length) {
    message.innerText =
      "Несчастный погиб. Но следующий висельник ждёт вашей помощи 🤦‍♀️";
    popup.style.display = "flex";
  }
}

function showNotification() {
  notify.classList.add("show");
  setTimeout(() => {
    notify.classList.remove("show");
  }, 2000);
}
// Keydown letter press check
window.addEventListener("keydown", e => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);
        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  }
});

// Restart game
playAgainBtn.addEventListener("click", () => {
  correctLetters.splice(0);
  wrongLetters.splice(0);
  selectedWord = words[Math.floor(Math.random() * words.length)];
  console.log(selectedWord);
  displayWord();
  updateWrongLettersEl();
  popup.style.display = "none";
});

displayWord();
