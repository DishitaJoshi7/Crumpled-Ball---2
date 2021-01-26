class Dustbin{
        constructor(x,y,w,h){
          var op = {
            //'restitution' : 0.8,
            //'friction' : 0.3,
            //'density' : 1.0,
       }
     this.dustbin = Bodies.rectangle(x,y,w,h,{isStatic : true});
     World.add(world, this.dustbin);

     this.rightside = Bodies.rectangle(680,250,20,100,{isStatic : true});
     World.add(world, this.rightside);

     this.leftside = Bodies.rectangle(480,250,20,100,{isStatic : true});
     World.add(world , this.leftside);

     this.w = w;
     this.h = h;

      this.image = loadImage("dustbingreen.png");
     

   } 
     display(){
        var pos = this.dustbin.position;
        imageMode(CENTER)
        image(this.image,580,250,150,180);
        
       
     }

}
