class Otaku extends Weapon {

    constructor() {
        super(5, 10000, BadSmell);
    }

    attack(owner) {
        let ammo1 = new this.ammo(owner);
        gameLayer.ammo.push(ammo1);
    }

}