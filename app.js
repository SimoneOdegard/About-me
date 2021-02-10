'use strict';

let userName = prompt('What is your name?');
alert ('Welcome to my site, ' + userName + '!');

let favoriteColor = prompt('Is my favorite color pink?');
let lowerFavoriteColor = favoriteColor.toLowerCase();

switch (lowerFavoriteColor) {
    case 'yes':
        //console.log ('You are correct!');
        alert ('Correct!');
        break;
    case 'y':
        //console.log ('You are correct!');
        alert ('Correct!');
        break;
    case 'true':
        //console.log ('You are correct!')
        alert ('Correct!');
        break;
    case 't':
        //console.log ('You are correct!')
        alert ('Correct!');
        break;
    default:
        //console.log ('Incorrect. Pink is my favorite color.');
        alert ('Incorrect. Pink is my favorite color.');
}

let university = prompt('Did I graduate from Western Washington University?');
let lowerUniversity = university.toLowerCase();

switch (lowerUniversity) {
    case 'no':
        //console.log ('You are correct!');
        alert ('Correct!');
        break;
    case 'n':
        //console.log ('You are correct!');
        alert ('Correct!');
        break;
    case 'false':
        //console.log ('You are correct!');
        alert ('Correct!');
        break;
    case 'f':
        //console.log ('You are correct!');
        alert ('Correct!');
        break;
    default:
       // console.log ('Incorrect, I graduated from the University of Washington.');
       alert ('Incorrect, I graduated from the University of Washington!');
}

let dance = prompt('Do I teach dance?');
let lowerDance = dance.toLowerCase();

switch (lowerDance) {
    case 'yes':
        //console.log ('Correct!');
        alert ('Correct!');
        break;
    case 'y':
        //console.log ('Correct!');
        alert ('Correct!');
        break;
    case 'true':
        //console.log ('Correct!');
        alert ('Correct!');
        break;
    case 't':
        //console.log ('Correct!');
        alert ('Correct!');
        break;
    default:
        //console.log ('Incorrect, I teach dance!');
        alert ('Incorrect, I teach dance!');

}

let pets = prompt('Do I have pets?');
let lowerPets = pets.toLowerCase();

switch (lowerPets) {
    case 'yes':
        //console.log ('Correct!');
        alert ('Correct!');
        break;
    case 'y':
        //console.log ('Correct!');
        alert ('Correct!');
        break;
    case 'true':
        //console.log ('Correct!');
        alert ('Correct!');
        break;
    case 't':
        //console.log ('Correct!');
        alert ('Correct!');
    default:
        //console.log ('Incorrect, I have 3 cats and a dog.');
        alert ('Incorrect, I have 3 cats and a dog.')
}

let renton = prompt('Do I live in Burien?');
let lowerRenton = renton.toLowerCase();

switch (lowerRenton) {
    case 'no':
        //console.log ('Correct!');
        alert ('Correct!');
        break;
    case 'n':
        //console.log ('Correct!');
        alert ('Correct!');
        break;
    case 'false':
        //console.log ('Correct!');
        alert ('Correct!');
        break;
    case 'f':
        //console.log ('Correct!');
        alert ('Correct!');
        break;
    default:
        //console.log ('Incorrect, I live in Renton.');
        alert ('Incorrect, I live in Renton.')
}

let userAnswer = parseInt( prompt('What is my favorite number between 1-10?'))
let guessAmount = 4
let correctAnswer = 7
console.log (correctAnswer);

for (let i = 0; i < guessAmount; i += 1){
    if (userAnswer === correctAnswer){
        alert('You are correct!');
        break;
    } else if (userAnswer < correctAnswer){
        alert('That is too low.');
    } else if (userAnswer > correctAnswer){
        alert('That is too high.');
    } 
    if (i < guessAmount - 1){
    userAnswer = parseInt( prompt('What is my favorite number between 1-10?'))
    }
}
alert ('Nice job at guessing the number. The correct number is 7.')

alert ('Thanks for playing my game, ' + userName)