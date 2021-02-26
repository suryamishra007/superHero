class Box
{
    constructor(x,y,width,height)
    {
        var option = {

            
            restitution:0.2,
            density:0.5,
            friction:1

        }
        //this.x = x
        //this.y = y
        this.height = height
        this.width = width
        this.image = loadImage("Images/images/Monster-01.png")
        
        this.body = Bodies.rectangle(x,y,this.width,this.height,option)
        World.add(world,this.body)

    }
    display()
    {
        
        var pos = this.body.position;
        var angle = this.body.angle;
        push() 
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        fill("blue")
        image(this.image,0,0,this.width,this.height)
        pop() 
    }
}