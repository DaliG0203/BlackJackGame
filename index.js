let player = {
    name: "Money",
    chips: 200
}

let cardImages = ["cardImages/ace_of_clubs.png",
    "cardImages/2_of_clubs.png",
    "cardImages/3_of_diamonds.png",
    "cardImages/4_of_hearts.png",
    "cardImages/5_of_spades.png",
    "cardImages/6_of_hearts.png",
    "cardImages/7_of_clubs.png",
    "cardImages/8_of_diamonds.png",
    "cardImages/9_of_diamonds.png",
    "cardImages/10_of_hearts.png",
    "cardImages/jack_of_diamonds.png",
    "cardImages/king_of_clubs2.png",
    "cardImages/queen_of_diamonds2.png"]
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let cardImageEl = document.getElementById("cardImage-el")
let cardImageTwoEl = document.getElementById("cardImageTwo-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*12 )
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber === 0) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    document.getElementById("cardImageThree-el").src = 'x'
    document.getElementById("cardImageFour-el").src = 'x'
    document.getElementById("cardImageFive-el").src = 'x'
    document.getElementById("cardImageSix-el").src = 'x'
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    if (firstCard===11) {
        cardImageEl.src = cardImages[0]
    } else if (firstCard===10) {
        let randNum = Math.floor(Math.random()*(12 - 9 + 1)) + 9;
        cardImageEl.src = cardImages[randNum]
    } else {
        cardImageEl.src = cardImages[firstCard-1]
    }


    if (secondCard===11) {
        cardImageTwoEl.src = cardImages[0]
    } else if (secondCard===10) {
        let randNumTwo = Math.floor(Math.random()*(12 - 9 + 1)) + 9;
        cardImageTwoEl.src = cardImages[randNumTwo]
    } else {
        cardImageTwoEl.src = cardImages[secondCard-1]
    }
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        hasBlackJack = false
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
        hasBlackJack = false
    }
    messageEl.textContent = message


}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
        document.getElementById("cardImageThree-el").src = cardImages[cards[2]-1]
        document.getElementById("cardImageFour-el").src = cardImages[cards[3]-1]
        document.getElementById("cardImageFive-el").src = cardImages[cards[4]-1]
        document.getElementById("cardImageSix-el").src = cardImages[cards[5]-1]
    } else {
        console.log("Has BlackJack: " + hasBlackJack)
        console.log("Is alive: " + isAlive)
    }
}


//create a for loop to creat the image by using instring variables to create the ID of the HTML element
// create betting functionality
//create dealer too
//when firstSum = 21 change one A to 1 so that it turns to 12