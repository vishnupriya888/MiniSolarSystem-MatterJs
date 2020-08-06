class Sun{
    constructor(x, y, radius){
        var sun_options = {
            isStatic: true
        }

        this.body = Bodies.circle(x, y, radius, sun_options);

        this.width = radius;
        this.image = loadImage("sprites/sun.png");
    }

    display(){
        var pos = this.body.position;

		imageMode(CENTER);
		image(this.image, pos.x, pos.y, this.width, this.width);
    }
}