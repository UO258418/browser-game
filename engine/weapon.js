class Weapon {

    constructor(damage, cooldown, ammo) {
        this.damage = damage;
        this.cooldown = cooldown;
        this.ammo = ammo;
        this.current = null;
        this.lastUsage = -this.cooldown;
    }

    update(owner) {
        this.current = new Date();
        let ellapsed = this.current - this.lastUsage;
        if(ellapsed >= this.cooldown) {
            this._attack(owner);
            this.lastUsage = this.current;
        }
    }

    _attack(owner) {
        this.attack(owner);

        if(this.ammo.sound != null)
            this.ammo.sound.play();
    }

    attack(owner) {

    }

}