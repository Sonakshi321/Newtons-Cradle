class Bob {
    constructor(x, y,r) {
      var options = {
          isStatic:false,
          restitution:0.3,
   
          friction:0.5,
          density:1.2
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body = Bodies.circle(this.x,this.y,this.r/2, options);
      //this.image = loadImage("Images/paper.png");
          World.add(world, this.body);
  
    }
    display(){
      imageMode(CENTER);
          image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);
  
    }
  };
  