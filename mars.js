class Mars extends BasePlanet{
    constructor(x, y, radius){
        super(x, y, radius);
        this.image = loadImage("sprites/mars.png");
    }

    display(){
        super.display();
    }
}