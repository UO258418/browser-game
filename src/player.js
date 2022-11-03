class Player extends Character {

    constructor(x, y, speed = Tile.size / 10, hp = 100) {
        super(x, y, speed);
        this.animation = new Animation(sprites.player, 4, 3, this, 8);
        this.setCollisionAlpha(30);
        this.maxHp = hp;
        this.hp = this.maxHp;
        this.maxMana = 20;
        this.mana = this.maxMana;

        // bars
        this.barCluster.addBar("HP", "hp", "maxHp", 80, 12,
            "red", "black");

        this.weapons.push(new DickGun());
    }

    takeDamage(damage) {
        if(this.hp - damage < 0)
            this.hp = 0;
        else
            this.hp -= damage;
    }

}