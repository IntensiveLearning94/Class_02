'use strict';

var myScore = 0;

var userName = prompt('What\'s your name?');
alert('Hello  ' + userName + ' Welcome to my about me page, I\'ll be asking a series of questions on your journey! Good Luck ');



var likesDirtBiking = prompt('Do I like dirt biking?');
// console.log('likesDirtBiking:' + likesDirtBiking);


likesDirtBiking = likesDirtBiking.toUpperCase();

if (likesDirtBiking === 'YES' || likesDirtBiking === 'Y') {
  alert('Yes, I\'ve dirt biked ever since I was a little kid.');
  myScore += 1;
} else if (likesDirtBiking === 'NO') {
  alert('That\'s okay, I really like doing anything.');
}

var likesLearningNewThings = prompt('Do I like learning new things?');
// console.log('likesLearningNewThings:' + likesLearningNewThings);



likesLearningNewThings = likesLearningNewThings.toUpperCase();

if (likesLearningNewThings === 'YES' || likesLearningNewThings === 'Y') {
  alert('Yes, learning gives us the ability to make a difference in a world thank is constantly changing. Be proud at you willingness to learn and process new things.');
  myScore += 1;
} else if (likesLearningNewThings === 'NO' || likesLearningNewThings === 'N') {
  alert('Wrong, it\'s okay this game isn\'t meant for everybody.');
}



var likesTraveling = prompt('Do I like to travel?');
// console.log('likesTraveling:' + likesTraveling);


likesTraveling = likesTraveling.toUpperCase();

if (likesTraveling === 'YES' || likesTraveling === 'Y') {
  alert('Yes, Traveling has given me amazing experiences, my favorite place is northern Greenland');
  myScore += 1;
} else if (likesTraveling === 'NO' || likesTraveling === 'N') {
  alert('Ummmmmmm Wrong!!!!');
}



var likesDogs = prompt('Do I like dogs?');
// console.log('likesDogs:' + likesDogs);



likesDogs = likesDogs.toUpperCase();

if (likesDogs === 'YES' || likesDogs === 'Y') {
  alert('Heck Yeah, I have two dogs a Belgian Malinois and a Pit Bull mix rescue.');
  myScore += 1;
} else if (likesDogs === 'NO' || likesDogs === 'N') {
  alert('You are incorrect! better luck next time.');
}


var WearsGlasses = prompt('Do I wear glasses?');
// console.log('WearsGlasses:' + WearsGlasses);


WearsGlasses = WearsGlasses.toUpperCase();

if (WearsGlasses === 'YES' || WearsGlasses === 'Y') {
  alert('You\'re right, my eyesight started going bad last year, now it\'s mandatory I have to wear them, atleast that\'s what the dmv said.');
  myScore += 1;
} else if (WearsGlasses === 'NO' || WearsGlasses === 'N'); {
  alert('Incorrect better luck next time.');
}


alert('Guess a number 0-10, you will have 3 attempts');


for (var i = 0; i < 4; i++) {

  var correctNumber = 6;
  var attempt = parseInt( prompt('Pick a Number!') );

  if (correctNumber === attempt) {
    alert('Lucky guess lol, you got it right!');
    break;

  } else if (correctNumber < attempt) {
    alert('To high please try again!');

  } else if (correctNumber > attempt);
  alert('To low please try again!');

}



alert( 'Thank you for answering my questions' + userName + ',' + 'Your score is! ' + myScore);
