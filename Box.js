class Box {
    //constructor is used for intializing the properties 
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          isStatic: true
      }
      //create the body
      this.body = Bodies.rectangle(x, y, width, height, options);
      //define a way to change the width,color, and height, these are properties
      this.width = width;
      this.height = height;
      this.color = "orange"
      //add into world
      World.add(world, this.body);
    }
    //create a function to display
    display(){
      //create a shortcut to access position and angle of the body
      var pos =this.body.position;
      var angle = this.body.angle
      
      rectMode(CENTER);
      fill(this.color);
  
      //following makes it so the body topples when needed
        //push = saving the current settings
        //pop  = restoring the old settings(before push)
      push()
      //translates the origin to these coordinates
      translate(pos.x,pos.y)
      //rotates it at an angle
      rotate(angle)
      //rect cooridnates is 0,0 to rotate it around the center of the rectangle which is also the origin
      rect(0,0, this.width, this.height);
  
      pop()
      
    }
  };
  