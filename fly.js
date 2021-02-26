class Fly{
    constructor(bodyA,pointB)
    {
        var option = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.5,
            length:400
        }
        this.pointB  =pointB
        
        this.rope = Constraint.create(option)
        World.add(world,this.rope)
    }
    display()
    {
        var pointA = this.rope.bodyA.position
        var pointB = this.pointB
        push()
        strokeWeight(3)
        stroke("black")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop()
    }
    
}