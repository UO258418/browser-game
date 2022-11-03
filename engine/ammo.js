class Ammo extends Model {

    constructor(x, y, width, height, damage, speed) {
        super(x, y, width, height);
        this.damage = damage;
        this.speed = speed;
        this.speedVector = new Vector(0, 0);
    }

    setSpeedVector(x, y) {
        this.speedVector.x = x;
        this.speedVector.y = y;
        return this;
    }

}