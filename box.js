/*class Box  {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/wood1.png");
    }
  
  };
 */

  class Box{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visiblity=225
    }/*
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rect(0, 0, this.width, this.height);
      pop();
    }*/
    display(){
      console.log(this.body.speed);
      if(this.body.speed <8){
      var angle = this.body.angle;
      
      push();
      translate(this.body.position.x, this.body.position.y);
     
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
    }else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity -3;
      pop();

    }
  }
 score(){
  if(this.Visiblity<0 && this.Visiblity>-10){
    score++
  }
}
  }



