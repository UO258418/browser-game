class Goblin extends Enemy {

    constructor(x, y, target) {
        super(x, y, Tile.size * 1.4, Tile.size * 1.4, 2.5, target, 100, 1);
        this.setCollisionAlpha(18);
        this.animation = new Animation(sprites.goblin, 4, 6, this, 10);
    }

}