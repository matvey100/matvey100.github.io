// Card 1
let card1 = document.querySelector(`#card-1`);
let imgCard1 = document.querySelector(`#img-card-1`);
let titleCard1 = document.querySelector(`#title-card-1`);

// Card 2
let card2 = document.querySelector(`#card-2`);
let imgCard2 = document.querySelector(`#img-card-2`);
let titleCard2 = document.querySelector(`#title-card-2`);

// Card 3
let card3 = document.querySelector(`#card-3`);
let imgCard3 = document.querySelector(`#img-card-3`);
let titleCard3 = document.querySelector(`#title-card-3`);

// Card 4
let card4 = document.querySelector(`#card-4`);
let imgCard4 = document.querySelector(`#img-card-4`);
let titleCard4 = document.querySelector(`#title-card-4`);

// Play button
let playButton = document.querySelector(`#play-button`);

let card1Themes = [
    {
        title: `Theme 1`,
        image: `assets/cards/card-1/one.png`
    },
    {
        title: `Theme 2`,
        image: `assets/cards/card-1/two.png`
    },
    {
        title: `Theme 3`,
        image: `assets/cards/card-1/three.png`
    },
    {
        title: `Theme 4`,
        image: `assets/cards/card-1/four.jpg`
    },
    {
        title: `Theme 5`,
        image: `assets/cards/card-1/five.jpg`
    },
];

let card2Themes = [
    {
        title: `Theme 1`,
        image: `assets/cards/card-2/one.png`
    },
    {
        title: `Theme 2`,
        image: `assets/cards/card-2/two.png`
    },
    {
        title: `Theme 3`,
        image: `assets/cards/card-2/three.png`
    },
    {
        title: `Theme 4`,
        image: `assets/cards/card-2/four.jpg`
    },
    {
        title: `Theme 5`,
        image: `assets/cards/card-2/five.jpg`
    },
];

let card3Themes = [
    {
        title: `Theme 1`,
        image: `assets/cards/card-3/one.png`
    },
    {
        title: `Theme 2`,
        image: `assets/cards/card-3/two.png`
    },
    {
        title: `Theme 3`,
        image: `assets/cards/card-3/three.png`
    },
    {
        title: `Theme 4`,
        image: `assets/cards/card-3/four.jpg`
    },
    {
        title: `Theme 5`,
        image: `assets/cards/card-3/five.jpg`
    },
];

let card4Themes = [
    {
        title: `Theme 1`,
        image: `assets/cards/card-4/one.png`
    },
    {
        title: `Theme 2`,
        image: `assets/cards/card-4/two.png`
    },
    {
        title: `Theme 3`,
        image: `assets/cards/card-4/three.png`
    },
    {
        title: `Theme 4`,
        image: `assets/cards/card-4/four.jpg`
    },
    {
        title: `Theme 5`,
        image: `assets/cards/card-4/five.jpg`
    },
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

playButton.addEventListener(`click`, function () {
    let randomCard1Value = getRandomInt(card1Themes.length);
    let randomCard2Value = getRandomInt(card2Themes.length);
    let randomCard3Value = getRandomInt(card3Themes.length);
    let randomCard4Value = getRandomInt(card4Themes.length);

    console.log(randomCard1Value, randomCard2Value, randomCard3Value, randomCard4Value)

    titleCard1.innerHTML = card1Themes[randomCard1Value].title;
    titleCard2.innerHTML = card2Themes[randomCard2Value].title;
    titleCard3.innerHTML = card3Themes[randomCard3Value].title;
    titleCard4.innerHTML = card4Themes[randomCard4Value].title;

    imgCard1.src = card1Themes[randomCard1Value].image;
    imgCard2.src = card2Themes[randomCard2Value].image;
    imgCard3.src = card3Themes[randomCard3Value].image;
    imgCard4.src = card4Themes[randomCard4Value].image;
});