class Paper {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':0.7
    }
    this.body = Bodies.circle(x, y, 30,options);
    this.width = 30;
    this.height = 30;
    this.image = loadImage("paper.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle =this.body.angle;
    push ();
    translate (pos.x, pos.y);
    rotate (angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
};
