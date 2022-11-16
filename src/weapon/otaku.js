class Otaku extends Weapon {

    constructor(owner) {
        super(owner, 5, 10000, BadSmell);
        this.setLevelFunction(1, this.level1);
        this.setLevel(1);
    }

    level1() {
        this.attack = (owner) => {
            let ammo1 = new this.ammo(owner);
            gameLayer.ammo.push(ammo1);
        }
    }

}