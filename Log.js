class Log {
    constructor(x, y, height,myangle) {
      var options = {
          'restitution':0.8,
          'friction':2.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 10, height, options);
      Matter.Body.setAngle(this.body,myangle);
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(5);
      stroke("green");
      fill(255);
      rect(0, 0, 10, this.height);
      pop();
    }
  };
  