'use strict';

let finalScore = 0
let userName;

function nameFunc(){
    userName = prompt('What is your name?');
    alert ('Welcome to my site, ' + userName + '!');
}
nameFunc();

// QUESTION 1
function favoriteColorFunc(){
    let favoriteColor = prompt('Is my favorite color pink?');
    let lowerFavoriteColor = favoriteColor.toLowerCase();

    switch (lowerFavoriteColor) {
        case 'yes':
            alert ('Correct!');
            finalScore = finalScore + 1
            break;
        case 'y':
            alert ('Correct!');
            finalScore = finalScore + 1
            break;
        case 'true':
            alert ('Correct!');
            finalScore = finalScore + 1
            break;
        case 't':
            alert ('Correct!');
            finalScore = finalScore + 1
            break;
        default:
            alert ('Incorrect. Pink is my favorite color.');
    }
}
favoriteColorFunc();

// QUESTION 2
function universityFunc(){
    let university = prompt('Did I graduate from Western Washington University?');
    let lowerUniversity = university.toLowerCase();

    switch (lowerUniversity) {
        case 'no':
            alert ('Correct!');
            finalScore = finalScore + 1
            break;
        case 'n':
            alert ('Correct!');
            finalScore = finalScore + 1
            break;
        case 'false':
            alert ('Correct!');
            finalScore = finalScore + 1
            break;
        case 'f':
            alert ('Correct!');
            finalScore = finalScore + 1
            break;
        default:
        alert ('Incorrect, I graduated from the University of Washington!');
    }
}
universityFunc();

// QUESTION 3
function danceFunc(){
    let dance = prompt('Do I teach dance?');
    let lowerDance = dance.toLowerCase();

    switch (lowerDance) {
        case 'yes':
            alert ('Correct!');
            finalScore = finalScore + 1
            break;
        case 'y':
            alert ('Correct!');
            finalScore = finalScore + 1
            break;
        case 'true':
            alert ('Correct!');
            finalScore = finalScore + 1
            break;
        case 't':
            alert ('Correct!');
            finalScore = finalScore + 1
            break;
        default:
            alert ('Incorrect, I teach dance!');

    }
}
danceFunc();

// QUESTION 4
function petsFunc(){
    let pets = prompt('Do I have pets?');
    let lowerPets = pets.toLowerCase();

    switch (lowerPets) {
        case 'yes':
            alert ('Correct!');
            finalScore = finalScore + 1
            break;
        case 'y':
            alert ('Correct!');
            finalScore = finalScore + 1
            break;
        case 'true':
            alert ('Correct!');
            finalScore = finalScore + 1
            break;
        case 't':
            alert ('Correct!');
            finalScore = finalScore + 1
        default:
            alert ('Incorrect, I have 3 cats and a dog.');
    }
}
petsFunc();

// QUESTION 5
function rentonFunc(){
    let renton = prompt('Do I live in Burien?');
    let lowerRenton = renton.toLowerCase();

    switch (lowerRenton) {
        case 'no':
            alert ('Correct!');
            finalScore = finalScore + 1
            break;
        case 'n':
            alert ('Correct!');
            finalScore = finalScore + 1
            break;
        case 'false':
            alert ('Correct!');
            finalScore = finalScore + 1
            break;
        case 'f':
            alert ('Correct!');
            finalScore = finalScore + 1
            break;
        default:
            alert ('Incorrect, I live in Renton.');
    }
}
rentonFunc();

// QUESTION 6
function numberGame(){
    let userAnswer = parseInt( prompt('What is my favorite number between 1-10?'));
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
        userAnswer = parseInt( prompt('What is my favorite number between 1-10?'));
        }
    }
    alert ('Nice job at guessing the number. The correct number is 7.');
}
numberGame();



// QUESTION 7
function fruitGame(){
    let favoriteFruits = ['apple', 'banana', 'mango', 'grape', 'papaya', 'strawberry', 'orange']
    console.log ('favorite fruits', favoriteFruits);
    let fruitGuessAmount = 6

    for (let i = 0; i < fruitGuessAmount; i +=1){
        let fruitGuess = prompt ('What is my favorite fruit?');
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
    alert ('Nice job! I love all these fruits: ' + favoriteFruits);
}
fruitGame();

alert (finalScore + '/7 is your final score!');

alert ('Thanks for playing my game, ' + userName);