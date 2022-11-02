// VARIABLE DECLARATIONS
const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const btnReset = document.querySelector(".btn__reset");
const overlay = document.getElementById("overlay");
const buttons = document.querySelectorAll(".keyrow button");
const title = document.querySelector(".title");
const liveheart = document.querySelectorAll(".tries img");
let missed = 0;
const phrases = [
  "ride a bike",
  "tougher than the rest",
  "you are the reason",
  "boulevard of broken dreams",
  "name of the game",
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
      li.innerHTML = randomPhrase[i]; 
    }
  }
}

addPhraseToDisplay();

//CHECK LETTER
function checkLetter(event) {
  // console.log(event.target);
  const liList = document.querySelectorAll("ul li.letter");
  console.log(liList);
  const liListString = [...liList].map(ele => ele.innerHTML);
  console.log(liListString);
  const btnLetter = event.target.innerHTML;
  const btn = event.target;
  console.log(btn);
  console.log(btnLetter);
  let match = liListString.includes(btnLetter);
  console.log(match);
  for (let i = 0; i < buttons.length; i++) {
    if (liList[i]?.innerHTML === btnLetter) {
      liList[i].classList.add("show");
      btn.className = "chosen";
      btn.setAttribute("disabled", "");
    } 
  }

    if (!match) {
      liveheart[missed].src = "images/lostHeart.png";
      missed++;
      btn.className = "wrong";
      btn.setAttribute("disabled", "");
    }
}

buttons.forEach((e) => {
  e.addEventListener("click", checkLetter);
});


