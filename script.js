'use strict';

//Selecting Elements
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');
const score0El=document.getElementById('score--0');
const score1El=document.getElementById('score--1');
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');

const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

let scores,currentScore,activePlayer,playing;

//Starting conditions
const init=function(){
    scores=[0,0];
    currentScore=0;
    activePlayer=0;
    playing=true;

    score0El.textContent=0;
    score1El.textContent=0;
    current0El.textContent=0;
    current1El.textContent=0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}
init();

const switchPlayer=function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore=0;
    activePlayer= activePlayer=== 0 ? 1 :0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

function roll(){
    if(playing){
        const dice=Math.trunc(Math.random()*6)+1;
        diceEl.classList.remove('hidden');
        diceEl.src=`dice-${dice}.png`;
        if(dice!==1){
            currentScore+=dice;
            document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        }
        else{
            switchPlayer();
        }
    }
}

function hold(){
    if(playing){
    scores[activePlayer]+=currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
        if(scores[activePlayer]>=100){
            playing=false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        else{
        switchPlayer();
        }
    }
}
// let curScoreP1=0;
// const curScore1=function (curScoreP1){ document.querySelector('.current-score').textContent=curScoreP1; }
// const curScore2=function(curScoreP2){ document.querySelector('.current-score').textContent-curScoreP2;}
// const score=function(scoreP1){ document.querySelector('.score').textContent=scoreP1; }
// let curScoreP2=0;
// let active=true;
// let activePlayer=0;

// function roll() {
//     let number=Math.trunc(Math.random()*6)+1;
//     dice.src=`dice-${number}.png`;
//     if(number===1){
//         curScoreP1=0;
//         curScore1(curScoreP1);
//         activePlayer=activePlayer===0? 1:0;
//     }else{
//         curScoreP1+=number;
//         curScore1(curScoreP1);
//         console.log(curScoreP1);
//     }
// }

// let player1=document.querySelector('.player--0');
// let player2=document.querySelector('.player--1');
// let activeClass='player--active';

// function hold(){
//     score(curScoreP1);
//     curScoreP1=0;
//     curScore1(curScoreP1);
//     if(active){
//         player1.classList.remove(activeClass);
//         player2.classList.add(activeClass);    
//         active=false;
//         console.log(active);
//     }
//     else{
//         player1.classList.add(activeClass);
//         player2.classList.remove(activeClass);
//         active=true;
//     }    
// }