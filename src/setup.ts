import cat from  './img/cat.png';
import dog from  './img/dog.png';
import sheep from  './img/sheep.png';
import chicken from  './img/chicken.png';
import elephant from  './img/elephant.png';
import cow from  './img/cow.png';
import horse from  './img/horse.png';
import duck from  './img/duck.png';
// card back
import cardBack from  './img/card_back.png';

// sounds
import catSound from  './sounds/cat.mp3';
import dogSound from  './sounds/dog.mp3';
import sheepSound from  './sounds/sheep.mp3';
import chickenSound from  './sounds/chicken.mp3';
import elephantSound from  './sounds/elephant.wav';
import cowSound from  './sounds/cow.mp3';
import horseSound from  './sounds/horse.mp3';
import duckSound from  './sounds/duck.mp3';

// create object CardType for each card
export type CardType = {
    id: string;
    flipped: boolean;
    backImage: string;
    frontImage: string;
    clickable: boolean;
    matchingCardId: string;
    sound: string;
}

// put the images in a string array
// const cards: string[] = [
//   cat, dog, sheep, chicken, elephant, cow, horse, duck,
// ];

const cardData: { image: string, sound: string }[] = [
  { image: cat, sound: catSound },
  { image: dog, sound: dogSound },
  { image: sheep, sound: sheepSound },
  { image: chicken, sound: chickenSound },
  { image: elephant, sound: elephantSound },
  { image: cow, sound: cowSound },
  { image: horse, sound: horseSound },
  { image: duck, sound: duckSound },
];

// create pairs of cards
export const createBoard = (): CardType[] => 
  [ ...cardData, ...cardData ].map((data, index) => ({
    id: `card${index}`,
    flipped: false,
    backImage: cardBack,
    frontImage: data.image,
    sound: data.sound,
    clickable: true,
    matchingCardId: index < cardData.length ? `card${index + cardData.length}` : `card${index - cardData.length}`,
}));

