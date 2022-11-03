class Player extends Character {

    constructor(x, y, speed = Tile.size / 10) {
        super(x, y, speed);
        this.animation = new Animation(sprites.player, 4, 3, this, 8);
        this.setCollisionAlpha(30);
    }

}