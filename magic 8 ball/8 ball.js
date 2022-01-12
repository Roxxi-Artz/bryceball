let userName = '';

(userName === 'Jane') ? console.log(`Hello, ${userName}`) : console.log(`Hello!`);

const userQuestion = 'Will I become a werewolf tonight?';

console.log(`The user asked: ${userQuestion}`);



function eightBall(){
  
  let randomNumber = Math.floor(Math.random() * 8);

 if (randomNumber === 1) {
  document.getElementById('balltext').innerHTML = `Based`;
 }else if (randomNumber === 2){
  document.getElementById('balltext').innerHTML = `A man is only as big as his suit.`;
 }else if (randomNumber === 3){
  document.getElementById('balltext').innerHTML = `*leans forward, lips pursed* Can you say that again?`;
 }else if (randomNumber === 4){
  document.getElementById('balltext').innerHTML = `bro you sound like an npc right now`;
 }else if (randomNumber === 5){
  document.getElementById('balltext').innerHTML = `No. *does kickflip*`; 
 }else if (randomNumber === 6){
  document.getElementById('balltext').innerHTML = `Cringe`; 
 }else if (randomNumber === 7){
  document.getElementById('balltext').innerHTML = `lol`;
 }else if (randomNumber === 8){
  document.getElementById('balltext').innerHTML = `The answer to everything is inside your pen.`;
 }else{
  document.getElementById('balltext').innerHTML = `what did you actually just say, like please repeat yourself I dont understand.`;
 } 
}
