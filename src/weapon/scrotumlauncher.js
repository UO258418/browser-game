class ScrotumLauncher extends Weapon {

    constructor(owner) {
        super(owner, 5, 1000, Scrotum);
        this.setLevelFunction(1, this.level1);
        this.setLevelFunction(2, this.level2);
        this.setLevelFunction(3, this.level3);
        this.setLevel(1);
    }

    level1() {
        this.cooldown = 1000;

        this.attack = () => {
            let ammo1 = new this.ammo(this.owner, this.owner.position.x,
                this.owner.position.y).setSpeedVector(0, -1);

            let ammo2 = new this.ammo(this.owner, this.owner.position.x,
                this.owner.position.y).setSpeedVector(1, 0);

            let ammo3 = new this.ammo(this.owner, this.owner.position.x,
                this.owner.position.y).setSpeedVector(0, 1);

            let ammo4 = new this.ammo(this.owner, this.owner.position.x,
                this.owner.position.y).setSpeedVector(-1, 0);

            gameLayer.ammo.push(ammo1, ammo2, ammo3, ammo4);
        }
    }

    level2() {
        this.cooldown = 1000;

        this.attack = () => {
            let ammo1 = new this.ammo(this.owner, this.owner.position.x,
                this.owner.position.y).setSpeedVector(0, -1);

            let ammo2 = new this.ammo(this.owner, this.owner.position.x,
                this.owner.position.y).setSpeedVector(1, 0);

            let ammo3 = new this.ammo(this.owner, this.owner.position.x,
                this.owner.position.y).setSpeedVector(0, 1);

            let ammo4 = new this.ammo(this.owner, this.owner.position.x,
                this.owner.position.y).setSpeedVector(-1, 0);

            let ammo5 = new this.ammo(this.owner, this.owner.position.x,
                this.owner.position.y).setSpeedVector(-1, -1);

            let ammo6 = new this.ammo(this.owner, this.owner.position.x,
                this.owner.position.y).setSpeedVector(1, -1);

            let ammo7 = new this.ammo(this.owner, this.owner.position.x,
                this.owner.position.y).setSpeedVector(1, 1);

            let ammo8 = new this.ammo(this.owner, this.owner.position.x,
                this.owner.position.y).setSpeedVector(-1, 1);


            gameLayer.ammo.push(ammo1, ammo2, ammo3, ammo4, ammo5, ammo6, ammo7, ammo8);
        }
    }

    level3() {
        this.cooldown = Infinity;

        let distance = 200;
        let ammoList = [
            new this.ammo(this.owner, this.owner.position.x,
                this.owner.position.y - distance).setSpeedVector(0, -1),

            new this.ammo(this.owner, this.owner.position.x + distance,
                this.owner.position.y).setSpeedVector(1, 0),

            new this.ammo(this.owner, this.owner.position.x,
                this.owner.position.y + distance).setSpeedVector(0, 1),

            new this.ammo(this.owner, this.owner.position.x - distance,
                this.owner.position.y).setSpeedVector(-1, 0)
        ];

        ammoList.forEach(ammo => {
            ammo.distance = distance;
            ammo.setLevel(2);
            gameLayer.ammo.push(ammo);
        });

        this.attack = () => {}
    }

}