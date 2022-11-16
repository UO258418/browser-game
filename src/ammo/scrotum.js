class Scrotum extends Ammo {

    static sound = audios.scrotum;

    constructor(origin, x, y) {
        super(origin, x, y, 30, 30, 10, 15);
        this.setLevelFunction(1, this.level1);
        this.setLevelFunction(2, this.level2);
        this.setLevel(1);
    }

    draw(camera, context) {
        context.drawImage(sprites.scrotum, this.position.x - this.width / 2 - camera.offset.x,
            this.position.y - this.height / 2 - camera.offset.y, this.width, this.height);
    }

    level1() {
        this.updateAfter = () => {
            this.position = this.position.add(this.speedVector);
        }
    }

    level2() {
        this.updateAfter = () => {
            let newCoords = rotateAround(this.origin.position.x, this.origin.position.y,
                this.position.x, this.position.y, 5);

            this.position.x = newCoords[0];
            this.position.y = newCoords[1];

            let vectorToTarget = this.origin.getVectorToTarget(this);
            vectorToTarget = vectorToTarget.normalize().dotProduct(this.distance);
            this.position = this.origin.position.add(vectorToTarget);
        }
    }

}