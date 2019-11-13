'use strict';
var grade =0;
var name = prompt('Give me that amazing Name of yours');
alert(name + ' What a lovely name indeed! you should be proud of it!!');

confirm('now it\'s time to use that pink thing of yours (in your skull!) and let us have a Know About me (ME THE OWNER NOT YOU !!) game ...you have no choice bro. please anwser the folowing questions using yes/no or y/n');

function qWeird () {
  var weird = prompt('am i a weird person?');
  // console.log(weird.toUpperCase())
  if (weird.toUpperCase() == 'YES' || weird.toUpperCase() == 'Y') {
    grade= grade + 1;
    alert('that is correct!! I am weird just super weird... your grade is: ' + grade);
  } else {
    alert(' you don\'t know me do you? based on a very long and complicated studies and forums it is proven that i am wierd ... your grade is: ' + grade);
  }
}qWeird();

function qNerd () {
  var nerd = prompt('am i a movie, series, anime Nerd?');
  // console.log(nerd.toUpperCase())
  if (nerd.toUpperCase() == 'YES' || nerd.toUpperCase() == 'Y') {
    grade = grade + 1 ;
    alert('that is correct!!, i am the biggest movies, series and anime geek in this plant!! ... your grade is: ' + grade);
  } else{
    alert(' i guess watching 131 movies, 2 series, 5 Animee. in a 25 days does not qualify me to be a nerd IDK!!... you grade is: ' + grade);
  }
}qNerd();

function qLike () {
  var like = prompt('do i like people?');
  // console.log(like.toUpperCase())
  if (like.toUpperCase() == 'NO' || like.toUpperCase() == 'N') {
    grade = grade + 1;
    alert('yeah i don\'t like people very much, but the frame rate, sharpness, drawing and frame smoothness always intreset me!! your grade is: ' + grade);
  } else{
    alert('REALLY, lets us think for a bit if i like people why would i do a Know About me game on a random website your grade is: ' + grade);
  }
}qLike();

function qHabit () {
  var habit = prompt('am i a creature of habit?');
  // console.log(habit.toUpperCase())
  if (habit.toUpperCase() == 'NO' || habit.toUpperCase() == 'N') {
    grade = grade +1;
    alert('NO I am not, I hate routine very much because it\'s a creativity killer!!!.... your grade is: ' + grade);
  } else{
    alert('i love my creativity!!! I AM NOT a routine guy!! ... your grade is: ' + grade);
  }
}qHabit();

function qPrompt(){
  var film = prompt('do i love filmmaking?');
  // console.log(film.toUpperCase())
  if (film.toUpperCase() == 'YES' || film.toUpperCase() == 'Y') {
    grade = grade + 1;
    alert('Filmmaking is MY TRUE passion i just love it, and photography too!! ...your grade is: ' + grade);
  } else{
    alert('dude, you should read and develope your mind and train with those bald monk dudes, to know i love filmmaking!! your grade is: ' + grade);
  }
}qPrompt();

function gussGame(){
  var guess = prompt('guess a number between 1 and 10');
  for ( var i=0; i<=2 ; i++ ){

    if (guess <= 5 && guess >= 1){
      guess = prompt('too low');
    } else if (guess >=7 && guess <=10){
      guess =prompt('too high');
    } else if(guess == 6){
      grade = grade +1;
      alert('you are correct!... your grade is: ' + grade);
      break;
    } else {
      guess = prompt('please choose a number betwwen 1 and 10');
    }
    if (i == 2){
      alert('the answer is: 6... your grade is: ' + grade);
    } }
}gussGame();

function arreyQuastion () {
  var arr = ['architecture','music','drawing','sculpture','poetry','dance','cinema'];
  var art = prompt('name one of the seven arts');
  var arts = art.toLowerCase();
  for (var i = 0; i <=4; i++){
    if (arts == arr[0] || arts == arr[1] || arts == arr[2] || arts == arr[3] || arts == arr[4] || arts == arr[5] || arts == arr[6]) {
      grade = grade +1;
      alert('you are correct! ' + arts + ' is a bueatiful art...your grade is :' + grade);
      i = 10;
    } else {
      prompt('sorry incorrect answer please think harder... OR I SWEAR TO GOD I WILL JUMP OUT OF THE SCREEN AND JUST STAIR AT YOU!!!... your grade is: ' + grade);

    }
    if (i ==4){
      alert('it seems that you don\'t know the answer, LIKE WHAT THE HELL!!!! LIKE WHAT!!! anyway the answers are: architecture, music, drawing, sculpture, poetry, dance and cinema. ... your grade is:' + grade );
    }}

}arreyQuastion();
document.write('your grade is: ' + grade + ' out of 7');
