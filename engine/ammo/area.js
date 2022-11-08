class Area extends Ammo {

    constructor(center, width, height, damage, duration, speed = 0) {
        super(center.position.x, center.position.y, width, height, damage, speed);
        this.center = center;
        this.color = new Vector(0, 255, 255);
        this.duration = duration;
        this.current = null;
        this.created = new Date();
    }

    update() {
        if(this.center != null) {
            this.position.x = this.center.position.x;
            this.position.y = this.center.position.y;
        }

        this.current = new Date();
        let ellapsed = this.current - this.created;
        if(ellapsed >= this.duration) {
            gameLayer.removeFromCollection("ammo", this);
        }

        this._update();
    }

    _update() {

    }

    draw(camera) {
        ctx.fillStyle = `rgba(${this.color.x}, ${this.color.y}, ${this.color.z}, 0.6)`;
        ctx.beginPath();
        ctx.ellipse(this.position.x - camera.offset.x, this.position.y - camera.offset.y,
            this.width, this.height, 0, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();

        this.drawCollisionBox(camera);
    }

    setColor(r, g ,b) {
        this.color = new Vector(r, g, b);
    }

    collides(model) {
        if(this.position.x - this.width + this.collisionAlpha < model.position.x + model.width / 2
            && this.position.x + this.width - this.collisionAlpha > model.position.x - model.width / 2
            && this.position.y - this.height + this.collisionAlpha < model.position.y + model.height / 2
            && this.position.y + this.height - this.collisionAlpha > model.position.y - model.height / 2) {
            return true;
        }

        return false;
    }

    drawCollisionBox(camera) {
        ctx.strokeStyle = "red";
        ctx.strokeRect(this.position.x - this.width - camera.offset.x + this.collisionAlpha,
            this.position.y - this.height - camera.offset.y + this.collisionAlpha,
            this.width * 2 - this.collisionAlpha * 2, this.height * 2 - this.collisionAlpha * 2);
    }

}