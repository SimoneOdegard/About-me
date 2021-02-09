'use strict';

let userName = prompt('What is your name?');
alert ('Welcome to my site ' + userName + '!');

let favoriteColor = prompt('Is my favorite color pink?');
let lowerFavoriteColor = favoriteColor.toLowerCase();

switch (lowerFavoriteColor) {
    case 'yes':
        console.log ('You are correct!');
        break;
    case 'y':
        console.log ('You are correct!');
        break;
    case 'true':
        console.log ('You are correct!')
        break;
    case 't':
        console.log ('You are correct!')
        break;
    default:
        console.log ('Incorrect. Pink is my favorite color.');
}

let university = prompt('Did I graduate from Western Washington University?');
let lowerUniversity = university.toLowerCase();

switch (lowerUniversity) {
    case 'no':
        console.log ('You are correct!');
        break;
    case 'n':
        console.log ('You are correct!');
        break;
    case 'false':
        console.log ('You are correct!');
        break;
    case 'f':
        console.log ('You are correct!');
        break;
    default:
        console.log ('Incorrect, I graduated from the University of Washington.');
}

let dance = prompt('Do I teach dance?');
let lowerDance = dance.toLowerCase();

switch (lowerDance) {
    case 'yes':
        console.log ('Correct!');
        break;
    case 'y':
        console.log ('Correct!');
        break;
    case 'true':
        console.log ('Correct!');
        break;
    case 't':
        console.log ('Correct!');
        break;
    default:
        console.log ('Incorrect, I teach dance!');

}

let pets = prompt('Do I have pets?');
let lowerPets = pets.toLowerCase();

switch (lowerPets) {
    case 'yes':
        console.log ('Correct!');
        break;
    case 'y':
        console.log ('Correct!');
        break;
    case 'true':
        console.log ('Correct!');
        break;
    case 't':
        console.log ('Correct!');
    default:
        console.log ('Incorrect, I have 3 cats and a dog.');
}

let renton = prompt('Do I live in Burien?');
let lowerRenton = renton.toLowerCase();

switch (lowerRenton) {
    case 'no':
        console.log ('Correct!');
        break;
    case 'n':
        console.log ('Correct!');
        break;
    case 'false':
        console.log ('Correct!');
        break;
    case 'f':
        console.log ('Correct!');
        break;
    default:
        console.log ('Incorrect, I live in Renton');
}