class Form{
    constructor(){
        this.input= createInput('').attribute('placeHolder','Your Name');
        this.button = createButton('Start');
        this.greetings = createElement('h3');
    }    
    hide(){
        this.input.hide()
        this.button.hide()
        this.greetings.hide()
    }
        display(){
            let title = createElement('h1', 'Rolling Racers');
            title.style('color', '#00a1d3');
            title.position(130, 20);

            this.input.position(130, 100);
            this.input.size(100);
            
            this.button.position(160, 130);
            this.button.mousePressed(()=>{
                playerCount+=1;
                player.index=playerCount
                player.name=this.input.value()
                player.update();
                player.updateCount(playerCount);
                this.greetings.html('hello!'+player.name)
                this.greetings.position(130,50);
                this.input.hide();
                this.button.hide();
            });
        }


}