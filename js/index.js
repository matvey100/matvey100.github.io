// Card view
let playCardFront = document.querySelectorAll(`.play-card-front`);
let playCardBack = document.querySelectorAll(`.play-card-back`);

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
        title: `Тема 1`,
        image: `assets/cards/card-1/one.jpg`
    },
    {
        title: `Тема 2`,
        image: `assets/cards/card-1/two.jpg`
    },
    {
        title: `Тема 3`,
        image: `assets/cards/card-1/three.jpg`
    },
    {
        title: `Тема 4`,
        image: `assets/cards/card-1/four.jpg`
    },
    {
        title: `Тема 5`,
        image: `assets/cards/card-1/five.jpg`
    },
];

let card2Themes = [
    {
        title: `Тема 1`,
        image: `assets/cards/card-2/one.jpg`
    },
    {
        title: `Тема 2`,
        image: `assets/cards/card-2/two.jpg`
    },
    {
        title: `Тема 3`,
        image: `assets/cards/card-2/three.jpg`
    },
    {
        title: `Тема 4`,
        image: `assets/cards/card-2/four.jpg`
    },
    {
        title: `Тема 5`,
        image: `assets/cards/card-2/five.jpg`
    },
];

let card3Themes = [
    {
        title: `Тема 1`,
        image: `assets/cards/card-3/one.jpg`
    },
    {
        title: `Тема 2`,
        image: `assets/cards/card-3/two.jpg`
    },
    {
        title: `Тема 3`,
        image: `assets/cards/card-3/three.jpg`
    },
    {
        title: `Тема 4`,
        image: `assets/cards/card-3/four.jpg`
    },
    {
        title: `Тема 5`,
        image: `assets/cards/card-3/five.jpg`
    },
];

let card4Themes = [
    {
        title: `Тема 1`,
        image: `assets/cards/card-4/one.jpg`
    },
    {
        title: `Тема 2`,
        image: `assets/cards/card-4/two.jpg`
    },
    {
        title: `Тема 3`,
        image: `assets/cards/card-4/three.jpg`
    },
    {
        title: `Тема 4`,
        image: `assets/cards/card-4/four.jpg`
    },
    {
        title: `Тема 5`,
        image: `assets/cards/card-4/five.jpg`
    },
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function addRandomThemes() {
    let randomCard1Value = getRandomInt(card1Themes.length);
    let randomCard2Value = getRandomInt(card2Themes.length);
    let randomCard3Value = getRandomInt(card3Themes.length);
    let randomCard4Value = getRandomInt(card4Themes.length);

    titleCard1.innerHTML = card1Themes[randomCard1Value].title;
    titleCard2.innerHTML = card2Themes[randomCard2Value].title;
    titleCard3.innerHTML = card3Themes[randomCard3Value].title;
    titleCard4.innerHTML = card4Themes[randomCard4Value].title;

    imgCard1.src = card1Themes[randomCard1Value].image;
    imgCard2.src = card2Themes[randomCard2Value].image;
    imgCard3.src = card3Themes[randomCard3Value].image;
    imgCard4.src = card4Themes[randomCard4Value].image;
}

function addRotatedClass() {
    card1.classList.add(`play-card-rotated`);
    card2.classList.add(`play-card-rotated`);
    card3.classList.add(`play-card-rotated`);
    card4.classList.add(`play-card-rotated`);
}

function removeRotatedClass() {
    card1.classList.remove(`play-card-rotated`);
    card2.classList.remove(`play-card-rotated`);
    card3.classList.remove(`play-card-rotated`);
    card4.classList.remove(`play-card-rotated`);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let count = 0;
playButton.addEventListener(`click`, function () {
    for (let i = 0; i < 4; i++) {
        let cardFront = playCardFront[i];
        let cardBack = playCardBack[i];

        if (Number(count) === 0) {
            playButton.innerHTML = `Раздать карты заново`;

            addRandomThemes()

            addRotatedClass()

            setTimeout(function () {
                cardFront.classList.add(`d-none`);
                cardBack.classList.remove(`d-none`);
            }, 250);

        } else {
            removeRotatedClass()

            setTimeout(function () {
                cardBack.classList.add(`d-none`);
                cardFront.classList.remove(`d-none`);
            }, 250);

            sleep(1000).then(function () {
                addRandomThemes()

                addRotatedClass()

                setTimeout(function () {
                    cardFront.classList.add(`d-none`);
                    cardBack.classList.remove(`d-none`);
                }, 250);
            });
        }
    }
    count = 1;
});