class SpriteManager {

    constructor(sprite, sheetWidth, sheetHeight, spriteWidth, spriteHeight) {
        this.sprite = sprite;
        this.sheetWidth = sheetWidth;
        this.sheetheight = sheetHeight;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.rows = this.sheetheight / this.spriteHeight;
        this.cols = this.sheetWidth / this.spriteWidth;
    }

    drawSprite(col, row, x, y, width, height, camera, context) {
        context.drawImage(this.sprite, col * this.spriteWidth, row * this.spriteHeight, this.spriteWidth,
            this.spriteHeight, x - width / 2 - camera.offset.x, y - height / 2 - camera.offset.y, width, height);
    }

}