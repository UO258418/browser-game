class Ammo extends Model {

    constructor(origin, x, y, width, height, damage, speed, duration = Infinity) {
        super(x, y, width, height);
        this.origin = origin;
        this.duration = duration;
        this.damage = damage;
        this.speed = speed;
        this.speedVector = new Vector(0, 0);
        this.current = null;
        this.created = new Date();
        this.levelFunctions = [];
    }

    update() {
        this.current = new Date();
        let ellapsed = this.current - this.created;
        if(ellapsed >= this.duration) {
            gameLayer.removeFromCollection("ammo", this);
        }

        this.updateAfter();
    }

    updateAfter() {

    }

    setSpeedVector(x, y) {
        this.speedVector.x = x;
        this.speedVector.y = y;

        if(this.speedVector.x != 0 || this.speedVector.y != 0)
            this.speedVector = this.speedVector.normalize().dotProduct(this.speed);

        return this;
    }

    setLevelFunction(level, levelFunction) {
        this.levelFunctions[level - 1] = levelFunction.bind(this);
    }

    setLevel(level) {
        this.levelFunctions[level - 1]();
    }

}