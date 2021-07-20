class Tile extends Model {

    static size = 0;
    
    constructor(sprite, x, y) {
        super(x, y);
        this.sprite = sprite;
    }

    draw(camera) {
        ctx.drawImage(this.sprite, this.position.x - Tile.size / 2 - camera.offset.x,
             this.position.y - Tile.size / 2 - camera.offset.y,
              Tile.size, Tile.size);
    }

    static setSize(size) {
        this.size = size;
    }

}