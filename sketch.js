var database;
var gameState, playerCount;
var form, player, game;

gameState = 0;
allPlayers=[];
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);
game = new Game();
game.getState();
game.start();

  
}



function draw(){
  background("white");
 if(playerCount===2){
   game.updateState(1);
   gameState=1
 } 
    if(gameState===1){
       game.play();
    }
  
}


