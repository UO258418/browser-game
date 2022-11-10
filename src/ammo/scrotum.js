class Scrotum extends Ammo {

    static sound = audios.scrotum;

    constructor(x, y) {
        super(x, y, 30, 30, 10, 15);
    }

    update() {
        // move
        if(this.speedVector.x != 0 || this.speedVector.y != 0)
            this.speedVector = this.speedVector.normalize().dotProduct(this.speed);
        this.position = this.position.add(this.speedVector);
    }

    draw(camera, context) {
        context.drawImage(sprites.scrotum, this.position.x - this.width / 2 - camera.offset.x,
            this.position.y - this.height / 2 - camera.offset.y, this.width, this.height);
    }

}