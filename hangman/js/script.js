let figureParts = document.getElementsByClassName("figure-part");

for (var i = 0; i < figureParts.length; i++) {
  figureParts[i].classList.add("hide");
}

const words = ["Barsha", "Bishika", "Elisha", "Kirtee", "Kusum"];

const idx = Math.floor(Math.random() * words.length);

const randomWord = words[idx].toLowerCase();

var holder = document.getElementById("holder");

for (var j = 0; j < randomWord.length; j++) {
  var wordSection = document.createElement("span");
  wordSection.classList.add("word-section");
  holder.appendChild(wordSection);
}

let wrongWords = new Set();
let rightWords = new Set();

document.addEventListener("keydown", (e) => {
  const letter = e.key;

  if (randomWord.includes(letter)) {
    if (!rightWords.has(letter)) {
      rightWords.add(letter);
      let idxes = getIndexesOfLetters(randomWord, letter);
      showWord(idxes);
    } else {
      showNotification(letter);
      console.log(`You have guessed the ${letter}`);
    }
  } else {
    if (!wrongWords.has(letter)) {
      wrongWords.add(letter);
      showFigure();
      showWrongs();
    } else {
      showNotification(letter);
      console.log(`You have guessed the ${letter}`);
    }
  }
});

function showWord(array) {
  var wordSections = document.getElementsByClassName("word-section");

  array.forEach((element) => {
    wordSections[element].innerHTML = randomWord[element];
  });
}

function showWrongs() {
  var wrongsDiv = document.getElementById("wrongs");

  wrongsDiv.innerHTML = [...wrongWords].join(", ");
}

function showFigure() {
  let figureParts = document.getElementsByClassName("hide");

  if (figureParts.length <= 0) {
    console.log("game over");
    return;
  }

  figureParts[0].classList.add("show");
  figureParts[0].classList.remove("hide");
}

function getIndexesOfLetters(word, letter) {
  var indices = [];
  for (var i = 0; i < word.length; i++) {
    if (word[i] === letter) indices.push(i);
  }

  return indices;
}

function showNotification(letter) {
  const notify = document.getElementById("notifier");

  notify.style.display = "block";

  notify.innerHTML = `${letter} has already been guessed`;

  setTimeout(() => {
    notify.style.display = "none";
  }, 1500);
}
