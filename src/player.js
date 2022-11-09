class Player extends Character {

    constructor(x, y, speed = Tile.size / 10, hp = 100) {
        super(x, y, speed);
        this.animation = new Animation(sprites.player, 8, 6, this, 10);
        this.setCollisionAlpha(15);
        this.maxHp = hp;
        this.hp = this.maxHp;
        this.exp = 0;

        // bars
        this.barCluster.addBar("HP", "hp", "maxHp", 80, 12,
            "red", "black");

        this.weapons.push(new Otaku(), new ScrotumLauncher());
    }

    takeDamage(damage) {
        if(this.hp - damage < 0)
            this.hp = 0;
        else
            this.hp -= damage;
    }

    collect(drop) {
        this[drop.attribute] += drop.value;
    }

}