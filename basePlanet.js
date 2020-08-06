class BasePlanet{
    constructor(x, y, radius){
        var planet_options = {
            timescale: 0.8
        }

        this.body = Bodies.circle(x, y, radius, planet_options);

        this.radius = radius;
        this.image = loadImage("sprites/base.png");

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
		
		push();
		imageMode(CENTER);
		translate(pos.x, pos.y);
		image(this.image, 0, 0, this.radius, this.radius);
		pop();
    }
}