class Dustbin {
    constructor() {
      side1 = new Ground(900,370,200,20,"white");
      side2 = new Ground(800,320,20,100,"white");
      side3 = new Ground(1000,320,20,100,"white");
      this.image = loadImage("dustbingreen.png");
    }
    display(){
      side1.display();
      side2.display();
      side3.display();
      image(this.image, 790, 270, 220, 110);
    }
  };
  