// VARIABLE DECLARATIONS
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const buttons = document.querySelectorAll('.keyrow button');
const missed = 0;
const match = 0;
const phrases = [
    'Ride a bike', 
    'Tougher than the rest', 
    'You are the reason',
    'Boulevard of broken dreams',
    'Name of the game'
];

//START GAME LISTENER BUTTON
btnReset.addEventListener('click', () => {
    overlay.style.display='none';
});

//RANDOM PHRASE GENERATOR
function getRandomPhraseAsArray(a) {
    const randomNumber = Math.floor(Math.random() * a.length);
    const index = a[randomNumber];
    return index;
};


const randomPhrase = getRandomPhraseAsArray(phrases);
console.log(randomPhrase);



//ADD PHRASE TO DISPLAY
function addPhraseToDisplay() {
    for (let i=0; i < randomPhrase.length; i++) {
        const li = document.createElement('li');
        const ul = document.getElementsByTagName('ul');
        ul[0].appendChild(li);
        if (randomPhrase[i] === ' ') {
            li.className = 'space';
        } else {
            li.className = 'letter';
        }
    }
};

addPhraseToDisplay();

//CHECK LETTER
function checkLetter(event) {
    console.log(event.target);
    const lettersToCheck = document.querySelectorAll('ul li.letter');
    console.log(lettersToCheck);
    const letter = event.target.innerHTML;
    console.log(letter);

    // console.log(lettersToCheck);

    const match = '';
    for (let i = 0; i < buttons.length; i++) {
        console.log(lettersToCheck[i]);
        if (lettersToCheck[i].innerHTML === letter) {
            
        } 
    }
    // return match;
}

buttons.forEach((e) => {
    e.addEventListener('click', checkLetter);    
});

function letterToLi(){
    const string = randomPhrase.split(' ').join('');
    const list = document.querySelectorAll('ul li.letter');
    console.log(list);
    for ( let i = 0; i < list.length; i++) {
        list.innerHTML = string[i];
        
    }
}

letterToLi();


