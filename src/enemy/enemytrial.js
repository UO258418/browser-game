class EnemyTrial extends Enemy {

    constructor(x, y, speed, target) {
        super(x, y, speed, target, 100, 1);
        this.animation = new Animation(sprites.player, 4, 3, this, 8);
    }

}