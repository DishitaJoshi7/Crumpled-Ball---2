class Paper{
    constructor(x,y,r){
        var op = {
            'restitution' : 0.3,
            'friction' : 0.5,
            'density' : 0.5,
        }
        this.object = Bodies.circle(x, y,r/2, op );
        World.add(world, this.object);

        this.r = r
        //this.h = height;

        this.image = loadImage("paper.png");
    }
    display(){
    var pos = this.object.position;
      var angle = this.object.angle;
      push()
      translate(pos.x,pos.y)
     // angleMode(DEGREES)
    //  rotate(this.object.angle)
     imageMode(RADIUS)
      image(this.image,0,0,50,50);
      pop()
    }

   
}