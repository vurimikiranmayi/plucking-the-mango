class Launcher{
	constructor(bodyA,pointB){
		var options={
			bodyA:bodyA,
            pointB:pointB,
			stiffness:0.04,
            length:10,
			}
         this.bodyA=bodyA   
		this.pointB=this.pointB
        this.launcher=Constraint.create(options);
        World.add(world,this.launcher);
	}

    fly(){
        this.launcher.bodyA=null;
    }

    attach(body){
        this.launcher.bodyA=body;
        
    }

	display(){
    if(this.launcher.bodyA){
	var pointA = this.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(4);
   // line(this.bodyA.position.x,this.bodyA.position.y,pointB.x,pointB.y);
    }
 }
}