const getName = document.getElementById('name');
const getAccessCode = document.getElementById('password');
const getForm = document.getElementById('main-form');
const getGreetings = document.getElementById('greetings');
const getWar = document.getElementById('war')
const soldierScore = document.getElementById('soldier-score')
const soldierShip = document.getElementById('soldier-ship')
const alines = document.getElementById('alien')
const game = document.getElementById('game')
const curtain = document.getElementById('curtain')
const gameImage = document.querySelector('img')
const alienGame = document.getElementById('alien-game')
const con = document.getElementById('container')
const alienVsHuman = document.getElementById('alien-vs-human')
const humanList = document.getElementById('human-list')
const alienList = document.getElementById('alien-list')

getWar.style.display = 'none';
const hand = ['Rock', 'Paper', 'Scissors']
const player = ''
getForm.addEventListener('submit', (e) => {
  e.preventDefault();
  getGreetings.textContent = `Welcome ${getName.value}! Are you ready to save Earth? Please click "Start".`;
  soldierShip.textContent = getName.value
  const addButton = document.createElement('button');
  addButton.setAttribute('id', 'add-button');
  addButton.textContent = 'Start';
  getGreetings.appendChild(addButton);
  addButton.addEventListener('click', addFunctionHandler);

  getName.style.display = 'none';
  getAccessCode.style.display = 'none'
  getForm.querySelector('.lab').style.display = 'none';
  getForm.querySelector('#main-button').style.display = 'none'
  
});


const addFunctionHandler = () => {
  getForm.style.display = 'none'
  curtain.style.display = 'block'
  con.style.display = 'flex'
  header();
  shake()
}

//shake
const shake = () => {
  gameImage.classList.add('shake')
  gameImage.src = 'asset/image/rock.png'
  gameImage.alt = 'rock'
  gameImage.style.animation = 'shake'
  gameImage.style.animationIterationCount = '5s'
}

let numList = -1;
let alNumList = -1;
const header = () => {
const human = document.createElement('div')
human.setAttribute('id', 'player')
human.textContent = 'player 1';
game.insertBefore(human, game.firstChild)

for(let i = 0; i < 3; i++){
  const imageButton = document.createElement('button')
  imageButton.setAttribute('id', 'rps')
  imageButton.textContent = hand[i];
  alienVsHuman.appendChild(imageButton)
}
const imageButton = document.querySelectorAll('#rps')
game.insertBefore(gameImage, game.lastChild)

// render rock with animation
gameImage.src = 'asset/image/rock.png'
gameImage.alt = 'rock'
imageButton.forEach(button => {
  button.addEventListener('click', () => {
    numList = numList + 1
    alNumList = numList + 1

    let choice = ''
    if(button.textContent === 'Rock') {
      gameImage.src = 'asset/image/rock.png'
      gameImage.alt = 'rock'
      choice = 'rock'
    }
    if(button.textContent === 'Paper') {
      gameImage.src = 'asset/image/paper.png'
      gameImage.alt = 'paper'
      choice = 'paper'
    }
    if(button.textContent === 'Scissors'){
      gameImage.src = 'asset/image/scissors.png'
      gameImage.alt = 'scissors'
      choice = 'scissors'
    }
    
    alien(choice)

    })
})
}
const alien = (choice) => {
  const alienImg = document.querySelector('#alien-img');
  if (alienImg) {
    alienGame.removeChild(alienImg);
  }
  
  const randomIndex = Math.floor(Math.random() * hand.length);
  const handValue = hand[randomIndex];

  let imagePath = '';
  let altText = '';

  if (handValue === 'Rock') {
    imagePath = 'asset/image/rock.png';
    altText = handValue;
  } else if (handValue === 'Paper') {
    imagePath = 'asset/image/paper.png';
    altText = handValue;
  } else if (handValue === 'Scissors') {
    imagePath = 'asset/image/scissors.png';
    altText = handValue;
  }

  const newAlienImg = document.createElement('img');
  newAlienImg.setAttribute('id', 'alien-img');
  newAlienImg.src = imagePath;
  newAlienImg.alt = altText;
  alienGame.appendChild(newAlienImg);
  checkScore(choice, handValue)
};

const checkScore = (human, alien) => {
  human = human.toLowerCase();
  alien = alien.toLowerCase();
  
  if(human === alien) {
    alNumList = alNumList -1
    numList = numList -1
  }
  if(human === 'rock' && alien === 'scissors' || human === 'scissors' && alien === 'paper' || human === 'paper' && alien === 'rock'){
    const firstChild = humanList.children[numList]
    firstChild.style.backgroundColor = 'yellow'
    alNumList = alNumList -1
    return
  }
  if(alien === 'rock' && human === 'scissors' || alien === 'scissors' && human === 'paper' || alien === 'paper' && human === 'rock'){
    const alFirstChild = alienList.children[alNumList]
    alFirstChild.style.backgroundColor = 'yellow'
    numList = numList -1
    return
  }
  
}