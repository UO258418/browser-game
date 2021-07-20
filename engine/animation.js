class Animation {

    constructor(spriteSheet, rows, frames, model, refreshRate) {
        this.spriteSheet = spriteSheet;
        this.rows = rows;
        this.frames = frames;
        this.model = model;
        this.refreshRate = refreshRate;
        this.currentFrame = 0;
        this.lastRefreshed = 0;

        this.frameWidth = this.spriteSheet.width / this.frames;
        this.frameHeight = this.spriteSheet.height / this.rows;

        this.framePositionX = 0;
        this.framePositionY = 0;
    }

    update() {
        this.lastRefreshed++;

        if(this.lastRefreshed > this.refreshRate) {
            this.lastRefreshed = 0;
            this.currentFrame++;

            if(this.currentFrame >= this.frames) {
                this.currentFrame = 0;
            }
        }

        this.framePositionX = this.currentFrame * this.frameWidth;
    }

    draw(camera) {
        ctx.drawImage(this.spriteSheet, this.framePositionX, this.framePositionY,
            this.frameWidth, this.frameHeight, this.model.position.x - Tile.size / 2 - camera.offset.x,
            this.model.position.y - Tile.size / 2 - camera.offset.y, Tile.size, Tile.size);
    }

    setAnimation(row) {
        this.framePositionY = row * this.frameHeight;
    }

}