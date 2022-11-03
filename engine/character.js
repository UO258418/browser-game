class Character extends Model {

    constructor(x, y, speed = Tile.size / 10) {
        super(x, y, Tile.size, Tile.size);
        this.animation = null;
        this.speed = speed;
        this.speedVector = new Vector(0, 0);
        this.state = state.IDLE;
        this.orientation = orientation.UP;
        this.barCluster = new BarCluster(this);
        this.weapons = [];
    }

    update(world) {
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
    }

    draw(camera) {
        this.animation.draw(camera);
        this.barCluster.draw(camera);
    }

    moveUp() {
        this.animation.setAnimation(0);
        this.speedVector.y = -this.speed;
        this.state = state.WALKING;
        this.orientation = orientation.UP;
    }

    moveRight() {
        this.animation.setAnimation(1);
        this.speedVector.x = this.speed;
        this.state = state.WALKING;
        this.orientation = orientation.RIGHT;
    }

    moveDown() {
        this.animation.setAnimation(2);
        this.speedVector.y = this.speed;
        this.state = state.WALKING;
        this.orientation = orientation.DOWN;
    }

    moveLeft() {
        this.animation.setAnimation(3);
        this.speedVector.x = -this.speed;
        this.state = state.WALKING;
        this.orientation = orientation.LEFT;
    }

    stop() {
        this.speedVector.x = 0;
        this.speedVector.y = 0;
        this.state = state.IDLE;
    }

}