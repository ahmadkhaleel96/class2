'use strict';
var grade =0; // the score of the  guess game 

// the name question

var name = prompt('Give me that amazing Name of yours');
alert(name + ' What a lovely name indeed! you should be proud of it!!');

confirm('now it\'s time to use that pink thing of yours (in your skull!) and let us have a Know About me (ME THE OWNER NOT YOU !!) game ...you have no choice bro. please anwser the folowing questions using yes/no or y/n');

// question 1 abd added the fuction named qWeird

function qWeird () {
  var weird = prompt('am i a weird person?');
  // console.log(weird.toUpperCase())
  if (weird.toUpperCase() == 'YES' || weird.toUpperCase() == 'Y') {
    grade++ ;
    alert('that is correct!! I am weird just super weird');
  } else {
    alert(' you don\'t know me do you? based on a very long and complicated studies and forums it is proven that i am wierd');
  }
} qWeird();

// question 2 abd added the fuction named qNerd 

function qNerd () {
  var nerd = prompt('am i a movie, series, anime Nerd?');
  // console.log(nerd.toUpperCase())
  if (nerd.toUpperCase() == 'YES' || nerd.toUpperCase() == 'Y') {
    grade++ ;
    alert('that is correct!!, i am the biggest movies, series and anime geek in this plant!!');
  } else{
    alert(' i guess watching 131 movies, 2 series, 5 Animee. in a 25 days does not qualify me to be a nerd IDK!!!');
  }
}qNerd();

// question 3 abd added the fuction named qLike

function qLike () {
  var like = prompt('do i like people?');
  // console.log(like.toUpperCase())
  if (like.toUpperCase() == 'NO' || like.toUpperCase() == 'N') {
    grade++;
    alert('yeah i don\'t like people very much, but the frame rate, sharpness, drawing and frame smoothness always intreset me!!');
  } else{
    alert('REALLY, lets us think for a bit if i like people why would i do a Know About me game on a random website');
  }
}qLike();

// question 4 abd added the fuction named qHabit

function qHabit () {
  var habit = prompt('am i a creature of habit?');
  // console.log(habit.toUpperCase())
  if (habit.toUpperCase() == 'NO' || habit.toUpperCase() == 'N') {
    grade ++;
    alert('NO I am not, I hate routine very much because it\'s a creativity killer!!!');
  } else{
    alert('i love my creativity!!! I AM NOT a routine guy!!');
  }
}qHabit();

// question 5 abd added the fuction named qPrompt

function qPrompt(){
  var film = prompt('do i love filmmaking?');
  // console.log(film.toUpperCase())
  if (film.toUpperCase() == 'YES' || film.toUpperCase() == 'Y') {
    grade++ ;
    alert('Filmmaking is MY TRUE passion i just love it, and photography too!!');
  } else{
    alert('dude, you should read and develope your mind and train with those bald monk dudes, to know i love filmmaking!!');
  }
}qPrompt();

// question 6 (guess the number game) abd added the fuction named gussGame

function gussGame(){
  var guess = prompt('guess a number between 1 and 10');
  for ( var i=0; i<=2 ; i++ ){

    if (guess <= 5 && guess >= 1){
      guess = prompt('too low');
    } else if (guess >=7 && guess <=10){
      guess =prompt('too high');
    } else if(guess == 6){
      grade++ ;
      alert('you are correct! the answer is 6');
      break;
    } else {
      guess = prompt('please choose a number betwwen 1 and 10');
    }
    if (i == 2){
      alert('the answer is: 6');
    } }
}gussGame();

// question 7 (the multiple answer question) abd added the fuction named arreyQuestion

function arreyQuastion () {
  var arr = ['architecture','music','drawing','sculpture','poetry','dance','cinema'];
  var art = prompt('name one of the seven arts');
  var arts = art.toLowerCase();
  for (var i = 0; i <=4; i++){
    if (arts == arr[0] || arts == arr[1] || arts == arr[2] || arts == arr[3] || arts == arr[4] || arts == arr[5] || arts == arr[6]) {
      grade++ ;
      alert('you are correct! ' + arts + ' is a bueatiful art');
      break ;
    } else {
      prompt('sorry incorrect answer please think harder... OR I SWEAR TO GOD I WILL JUMP OUT OF THE SCREEN AND JUST STAIR AT YOU!!!');

    }
    if (i ==4){
      alert('it seems that you don\'t know the answer, LIKE WHAT THE HELL!!!! LIKE WHAT!!! anyway the answers are: architecture, music, drawing, sculpture, poetry, dance and cinema. ... your grade is:' + grade );
    }}
  }arreyQuastion();

  // to show the answer on the website
  
  document.write('your grade is: ' + grade + ' out of 7');
