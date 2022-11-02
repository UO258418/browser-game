class Character extends Model {

    constructor(x, y, speed = Tile.size / 10) {
        super(x, y);
        this.animation = null;
        this.speed = speed;
        this.currentSpeed = {
            x: 0,
            y: 0
        }
        this.state = state.IDLE;
        this.orientation = orientation.UP;
    }

    update(world) {
        // move
        this.position.x += this.currentSpeed.x;
        this.position.y += this.currentSpeed.y;

        // update the animation
        this.animation.update();
    }

    draw(camera) {
        this.animation.draw(camera);
    }

    moveUp() {
        this.animation.setAnimation(0);
        this.currentSpeed.y = -this.speed;
        this.state = state.WALKING;
        this.orientation = orientation.UP;
    }

    moveRight() {
        this.animation.setAnimation(1);
        this.currentSpeed.x = this.speed;
        this.state = state.WALKING;
        this.orientation = orientation.RIGHT;
    }

    moveDown() {
        this.animation.setAnimation(2);
        this.currentSpeed.y = this.speed;
        this.state = state.WALKING;
        this.orientation = orientation.DOWN;
    }

    moveLeft() {
        this.animation.setAnimation(3);
        this.currentSpeed.x = -this.speed;
        this.state = state.WALKING;
        this.orientation = orientation.LEFT;
    }

    stop() {
        this.currentSpeed.x = 0;
        this.currentSpeed.y = 0;
        this.state = state.IDLE;
    }

}