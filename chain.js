class chain {
constructor(bodyA,bodyB){
var options = {
bodyA:bodyA,
bodyB:bodyB,
'stiffness': 0.4,
'length': 50
}
this.chain = Constraint.create(options)
World.add(world , this.chain)
}
Display(){
    strokeWeight(2);
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
  





}
}