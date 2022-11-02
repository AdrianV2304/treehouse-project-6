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
console.log(buttons);

//START GAME LISTENER BUTTON
btnReset.addEventListener("click", () => {
  if (btnReset.textContent === "Start Game") {
    startGame();
    overlay.style.display = "none";
  } else {
    refreshPage();
    overlay.style.display = "none";
  }
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
<<<<<<< HEAD
      li.innerHTML = b[i]; 
=======
      li.innerHTML = randomPhrase[i]; 
>>>>>>> 3f0c98c4282128243fa03d608373a211f3df8c29
    }
  }
}



//CHECK LETTERS... AND THE REST SAINT JACOB KNOWS! 
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
<<<<<<< HEAD
    if (!match) {
      liveheart[missed].src = "images/lostHeart.png";
      missed++;
      console.log(missed, 'dis');
      btn.className = "wrong";
      btn.setAttribute("disabled", "");
    }

    if (missed === 5) {
      overlay.style.display = "flex";
      overlay.className = "lose";
      title.textContent = "You Lose!";
      btnReset.textContent = "Reset";
      liList.forEach((e)=>{
        e.classList.remove("show");        
      });
    
    }
=======

    if (!match) {
      liveheart[missed].src = "images/lostHeart.png";
      missed++;
      btn.className = "wrong";
      btn.setAttribute("disabled", "");
    }
>>>>>>> 3f0c98c4282128243fa03d608373a211f3df8c29
}

buttons.forEach((e) => {
  e.addEventListener("click", checkLetter);
});

<<<<<<< HEAD
function refreshPage () {
       overlay.style.display = "none";
      buttons.forEach((e)=>{
        e.className = "";
        e.removeAttribute("disabled");
      });
      missed = 0;

      for( let i=0; i < 5; i++){
        liveheart[i].src = "images/liveHeart.png";
      }   
    };
    
function startGame() {
  const phraseArray = getRandomPhraseAsArray(phrases);
  addPhraseToDisplay(phraseArray);
};
=======

>>>>>>> 3f0c98c4282128243fa03d608373a211f3df8c29
