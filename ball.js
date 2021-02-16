class ball{
    constructor(x,y){
        var option = {
           isStatic : false,
           restitution : 0.3,
           friction : 0.5,
           density:1.2,
        }
        this.ball=Bodies.circle(x,y,7,option);
        World.add(world,this.ball)
    }
    display(){
        var pos= this.ball.position;
        ellipse(pos.x,pos.y);
        if(keyCode === UP_ARROW){
            Body.applyForce(this.ball,pos,{x:85,y:-85})
        }
    }
    
    
}