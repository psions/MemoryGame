const cardArray = [
    { 
    name: 'fries', 
    img: 'images/fries.png' 
    },

    {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
    },

    {
    name: 'hotdog',
    img: 'images/hotdog.png'
    },

    {
    name: 'pizza',
    img: 'images/pizza.png'
    },

    {   
    name: 'milkshake',
    img: 'images/milkshake.png'
    },

    {
    name: 'icecream',
    img: 'images/icecream.png'
    },
    { 
    name: 'fries', 
    img: 'images/fries.png' 
    },

    {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
    },

    {
    name: 'hotdog',
    img: 'images/hotdog.png'
    },

    {
    name: 'pizza',
    img: 'images/pizza.png'
    },

    {   
    name: 'milkshake',
    img: 'images/milkshake.png'
    },

    {
    name: 'icecream',
    img: 'images/icecream.png'
    },

];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result') 
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkForMatch () {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match')

    if (optionOneId === optionTwoId) {
        cards[optionOneId] .setAttribute('src', 'images/blank.png')
        cards[optionTwoId] .setAttribute('src', 'images/blank.png')
        alert('You have chosen the same card twice')
    }

    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId] .setAttribute('src', 'images/white.png')
        cards[optionTwoId] .setAttribute('src', 'images/white.png')
        cards[optionOneId] .removeEventListener('click', flipCard)
        cards[optionTwoId] .removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
        
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length === cardArray.length / 2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
    }
}

function flipCard () {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosenIds)
    console.log(cardsChosen)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}