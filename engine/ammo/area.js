class Area extends Ammo {

    constructor(origin, width, height, damage, duration, speed = 0) {
        super(origin, origin.position.x, origin.position.y, width, height, damage, speed, duration);
        this.color = `rgba(0, 0, 0, 0.6)`;
        this.current = null;
        this.created = new Date();
    }

    update() {
        if(this.origin != null) {
            this.position.x = this.origin.position.x;
            this.position.y = this.origin.position.y;
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

    draw(camera, context) {
        this._draw(camera, context);

        context.fillStyle = this.color;
        context.beginPath();
        context.ellipse(this.position.x - camera.offset.x, this.position.y - camera.offset.y,
            this.width, this.height, 0, 0, 2 * Math.PI);
        context.closePath();
        context.fill();
    }

    _draw(camera, context) {

    }

    setColor(color) {
        this.color = color;
    }

    collides(model) {
        let distanceToModel = this.distanceToTarget(model);
        let margin = (model.width - model.collisionAlpha + model.height - model.collisionAlpha) / 4 * 0.6;
        if(distanceToModel <= (this.width + this.height) / 2 + margin)
            return true;

        return false;
    }

    drawCollisionBox(camera, model, context) {
        let margin = (model.width + model.height) / 4 * 0.6;
        context.strokeStyle = "red";
        context.beginPath();
        context.ellipse(this.position.x - camera.offset.x, this.position.y - camera.offset.y,
            this.width + margin, this.height + margin, 0, 0, 2 * Math.PI);
        context.closePath();
        context.stroke();
    }

}