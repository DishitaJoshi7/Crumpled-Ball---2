class Dustbin{
        constructor(x,y,w,h){
          var op = {
            //'restitution' : 0.8,
            //'friction' : 0.3,
            //'density' : 2.0,
       }
     this.dustbin = Bodies.rectangle(x,y,w,h,{isStatic : true});
     World.add(world, this.dustbin);

     this.rightside = Bodies.rectangle(668,297,10,70,{isStatic : true});
     World.add(world, this.rightside);

     this.leftside = Bodies.rectangle(495,297,10,70,{isStatic : true});
     World.add(world , this.leftside);

     this.w = w;
     this.h = h;

      this.image = loadImage("dustbingreen.png");
     

   } 
     display(){
        var pos = this.dustbin.position;

          


        rectMode(CENTER);
        /*rect(pos.x,pos.y,this.w,this.h);
        rect(495,297,10,70);
        rect(668,297,10,70);*/
        
          
        imageMode(CENTER)
        image(this.image,575,295,this.w,100);
        
       
     }

}
