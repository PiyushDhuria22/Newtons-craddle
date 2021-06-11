class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
    this.offsetX=offsetX;
    this.offsetY=offsetY;
    
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        //var x2=pointB.x+;
        //var y2 =pointB.y+this.offsetY
        strokeWeight(2);
        fill("green");
        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY)

    }
}