class Model {

    constructor(x, y, width = Tile.size, height = Tile.size) {
        this.position = new Vector(x, y);
        this.width = width;
        this.height = height;
        this.collisionAlpha = settings.collisionAlpha;
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
        if(this.position.x + this.collisionAlpha < model.position.x + model.width
        && this.position.x + this.width - this.collisionAlpha > model.position.x
        && this.position.y + this.collisionAlpha < model.position.y + model.height
        && this.position.y + this.height - this.collisionAlpha > model.position.y) {
            return true;
        }

        return false;
    }

    setCollisionAlpha(collisionAlpha) {
        this.collisionAlpha = collisionAlpha;
    }

}