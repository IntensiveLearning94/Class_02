'use strict';

var myScore = 0;

var userName = prompt('What\'s your name?');
alert('Hello  ' + userName + ' Welcome to my about me page, I\'ll be asking a series of questions on your journey! Good Luck ');

var likesDirtBiking = prompt('Do I like dirt biking?');
// console.log('likesDirtBiking:' + likesDirtBiking);
function dirtBikes() {
  likesDirtBiking = likesDirtBiking.toUpperCase();
  if (likesDirtBiking === 'YES' || likesDirtBiking === 'Y') {
    alert('Yes, I\'ve dirt biked ever since I was a little kid.');
    myScore += 1;
  } else if (likesDirtBiking === 'NO') {
    alert('Wrong answer.');
  } else {
    alert('please respond with a yes or a no!');
  }
}
dirtBikes();
// for (var likesDirtBiking = yes; likesDirtBiking < 4; likesDirtBiking++);
// four guesses create a loop similar to above!



var likesLearningNewThings = prompt('Do I like learning new things?');
// console.log('likesLearningNewThings:' + likesLearningNewThings);

function learningNewThings() {

  likesLearningNewThings = likesLearningNewThings.toUpperCase();

  if (likesLearningNewThings === 'YES' || likesLearningNewThings === 'Y') {
    alert('Yes, learning gives us the ability to make a difference in a world thank is constantly changing. Be proud at you willingness to learn and process new things.');
    myScore += 1;
  } else if (likesLearningNewThings === 'NO' || likesLearningNewThings === 'N') {
    alert('Wrong, it\'s okay this game isn\'t meant for everybody.');
  }
}

learningNewThings();


var likesTraveling = prompt('Do I like to travel?');
// console.log('likesTraveling:' + likesTraveling);

function traveling() {

  likesTraveling = likesTraveling.toUpperCase();

  if (likesTraveling === 'YES' || likesTraveling === 'Y') {
    alert('Yes, Traveling has given me amazing experiences, my favorite place is northern Greenland');
    myScore += 1;
  } else if (likesTraveling === 'NO' || likesTraveling === 'N') {
    alert('Ummmmmmm Wrong!!!!');
  }
}
traveling();

var likesDogs = prompt('Do I like dogs?');
// console.log('likesDogs:' + likesDogs);

function animals() {

  likesDogs = likesDogs.toUpperCase();

  if (likesDogs === 'YES' || likesDogs === 'Y') {
    alert('Heck Yeah, I have two dogs a Belgian Malinois and a Pit Bull mix rescue.');
    myScore += 1;
  } else if (likesDogs === 'NO' || likesDogs === 'N') {
    alert('You are incorrect! better luck next time.');
  }
}
animals();

var wearsGlasses = prompt('Do I wear glasses?');
// console.log('WearsGlasses:' + WearsGlasses);

function glasses() {

  wearsGlasses = wearsGlasses.toUpperCase();

  if (wearsGlasses === 'YES' || wearsGlasses === 'Y') {
    alert('You\'re right, my eyesight started going bad last year, now it\'s mandatory I have to wear them, atleast that\'s what the dmv said.');
    console.log('glasses is answered correct.');
    myScore += 1;

  } else if (wearsGlasses === 'NO' || wearsGlasses === 'N') {
    console.log('answered no on glasases');
    alert('Incorrect better luck next time.');
  }
}
glasses();

alert('Guess a number 0-10, you will have 4 attempts');

function guessingGame() {
  for (var i = 0; i < 4; i++) {

    var correctNumber = 6;
    var attempt = parseInt(prompt('Pick a Number!'));

    if (correctNumber === attempt) {
      alert('Lucky guess lol, you got it right!');
      myScore += 1;
      break;

    } else if (correctNumber < attempt) {
      alert('To high please try again!');

    } else if (correctNumber > attempt);
    alert('To low please try again!');
  }
}
guessingGame();

function faveFlave() {
  for (var j = 0; j < 6; j++) {
    var guess = prompt('What\'s my favorite flavored icecream?');
    guess = guess.toLowerCase();
    var iceCream = ['chocolate', 'vanilla', 'strawberry', 'mint',];

    if (iceCream[0] === guess || iceCream[1] === guess || iceCream[2] === guess || iceCream[3] === guess) {
      alert('You got lucky!');
      console.log('Matched icecream');
      myScore += 1;
      break;
    } else {
      console.log('incorrect');
    }
  }
}
faveFlave();

alert('Thank you for answering my questions' + userName + ',' + 'Your score is! ' + myScore + ' out of 7.' );

