class Model {

    constructor(x, y, width = Tile.size, height = Tile.size) {
        this.position = new Vector(x, y);
        this.width = width;
        this.height = height;
        this.collisionAlpha = 0;
    }

    isOnScreen(camera, context) {
        if((this.position.x + Tile.size / 2 - camera.offset.x) >= 0
        && (this.position.x - Tile.size / 2 - camera.offset.x) <= context.canvas.width
        && (this.position.y + Tile.size / 2 - camera.offset.y) >= 0
        && (this.position.y - Tile.size / 2 - camera.offset.y) <= context.canvas.height) {
            return true;
        } else {
            return false;
        }
    }

    update() {

    }

    draw(camera, context) {

    }

    render(camera, context) {
        if(this.isOnScreen(camera, context))
            this.draw(camera, context);
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

    drawCollisionBox(camera, context) {
        context.strokeStyle = "red";
        context.strokeRect(this.position.x - this.width / 2 - camera.offset.x + this.collisionAlpha,
            this.position.y - this.height / 2 - camera.offset.y + this.collisionAlpha,
            this.width - 2 * this.collisionAlpha, this.height - 2 * this.collisionAlpha);
    }

    getVectorToTarget(target) {
        return new Vector(target.position.x - this.position.x,
            target.position.y - this.position.y).normalize();
    }

    distanceToTarget(target) {
        return new Vector(target.position.x - this.position.x,
            target.position.y - this.position.y).module();
    }

}