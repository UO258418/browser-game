class Model {

    constructor(x, y, width = Tile.size, height = Tile.size) {
        this.position = new Vector(x, y);
        this.width = width;
        this.height = height;
        this.collisionAlpha = 0;
    }

    isOnScreen(camera) {
        if((this.position.x + Tile.size / 2 - camera.offset.x) >= 0
        && (this.position.x - Tile.size / 2 - camera.offset.x) <= canvas.width
        && (this.position.y + Tile.size / 2 - camera.offset.y) >= 0
        && (this.position.y - Tile.size / 2 - camera.offset.y) <= canvas.height) {
            return true;
        } else {
            return false;
        }
    }

    update(world) {

    }

    draw(camera) {

    }

    render(camera) {
        if(this.isOnScreen(camera))
            this.draw(camera);
    }

    collides(model) {
        if(this.position.x - this.width / 2 + this.collisionAlpha < model.position.x + model.width / 2
        && this.position.x + this.width / 2 - this.collisionAlpha > model.position.x - model.width / 2
        && this.position.y - this.height / 2 + this.collisionAlpha < model.position.y + model.height / 2
        && this.position.y + this.height / 2 - this.collisionAlpha > model.position.y - model.height / 2) {
            return true;
        }

        return false;
    }

    setCollisionAlpha(collisionAlpha) {
        this.collisionAlpha = collisionAlpha;
    }

    drawCollisionBox(camera) {
        ctx.strokeStyle = "red";
        ctx.strokeRect(this.position.x - this.width / 2 - camera.offset.x + this.collisionAlpha,
            this.position.y - this.height / 2 - camera.offset.y + this.collisionAlpha,
            this.width - 2 * this.collisionAlpha, this.height - 2 * this.collisionAlpha);
    }

}