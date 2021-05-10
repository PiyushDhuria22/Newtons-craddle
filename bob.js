class Bob{
    constructor(x, y,radius){
      var options={
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2,

      }
      this.x=x;
      this.y=y;
      this.radius=radius;
     // this.image=loadImage("paper.png");
      this.body=Bodies.circle(this.x,this.y,(this.radius-20)/2,options);
      World.add(world,this.body);
    
          }
          display(){
            var bobpos=this.body.position;
            push();
          translate(bobpos.x,bobpos.y)
         //console.log("paper");
         // strokeWeight(3);
         // fill("red");
         imageMode(CENTER);
         image(this.image,0,0,this.radius,this.radius);
      pop();
          }
  }