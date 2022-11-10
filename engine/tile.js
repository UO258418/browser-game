class Tile extends Model {

    static size = 0;
    
    constructor(x, y, spriteManager, spriteCol, spriteRow) {
        super(x, y);
        this.spriteManager = spriteManager;
        this.spriteCol = spriteCol;
        this.spriteRow = spriteRow;
    }

    draw(camera, context) {
        this.spriteManager.drawSprite(
            this.spriteCol,
            this.spriteRow,
            this.position.x,
            this.position.y,
            Tile.size,
            Tile.size,
            camera,
            context
        );
    }

    static setSize(size) {
        this.size = size;
    }

}