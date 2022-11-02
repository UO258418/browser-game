class EnemyTrial extends Enemy {

    constructor(x, y, speed, target) {
        super(x, y, speed, target);
        this.animation = this.animation = new Animation(sprites.player, 4, 3, this, 8);
    }

}