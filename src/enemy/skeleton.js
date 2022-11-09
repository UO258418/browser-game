class Skeleton extends Enemy {

    constructor(x, y, target) {
        super(x, y, Tile.size * 1.4, Tile.size * 1.4, 2, target, 100, 1);
        this.setCollisionAlpha(12);
        this.animation = new Animation(sprites.skeleton, 4, 6, this, 10);
    }

}