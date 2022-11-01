// VARIABLE DECLARATIONS
const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const btnReset = document.querySelector(".btn__reset");
const overlay = document.getElementById("overlay");
const buttons = document.querySelectorAll(".keyrow button");
const missed = 0;
const match = 0;
const phrases = [
  "Ride a bike",
  "Tougher than the rest",
  "You are the reason",
  "Boulevard of broken dreams",
  "Name of the game",
];

//START GAME LISTENER BUTTON
btnReset.addEventListener("click", () => {
  overlay.style.display = "none";
});

//RANDOM PHRASE GENERATOR
function getRandomPhraseAsArray(a) {
  const randomNumber = Math.floor(Math.random() * a.length);
  const index = a[randomNumber];
  return index;
}

const randomPhrase = getRandomPhraseAsArray(phrases);
console.log(randomPhrase);

//ADD PHRASE TO DISPLAY
function addPhraseToDisplay() {
  for (let i = 0; i < randomPhrase.length; i++) {
    const li = document.createElement("li");
    const ul = document.getElementsByTagName("ul");
    ul[0].appendChild(li);
    if (randomPhrase[i] === " ") {
      li.className = "space";
    } else {
      li.className = "letter";
      li.innerHTML = randomPhrase[i]; //For Horea
    }
  }
}

addPhraseToDisplay();

//CHECK LETTER
function checkLetter(event) {
  console.log(event.target);
  const liList = document.querySelectorAll("ul li.letter");
  console.log(liList);
  const btnLetter = event.target.innerHTML;
  console.log(btnLetter);

  // console.log(liList);

  const match = "";
  for (let i = 0; i < buttons.length; i++) {
    console.log(liList[i]);
    if (liList[i].innerHTML === btnLetter) {
      liList[i].classList.add("show");
    }
  }
  // return match;
}

buttons.forEach((e) => {
  e.addEventListener("click", checkLetter);
});
