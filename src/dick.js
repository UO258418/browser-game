class Dick extends Ammo {

    constructor(x, y) {
        super(x, y, 20, 10, 10, 15);
    }

    update() {
        // move
        if(this.speedVector.x != 0 || this.speedVector.y != 0)
            this.speedVector = this.speedVector.normalize().dotProduct(this.speed);
        this.position = this.position.add(this.speedVector);
    }

    draw(camera) {
        ctx.drawImage(sprites.dick, this.position.x - this.width / 2 - camera.offset.x,
            this.position.y - this.height / 2 - camera.offset.y, this.width, this.height);
    }

}