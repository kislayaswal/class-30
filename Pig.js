class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
  }
display(){
  //if speed of pig is too low continue to display as before
if(this.body.speed < 3){
  super.display();
}//otherwise remove the pig if speed if high
else{
  World.remove(world,this.body);
}
}
};