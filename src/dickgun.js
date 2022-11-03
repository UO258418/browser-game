class DickGun extends Weapon {

    constructor() {
        super(5, 1000, Dick);
    }

    attack(owner) {
        let ammo1 = new this.ammo(owner.position.x, owner.position.y).setSpeedVector(0, -1);
        let ammo2 = new this.ammo(owner.position.x, owner.position.y).setSpeedVector(1, 0);
        let ammo3 = new this.ammo(owner.position.x, owner.position.y).setSpeedVector(0, 1);
        let ammo4 = new this.ammo(owner.position.x, owner.position.y).setSpeedVector(-1, 0);

        gameLayer.ammo.push(ammo1, ammo2, ammo3, ammo4);
    }

}