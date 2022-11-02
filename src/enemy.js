class Enemy extends Model {

    constructor(x, y, speed, target) {
        super(x, y);
        this.speed = speed;
        this.speedVector = new Vector(0, 0);
        this.target = target;
        this.animation = null;
        this.orientation = null;
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
            this.target.position.y - this.position.y).normalized();
    }

    update(world) {
        // set the orientation
        this.setOrientation();
        this.animation.setAnimation(this.orientation);

        // move
        this.speedVector = this.getVectorToTarget().dotProduct(this.speed);
        this.position = this.position.add(this.speedVector);

        // update the animation
        this.animation.update();
    }

    draw(camera) {
        this.animation.draw(camera);
    }

}