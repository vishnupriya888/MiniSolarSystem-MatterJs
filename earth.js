class Earth extends BasePlanet{
    constructor(x, y, radius){
        super(x, y, radius);
        this.image = loadImage("sprites/earth.png");
    }

    display(){
        super.display();
    }
}