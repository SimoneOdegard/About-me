'use strict';

let userName = prompt('What is your name?');
alert ('Welcome to my site, ' + userName + '!');

// final score
let finalScore = 0

// QUESTION 1
let favoriteColor = prompt('Is my favorite color pink?');
let lowerFavoriteColor = favoriteColor.toLowerCase();

switch (lowerFavoriteColor) {
    case 'yes':
        //console.log ('You are correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
    case 'y':
        //console.log ('You are correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
    case 'true':
        //console.log ('You are correct!')
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
    case 't':
        //console.log ('You are correct!')
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
    default:
        //console.log ('Incorrect. Pink is my favorite color.');
        alert ('Incorrect. Pink is my favorite color.');
}

// QUESTION 2
let university = prompt('Did I graduate from Western Washington University?');
let lowerUniversity = university.toLowerCase();

switch (lowerUniversity) {
    case 'no':
        //console.log ('You are correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
    case 'n':
        //console.log ('You are correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
    case 'false':
        //console.log ('You are correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
    case 'f':
        //console.log ('You are correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
    default:
       // console.log ('Incorrect, I graduated from the University of Washington.');
       alert ('Incorrect, I graduated from the University of Washington!');
}

// QUESTION 3
let dance = prompt('Do I teach dance?');
let lowerDance = dance.toLowerCase();

switch (lowerDance) {
    case 'yes':
        //console.log ('Correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
    case 'y':
        //console.log ('Correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
    case 'true':
        //console.log ('Correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
    case 't':
        //console.log ('Correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
    default:
        //console.log ('Incorrect, I teach dance!');
        alert ('Incorrect, I teach dance!');

}

// QUESTION 4
let pets = prompt('Do I have pets?');
let lowerPets = pets.toLowerCase();

switch (lowerPets) {
    case 'yes':
        //console.log ('Correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
    case 'y':
        //console.log ('Correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
    case 'true':
        //console.log ('Correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
    case 't':
        //console.log ('Correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
    default:
        //console.log ('Incorrect, I have 3 cats and a dog.');
        alert ('Incorrect, I have 3 cats and a dog.')
}

// QUESTION 5
let renton = prompt('Do I live in Burien?');
let lowerRenton = renton.toLowerCase();

switch (lowerRenton) {
    case 'no':
        //console.log ('Correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
    case 'n':
        //console.log ('Correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
    case 'false':
        //console.log ('Correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
    case 'f':
        //console.log ('Correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
    default:
        //console.log ('Incorrect, I live in Renton.');
        alert ('Incorrect, I live in Renton.')
}

// QUESTION 6
let userAnswer = parseInt( prompt('What is my favorite number between 1-10?'))
let guessAmount = 4
let correctAnswer = 7
console.log (correctAnswer);

for (let i = 0; i < guessAmount; i += 1){
    if (userAnswer === correctAnswer){
        alert('You are correct!');
        finalScore = finalScore + 1
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

// QUESTION 7
let favoriteFruits = ['apple', 'banana', 'mango', 'grape', 'papaya', 'strawberry', 'orange']
console.log ('favorite fruits', favoriteFruits)
let fruitGuessAmount = 6

for (let i = 0; i < fruitGuessAmount; i +=1){
    let fruitGuess = prompt ('What is my favorite fruit?')
    for (let j = 0; j < favoriteFruits.length; j +=1){
        if (fruitGuess === favoriteFruits[j]){
            alert('You are correct!');
            finalScore = finalScore + 1
            i = fruitGuessAmount
            break;
        }
        if (j === favoriteFruits.length - 1){
            alert('That is yummy but not my favorite. Try again.');
        }
    }      
}
alert ('Nice job! I love all these fruits: ' + favoriteFruits)

alert (finalScore + '/7 is your final score!')

alert ('Thanks for playing my game, ' + userName)