'use strict';

var grade =0; // the score of the  guess game 

// the name question

  var name = prompt('Give me that amazing Name of yours');

  while(!isNaN(name) || name == ''){
    var name = prompt('Give me that amazing Name of yours');
  }
  
alert(`${name} what a lovely name!! you should be proud of it!! ... Unless you put random letter!!`);

confirm('now it\'s time to use that pink thing of yours (in your skull!), and let us have a Know About me (ME THE OWNER NOT YOU !!) game ...you have no choice bro. please anwser the folowing questions using yes/no or y/n and i will keep track of your grades.');

// question 1 abd added the fuction named qWeird

function qWeird () {
  var weird = prompt('am i a weird person?');
  // console.log(weird.toUpperCase())
  if (weird.toUpperCase() == 'YES' || weird.toUpperCase() == 'Y') {
    grade++ ;
    alert('that is correct!! I am weird just super weird... you get a point!!');
  } else {
    alert(' you don\'t know me do you? based on a very long and complicated studies and forums it is proven that i am wierd.. no point sorry.');
  }
} qWeird();

// question 2 abd added the fuction named qNerd 

function qNerd () {
  var nerd = prompt('am i a movie, series and anime Nerd?');
  // console.log(nerd.toUpperCase())
  if (nerd.toUpperCase() == 'YES' || nerd.toUpperCase() == 'Y') {
    grade++ ;
    alert('that is correct!!, i am the biggest movies, series and anime geek in this plant!!..here is a point for you!');
  } else{
    alert('i guess watching 131 movies, 2 series and 5 Animes. in 25 days does not qualify me to be a nerd IDK!!! ... no point for you!');
  }
}qNerd();

// question 3 abd added the fuction named qLike

function qLike () {
  var like = prompt('do i like people?');
  // console.log(like.toUpperCase())
  if (like.toUpperCase() == 'NO' || like.toUpperCase() == 'N') {
    grade++;
    alert('yeah i don\'t like people very much, but the frame rate, sharpness, drawing and frame smoothness always intreset me!!..for that you get a point');
  } else{
    alert('REALLY, lets us think for a bit if i like people why would i do a Know About me game on a random website?...no point for you!!');
  }
}qLike();

// question 4 abd added the fuction named qHabit

function qHabit () {
  var habit = prompt('am i a creature of habit?');
  // console.log(habit.toUpperCase())
  if (habit.toUpperCase() == 'NO' || habit.toUpperCase() == 'N') {
    grade ++;
    alert('NO I am not, I hate routine very much because it\'s a creativity killer!!! now because you know that take a point.. spend it on food only!!');
  } else{
    alert('i love my creativity!!! I AM NOT a routine guy!!...i wish i can take a point but no point for you');
  }
}qHabit();

// question 5 abd added the fuction named qPrompt

function qPrompt(){
  var film = prompt('do i love filmmaking?');
  // console.log(film.toUpperCase())
  if (film.toUpperCase() == 'YES' || film.toUpperCase() == 'Y') {
    grade++ ;
    alert('Filmmaking is MY TRUE passion i just love it, and photography too!!... for the love of filmmaking here is a point!');
  } else{
    alert('dude, you should read books and develope your mind and train with those bald monk dudes, to know i love filmmaking!!...i hope you figure out that you will not take a point!!!');
  }
}qPrompt();

// question 6 (guess the number game) abd added the fuction named gussGame

alert(`${name} how about two more questions? just for fun!!, don't worry they are just for fun, not about me!!.`);

function gussGame(){
  
  var guess = prompt('guess a number between 1 and 10');
  for ( var i=0; i<=2 ; i++ ){

    if (guess <= 5 && guess >= 1){
      guess = prompt('too low');
    } else if (guess >=7 && guess <=10){
      guess =prompt('too high');
    } else if(guess == 6){
      grade++ ;
      alert('you are correct! the answer is 6..here is a point!!');
      break;
    } else {
      guess = prompt('please choose a number betwwen 1 and 10');
    }
    if (i == 2){
      alert('i gave you 4 shots and you missed (good thing you are not a sniper!!), the answer is: 6...no point for you!! now give me 50 push ups!!');
    } }
}gussGame();

// question 7 (the multiple answer question) abd added the fuction named arreyQuestion

function arreyQuastion () {
  var arr = ['architecture','music','drawing','sculpture','poetry','dance','cinema'];
  var art = prompt('name one of the seven arts');
  var arts = art.toLowerCase();
  for (var i = 0; i <=4; i++){
    if (arts === arr[0] || arts === arr[1] || arts === arr[2] || arts === arr[3] || arts === arr[4] || arts === arr[5] || arts === arr[6]) {
      grade++ ;
      alert('you are correct! ' + arts + ' is a bueatiful art. the seven arts are:architecture, music, drawing, sculpture, poetry, dance and cinema! .... give me a point to give that amazing dude!!');
      break ;
    } else {
      prompt('sorry incorrect answer please think harder... OR I SWEAR TO GOD I WILL JUMP OUT OF THE SCREEN AND JUST STAIR AT YOU!!!');

    }
    if (i ==4){
      alert('it seems that you don\'t know the answer, LIKE WHAT THE HELL!!!! LIKE WHAT!!! anyway the answers are: architecture, music, drawing, sculpture, poetry, dance and cinema. dude work on yourself!! no point for you');
    }}
  }arreyQuastion();

  // final comment to thank the user and show him the grade. so many lies hahahaha 
  
  alert(`That was fun right? , now i think it's only right to see the website which has more information about me yaaay, and i would like to say... GET A LIFE U SAD, LONELY AND WEIRD DUDE, WHAT THE HELL ARE YOU DOING PLAYING A KNOW ABOUT ME GAME FOR A STRANGE DUDE ON THE INTERNET, GO FIND SOMEONE TO MAKE YOU HAPPY YOU WIERDO!! ... sorry dude please check my website and thank you dude. your grade is: .... look for it in the website (shameless plug)`)

  // to show the answer on the website

  document.write('your grade is: ' + grade + ' out of 7');
