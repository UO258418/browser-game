class Model {

    constructor(x, y) {
        this.position = new Vector(x, y);
    }

    isOnScreen(camera) {
        if((this.position.x + settings.tileSize / 2 - camera.offset.x) >= 0
        && (this.position.x - settings.tileSize / 2 - camera.offset.x) <= canvas.width
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

}