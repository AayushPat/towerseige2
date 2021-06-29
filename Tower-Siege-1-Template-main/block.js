class Block {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.8,
      friction: 1
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.image = loadImage("block.png");
    this.visibility = 255
  }
  display() {
    var angle = this.body.angle;
    var pos = this.body.position;

    if (this.body.speed > 5) {
      push();
      World.remove(world, this.body);
      this.visibility -= 3;
      tint(255, this.visibility)
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
    }
    else {
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
}
