class Game{
    constructor(){
        
    }
    getState(){
        var dbref=database.ref('gameState');
        dbref.on("value", function(data){gameState=data.val()});
    }
    updateState(state){
        database.ref('/').update({gameState:state});
      }
    start(){
        if(gameState==0){
            form = new Form();
            form.display();
          player = new Player();
          player.getCount();
        }
    }
    play(){
        form.hide();
        Player.getAllPlayersInfo()
        console.log(allPlayers)
        if(allPlayers!==undefined){
           var y=130;
           for(var plr in allPlayers){
              y=y+25
               text(allPlayers[plr].name+':'+allPlayers[plr].distance,120,y)
           }
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){player.distance+=50
            player.update();
        }
        
    }



}