let cards=[]
let sum=0;
let hasblackJack=false;
let isAlive=false;


let messageEl=document.getElementById('message-el')
let sumEl=document.getElementById('sum-el')
let cardsEl=document.getElementById('cards-el')

let player={
    name:"Per",
    chips:149
}


let playerEl=document.getElementById("player-el")
playerEl.textContent= player.name +":"+ player.chips

let message="" ;
function startGame(){
    isAlive=true;
    let firstCard=getRandomNumber();
    let secondCard=getRandomNumber();
    sum = firstCard +secondCard;
    cards=[firstCard,secondCard]
     renderGame();
}


function getRandomNumber(){
    let randomNumber=Math.floor(Math.random()*13)+1
     if(randomNumber >10){
        return 10
    }else if(randomNumber===1){
        return 11
    }else{
        return randomNumber
    }
}
function renderGame(){
    cardsEl.textContent='Cards:' 
    for(let i=0;i<cards.length;i++){
   cardsEl.textContent += cards[i] +" "
}
    sumEl.textContent='Sum:'+ sum;

    if(sum<=21){
        message="Do you want to draw a new card";
    }else if(sum===21){
        message="Wohoo! you won a Black Jack";
        hasblackJack=true;
    }else{
        message="you are out of the game";
        isAlive=false;
    }
    messageEl.textContent=message;

}
function newCard(){
    if(isAlive===true && hasblackJack===false){
        let newNo=getRandomNumber();
        sum += newNo;
        cards.push(newNo);
        renderGame();
    }
    
}


