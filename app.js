/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,activeplayer,roundscore,score,gameplaying;

newgame();

/*document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';*/


document.querySelector('.btn-roll').addEventListener('click',function(){
	if(gameplaying){
	var dice=Math.floor(Math.random()*6+1);
	var diceDom=document.querySelector('.dice');
	diceDom.style.display='block';
	diceDom.src='dice-' + dice + '.png';
	if(dice!=1){
		roundscore+=dice;
		document.querySelector('#current-'+activeplayer).textContent=roundscore;
	}else {
		//next player
		diceDom.style.display='none';
		document.querySelector('#current-' + activeplayer ).textContent='0';
		roundscore=0;
		document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
		activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
		document.querySelector('.player-'+activeplayer+'-panel').classList.add('active');

	}
	}
});

document.querySelector('.btn-hold').addEventListener('click',function(){
	if(gameplaying){
	document.querySelector('.dice').style.display='none';
	scores[activeplayer]+=roundscore;
	document.getElementById('score-'+activeplayer).textContent=scores[activeplayer];
	roundscore=0;
	if(scores[activeplayer]>=20){
		document.getElementById('name-'+activeplayer).textContent='Winner!';
		document.querySelector('.dice').style.display='none';
		document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
		document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
		gameplaying=false;
	}
	else{
		nextPlayer();
	}
	/*scores[activeplayer]=score;
	if(scores[activeplayer]>=100)*/
	}
});
function nextPlayer(){
	document.querySelector('#current-' + activeplayer ).textContent='0';
	document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
	activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
	document.querySelector('.player-'+activeplayer+'-panel').classList.add('active');
	document.querySelector('.dice').style.display='none';
}




document.querySelector('.btn-new').addEventListener('click',function(){
	newgame();
});




function newgame(){
	gameplaying=true;
	scores =[0,0];
	roundscore=0;
	activeplayer=0;
	document.querySelector('.dice').style.display='none';
	document.getElementById('score-0').textContent='0';
	document.getElementById('score-1').textContent='0';
	document.getElementById('current-0').textContent='0';
	document.getElementById('current-1').textContent='0';
	document.querySelector('.player-'+activeplayer+'-panel').classList.toggle('active');

	document.querySelector('.player-'+activeplayer+'-panel').classList.toggle('active');
	document.querySelector('#name-1').textContent='Player 2';
	document.querySelector('#name-0').textContent='Player 1';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}
