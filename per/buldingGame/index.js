let firstCard =10;
let secondCard = 11;
let message = ""
let isAlive = true;
let hasBlackJack = false;
let sum = firstCard + secondCard;


if(sum <= 20){
    message = "Do you want to draw a new card? ";
}else if(sum === 21){
   message ="Wohoo! You've got blackJack! ";
    hasBlackJack = true
}else{
  message = "You're out of the game";
    isAlive= false
}
console.log(message)