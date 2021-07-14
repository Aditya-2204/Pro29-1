class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.image=loadImage('sprites/polygon.png');
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA=body
    }
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        imageMode(CENTER);
        image(this.sling, 100, 235);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(12);
            stroke(47, 22, 10);
            if(pointA.x>270){
                strokeWeight(3);
                line(pointA.x+20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+20, pointA.y, pointB.x+30, pointB.y-3);
                image(this.sling3, pointA.x+30, pointA.y-10, 15, 30);
            }
            else{
                strokeWeight(7);
                line(pointA.x-20, pointA.y, pointB.x-20, pointB.y+3);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y+3);
                image(this.sling3, pointA.x-30, pointA.y-10, 15, 30);
            }
            pop();
        }
    }
    
}