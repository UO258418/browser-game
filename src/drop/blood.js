class Blood extends Drop {

    constructor(x, y, target) {
        super(x, y, 20, 20, 6, target, 400, "exp", 20);
    }

    draw(camera) {
        ctx.drawImage(sprites.blood, this.position.x - this.width / 2 - camera.offset.x,
            this.position.y - this.height / 2 - camera.offset.y, this.width, this.height);
    }

}