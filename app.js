'use strict';

var userName = prompt('What\'s your name?');
alert('Hello  ' + userName + ' Welcome to my about me page, I\'ll be asking a series of questions on your journey! Good Luck ');



var likesDirtBiking = prompt('Do you like dirt biking?');
// console.log('likesDirtBiking:' + likesDirtBiking);


likesDirtBiking = likesDirtBiking.toUpperCase();

if (likesDirtBiking === 'YES' || likesDirtBiking === 'Y') {
  alert('Me too I\'ve dirt biked ever since I was a little kid.');
} else if(likesDirtBiking === 'NO'){
  alert('That\'s okay, I really like doing anything.');
}

var likesLearningNewThings = prompt('Do you like learning new things?');
// console.log('likesLearningNewThings:' + likesLearningNewThings);



likesLearningNewThings = likesLearningNewThings.toUpperCase();

if (likesLearningNewThings === 'YES' || likesLearningNewThings === 'Y') {
  alert('That\'s awesome so do I, learning gives us the ability to make a difference in a world thank is constantly changing. Be proud at you willingness to learn and process new things.');
} else if(likesLearningNewThings === 'NO' || likesLearningNewThings === 'N') {
  alert('That\'s okay it\'s not meant for everybody.');
}



var likesTraveling = prompt('Do you like to travel?');
// console.log('likesTraveling:' + likesTraveling);


likesTraveling = likesTraveling.toUpperCase();

if (likesTraveling === 'YES' || likesTraveling === 'Y') {
  alert('Traveling gives amazing experiences, my favorite place is northern Greenland');
} else if (likesTraveling === 'NO' || likesTraveling === 'N') {
  alert('Traveling can be pricey and time consuming, I also adventure in around Washington as well want to know of any cool places slack me.');
}



var likesDogs = prompt('Do you like dogs?');
// console.log('likesDogs:' + likesDogs);



likesDogs = likesDogs.toUpperCase();

if (likesDogs === 'YES' || likesDogs === 'Y' ) {
  alert('Me too, I have two dogs a Belgian Malinois and a Pit Bull mix rescue.');
} else if(likesDogs === 'NO' || likesDogs === 'N') {
  alert('There always has to be one cat person lol, kidding I\'m and animal lover no matter what I just prefer dogs.');
}


var WearsGlasses = prompt('Do I wear glasses?');
// console.log('WearsGlasses:' + WearsGlasses);


WearsGlasses = WearsGlasses.toUpperCase();

if (WearsGlasses === 'YES') {
  alert('You\'re right, my eyesight started going bad last year, now it\'s mandatory I have to wear them, atleast that\'s what the dmv said.');
} else if (WearsGlasses === 'NO' || WearsGlasses === 'N'); {
  alert('Incorrect better luck next time.');
}

alert('Thank you for answering my questions, enjoy my about me ' +userName+ ' ! ');

