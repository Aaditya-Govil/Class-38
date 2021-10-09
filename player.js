class Player{
constructor(){
    this.name=null
    this.index=null
    this.distance=0;
};
getCount(){
    var dbref=database.ref('playerCount');
    dbref.on("value", function(data){playerCount=data.val()});
}
updateCount(count){
 database.ref("/").update({
     playerCount:count
 })
}
update(){
    var playerIndex="players/player"+playerCount;
    database.ref(playerIndex).update({
        name:this.name,distance:this.distance
    })
}
static getAllPlayersInfo(){
 var infoRef=database.ref('players')
     infoRef.on('value',data=>{
         allPlayers=data.val();

     })

    }

}