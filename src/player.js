class Player extends Character {

    constructor(x, y, speed = Tile.size / 10, hp = 100) {
        super(x, y, speed);
        this.animation = new Animation(sprites.player, 8, 6, this, 10);
        this.setCollisionAlpha(30);
        this.maxHp = hp;
        this.hp = this.maxHp;
        this.exp = 0;
        this.maxExp = 200;
        this.level = 1;

        // bars
        this.barCluster.addBar("HP", "hp", "maxHp", 80, 12,
            "red", "black");

        this.weapons.push(new Otaku(this), new ScrotumLauncher(this));
    }

    updateAfter() {
        this.levelUp();
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

    levelUp() {
        let remainingExp = this.maxExp - this.exp;
        if(remainingExp <= 0) {
            this.level += 1;
            this.exp = Math.abs(remainingExp);
            this.maxExp = Math.round(this.maxExp * playerSettings.expIncreasePerLevel);
        }
    }

}