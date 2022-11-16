class Weapon {

    constructor(owner, damage, cooldown, ammo) {
        this.owner = owner;
        this.damage = damage;
        this.cooldown = cooldown;
        this.ammo = ammo;
        this.current = null;
        this.lastUsage = -this.cooldown;
        this.level = 1;
        this.levelFunctions = [];
    }

    update() {
        this.current = new Date();
        let ellapsed = this.current - this.lastUsage;
        if(ellapsed >= this.cooldown) {
            this._attack(this.owner);
            this.lastUsage = this.current;
        }
    }

    _attack() {
        this.attack(this.owner);

        if(this.ammo.sound != null)
            this.ammo.sound.play();
    }

    attack() {

    }

    setLevelFunction(level, levelFunction) {
        this.levelFunctions[level - 1] = levelFunction.bind(this);
    }

    setLevel(level) {
        this.levelFunctions[level - 1]();
    }

}