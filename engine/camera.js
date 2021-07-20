class Camera {

    constructor(followed, x = canvas.width / 2, y = canvas.height / 2) {
        this.followed = followed;
        this.position = new Vector(x, y);
        this.offset = new Vector();
    }

    update(world) {
        this.offset.x = this.followed.position.x - this.position.x;
        this.offset.y = this.followed.position.y - this.position.y;

        let minLeft = this.followed.position.x - this.position.x;
        let maxRight = this.followed.position.x + (canvas.width - this.position.x);
        let minTop = this.followed.position.y - this.position.y;
        let maxBottom = this.followed.position.y + (canvas.height - this.position.y);

        if(minLeft < 0) this.offset.x = 0;
        if(maxRight > world.area) this.offset.x = (world.area) - canvas.width;
        if(minTop < 0) this.offset.y = 0;
        if(maxBottom > world.area) this.offset.y = (world.area) - canvas.height;
    }

}