class Enemy extends Model {

    constructor(x, y, speed, target, hp, damage) {
        super(x, y);
        this.speed = speed;
        this.speedVector = new Vector(0, 0);
        this.target = target;
        this.animation = null;
        this.orientation = null;

        this.maxHp = hp;
        this.hp = this.maxHp;
        this.damage = damage;

        // bars
        this.barCluster = new BarCluster(this);
        this.barCluster.addBar("HP", "hp", "maxHp", 80, 12,
            "purple", "black");
    }

    setOrientation() {
        let xOffsetFromTarget = this.position.x - this.target.position.x;
        let yOffsetFromTarget = this.position.y - this.target.position.y;
        let xOffsetVal = Math.abs(xOffsetFromTarget);
        let yOffsetVal = Math.abs(yOffsetFromTarget);

        if(yOffsetVal > xOffsetVal && yOffsetFromTarget > 0)
            this.orientation = orientation.UP;
        else if(xOffsetVal > yOffsetVal && xOffsetFromTarget < 0)
            this.orientation = orientation.RIGHT;
        else if(yOffsetVal > xOffsetVal && yOffsetFromTarget < 0)
            this.orientation = orientation.DOWN;
        else
            this.orientation = orientation.LEFT;
    }

    getVectorToTarget() {
        return new Vector(this.target.position.x - this.position.x,
            this.target.position.y - this.position.y).normalize();
    }

    update() {
        // set the orientation
        this.setOrientation();
        this.animation.setAnimation(this.orientation);

        // move
        this.speedVector = this.getVectorToTarget().dotProduct(this.speed);
        this.position = this.position.add(this.speedVector);

        // update the animation
        this.animation.update();

        // update bar cluster
        this.barCluster.update();
    }

    draw(camera) {
        this.animation.draw(camera);
        this.barCluster.draw(camera);
    }

    takeDamage(damage) {
        if(this.hp - damage < 0)
            this.hp = 0;
        else
            this.hp -= damage;
    }

}