// VARIABLE DECLARATIONS
const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const phraseList = document.querySelector("#phrase ul");
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

//START GAME
function startGame() {
  const phraseArray = getRandomPhraseAsArray(phrases);
  addPhraseToDisplay(phraseArray);
}

btnReset.addEventListener("click", () => {
  startGame();
  overlay.style.display = "none";
});

//RANDOM PHRASE GENERATOR
function getRandomPhraseAsArray(a) {
  const randomNumber = Math.floor(Math.random() * a.length);
  const index = a[randomNumber];
  return index;
}

//ADD PHRASE TO DISPLAY
function addPhraseToDisplay(b) {
  for (let i = 0; i < b.length; i++) {
    const li = document.createElement("li");
    const ul = document.getElementsByTagName("ul");
    ul[0].appendChild(li);
    if (b[i] === " ") {
      li.className = "space";
    } else {
      li.className = "letter";
      li.innerHTML = b[i];
    }
  }
}

//CHECK LETTERS
buttons.forEach((e) => {
  e.addEventListener("click", checkLetter);
});

function checkLetter(event) {
  const liList = document.querySelectorAll("ul li.letter");
  const btnLetter = event.target.innerHTML;
  const btn = event.target;
  const liListString = [...liList].map((ele) => ele.innerHTML);
  let match = liListString.includes(btnLetter);
  const showLetters = document.querySelectorAll(".show");

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
  //RESET GAME
  function reset() {
    btnReset.textContent = "Reset";
    overlay.style.display = "flex";
    liList.forEach((e) => {
      e.classList.remove("show");
    });
    buttons.forEach((e) => {
      e.className = "";
      e.removeAttribute("disabled");
    });

    while (phraseList.firstChild) {
      phraseList.removeChild(phraseList.firstChild);
    }

    for (let i = 0; i < 5; i++) {
      liveheart[i].src = "images/liveHeart.png";
    }
    missed = 0;
  }
  // WIN - LOSE CONDITIONALS
  if (missed === 5) {
    overlay.className = "lose";
    title.textContent = "You Lose!";
    reset();
  }

  if (liList.length - 1 === showLetters.length) {
    overlay.className = "win";
    title.textContent = "You Win";
    reset();
  }
}
