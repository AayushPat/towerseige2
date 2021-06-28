class SlingShot {
    constructor(point, objectA) {
        var options = {
            bodyA: objectA,
            pointB: point,
            stiffness: 0.4,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }
    fly() {
        this.sling.bodyA = null;
    }
    display() {
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            push()
            strokeWeight(4); fill("white");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop()
        }

    }

}