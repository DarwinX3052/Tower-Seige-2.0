class Block{
    constructor(x, y, width, height) {
        var options = {
          'restitution':0.4,
          'friction':0
        }
        this.visibility = 255;
        this.image = loadImage("block.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){

        if (this.body.speed < 3){
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(this.image, 0, 0, 30, 40);
          rect(0,0,this.width, this.height);
          pop();
        } else{
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility - 2;
          tint(255, this.visibility);
          image(this.image, this.body.position.x, this.body.position.y, 30, 40);
          pop();
        }
      }
}
