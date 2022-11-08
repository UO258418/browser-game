class Drop extends Model {

    constructor(x, y, width, height, speed, target, range, attribute, value) {
        super(x, y, width, height);
        this.speed = speed;
        this.speedVector = new Vector(0, 0);
        this.target = target;
        this.range = range;
        this.attribute = attribute;
        this.value = value;
    }

    update() {
        if(this.distanceToTarget(this.target) <= this.range) {
            this.speedVector = this.getVectorToTarget(this.target).dotProduct(this.speed);
            this.position = this.position.add(this.speedVector);
        }
    }

}