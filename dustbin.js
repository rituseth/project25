class Dustbin {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
     this.body=body1;
     this.body=body2;
     this.body=body3;

      this.body1 = Bodies.rectangle(x,y,width,height,options);
      this.width = 200;
      this.height = 20;
      World.add(world,this.body1);
     
      this.body2 = Bodies.rectangle(x,y,width,height,options);
      this.width = 200;
      this.height = 20;
      World.add(world,this.body2);

      
      this.body3 = Bodies.rectangle(x,y,width,height,options);
      this.width =20;
      this.height = 80;
      this.image=loadImage("dustbingreen.png");
      World.add(world,this.body3);
  
    }
    display(){
      var pos =this.body.position
       
      fill ("white");
      image(this.image,pos.x, pos.y, 0,0);
    }
  }