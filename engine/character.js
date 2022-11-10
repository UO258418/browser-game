class Character extends Model {

    constructor(x, y, speed = Tile.size / 10) {
        super(x, y, Tile.size * 1.4, Tile.size * 1.4);
        this.animation = null;
        this.speed = speed;
        this.speedVector = new Vector(0, 0);
        this.state = state.IDLE;
        this.orientation = orientation.UP;
        this.barCluster = new BarCluster(this);
        this.weapons = [];
    }

    update() {
        // move
        if(this.speedVector.x != 0 || this.speedVector.y != 0)
            this.speedVector = this.speedVector.normalize().dotProduct(this.speed);
        this.position = this.position.add(this.speedVector);

        // update the animation
        this.animation.update();

        // update the barCluster
        this.barCluster.update();

        // update weapons
        this.weapons.forEach(weapon => weapon.update(this));

        this.updateAfter();
    }

    updateAfter() {

    }

    draw(camera, context) {
        this.animation.draw(camera, context);
        this.barCluster.draw(camera, context);
    }

    moveUp() {
        this.animation.setAnimation(0);
        this.speedVector.y = -this.speed;
        this.state = state.WALKING;
        this.orientation = orientation.UP;
    }

    moveRight() {
        this.animation.setAnimation(2);
        this.speedVector.x = this.speed;
        this.state = state.WALKING;
        this.orientation = orientation.RIGHT;
    }

    moveDown() {
        this.animation.setAnimation(4);
        this.speedVector.y = this.speed;
        this.state = state.WALKING;
        this.orientation = orientation.DOWN;
    }

    moveLeft() {
        this.animation.setAnimation(6);
        this.speedVector.x = -this.speed;
        this.state = state.WALKING;
        this.orientation = orientation.LEFT;
    }

    stop() {
        this.speedVector.x = 0;
        this.speedVector.y = 0;
        this.state = state.IDLE;
        switch (this.orientation) {
            case orientation.UP:
                this.animation.setAnimation(1);
                break;
            case orientation.RIGHT:
                this.animation.setAnimation(3);
                break;
            case orientation.DOWN:
                this.animation.setAnimation(5);
                break;
            case orientation.LEFT:
                this.animation.setAnimation(7);
                break;
        }
    }

}