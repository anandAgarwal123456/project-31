class Plinko{
    constructor(x,y,r) {
        var options ={
            isStatic:true
        }
      
        this.body=Bodies.circle(x,y,r,options);
        this.x=x;
        this.y=y;
        this.r=r;
        World.add(world,this.body);

    }

    display() {
        var pos= this.body.position;
        push();
        fill("pink");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r,this.r);
        pop();
    }
}