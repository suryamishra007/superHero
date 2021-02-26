class Hero
{
    constructor(x,y,r)
    {
        var option = {

            density:0.5,
            frictionAir:0.005

        }
        this.x = x
        this.y = y
        this.r = r
        this.image = loadImage("Images/images/Superhero-01.png")
        
        this.body = Bodies.circle(this.x,this.y,this.r/2,option)
        World.add(world,this.body)

    }
    display()
    {
        
     var pos = this.body.position;
     var angle = this.body.angle;
     push() 
     translate(pos.x,pos.y)
    // rotate(angle)
     imageMode(CENTER)
     image(this.image,0,0,250,150)
     pop() 
    }
}